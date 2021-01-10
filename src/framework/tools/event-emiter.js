import {_} from 'framework';

export class EventEmiter {
    constructor() {
        this.listeners = {}
    }

    on(event, fn) {
        if (_.isUndefined(this.listeners[event])) this.listeners[event] = []

        this.listeners[event].push(fn)
    }

    emit(event, data) {
        if (_.isUndefined(this.listeners[event])) return

        this.listeners[event].forEach(fn => fn(data))
    }
}
