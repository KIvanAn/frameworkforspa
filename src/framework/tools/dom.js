import {_} from './utils';

class Dom {
    constructor(selector) {
        this.el = typeof selector === 'string' ?
            document.querySelector(selector) :
            selector

        this.isDom = true
    }

    on(event, fn, context = null) {
        fn = fn.bind(this)
        this.el.addEventListener(event, fn)
        return this
    }

    off(event, fn) {
        this.el.removeEventListener(event, fn)
        return this
    }

    css(styles) {
        if (_.isUndefined(styles)) return this.el.style

        Object.keys(styles).forEach(key => {
            this.el.style[key] = styles[key]
        })

        return this
    }

    addClass(className) {
        this.el.classList.add(className)
        return this
    }

    removeClass(className) {
        this.el.classList.remove(className)
        return this
    }

    hasClass(className) {
        return this.el.classList.contains(className)
    }

    html(html) {
        if (html.isDom) html = html.el.innerHTML
        this.el.innerHTML = html
        return this
    }

    append(el) {
        if (el.isDom) el = el.el
        this.el.appendChild(el)
        return this
    }

    parent() {
        return $(this.el.parentNode)
    }

    attr(name, value = null) {
        if (_.isNull(value)) this.el.getAttribute(name)

        this.el.setAttribute(name, value)
        return this
    }

    find(selector) {
        return $(this.el.querySelector(selector))
    }

    findAll(selector) {
        return Array.from(this.el.querySelectorAll(selector)).map(e => $(e))
    }
}

export function $(selector) {
    return new Dom(selector)
}
