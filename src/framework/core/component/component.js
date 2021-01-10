import {_} from '../../tools/utils';
import {$} from 'framework';

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
        const key = d.trim()
        return data[key]
    })

    return template
}

function initStyles(styles) {
    if (_.isUndefined(styles)) return

    const style = $(document.createElement('style'))
    style.html(styles)
    $(document.head).append(style)
}
