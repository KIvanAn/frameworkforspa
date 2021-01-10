import {APipe} from 'framework';

class MultiPipe extends APipe {
    constructor(config) {
        super(config)
    }
}

export const multiPipe = new MultiPipe({
    name: 'multi',
    transform(value, number = 2) {
        return +value * number
    }
})
