import {_} from 'framework';

export class EventEmiter {
    constructor() {
        this.listeners = {}
    }

    on(event, fn) {
        if (_.isUndefined(this.listeners[event])) this.listeners = []

        this.listeners.push(fn)
    }

    emit(event, data) {
        if (_.isUndefined(this.listeners[event])) return

        this.listeners.forEach(fn => fn(data))
    }
}
