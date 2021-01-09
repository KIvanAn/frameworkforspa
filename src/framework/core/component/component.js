import {_} from '../../tools/utils';

export class Component {
    constructor(config) {
        this.selector = config.selector
        this.template = config.template
        this.el = null
    }

    render() {
        this.el = document.querySelector(this.selector)
        if (!this.el) {
            throw new Error(
                `Component with selector ${this.selector} wasn't found`
            )
        }
        this.el.innerHTML = this.template

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
        this.el.querySelector(listener[1])
            // eslint-disable-next-line no-invalid-this
            .addEventListener(listener[0], this[events[key]].bind(this))
    })
}
