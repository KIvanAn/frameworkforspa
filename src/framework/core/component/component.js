import {_} from '../../tools/utils';
import {$} from 'framework';
import {parsePipe} from '../pipes/parse-pipe';
import {applyPipe} from '../pipes/apply-pipe';

export class Component {
    constructor(config) {
        this.selector = config.selector
        this.template = config.template
        this.styles = config.styles
        this.el = null
    }

    render() {
        initStyles(this.styles)
        this.el = $(this.selector)
        if (!this.el) {
            throw new Error(
                `Component with selector ${this.selector} wasn't found`
            )
        }
        this.el.html(compileTemplate(this.template, this.data))

        initEvents.call(this)
    }
}

function initEvents() {
    // eslint-disable-next-line no-invalid-this
    if (_.isUndefined(this.events)) return

    // eslint-disable-next-line no-invalid-this
    const events = this.events()

    Object.keys(events).forEach(key => {
        const listener = key.split(' ')

        // eslint-disable-next-line no-invalid-this
        this.el.find(listener[1])
            // eslint-disable-next-line no-invalid-this
            .on(listener[0], this[events[key]].bind(this))
    })
}

function compileTemplate(template, data) {
    if (_.isUndefined(data)) return template

    const regex = /\{{(.*?)}}/g

    template = template.replace(regex, (str, d) => {
        let key = d.trim()
        let pipe

        if (hasPipe(key)) {
            pipe = parsePipe(key)
            key = getKeyFromPipe(key)
        }

        if (_.isUndefined(pipe)) return data[key]

        return applyPipe(pipe, data[key])
    })

    return template
}

function initStyles(styles) {
    if (_.isUndefined(styles)) return

    const style = $(document.createElement('style'))
    style.html(styles)
    $(document.head).append(style)
}

function hasPipe(key) {
    return key.includes('|')
}

function getKeyFromPipe(key) {
    return key.split('|')[0].trim()
}
