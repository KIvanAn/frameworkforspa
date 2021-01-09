import './style.css';

class Test {
    constructor(string) {
        this.string = string
    }

    init() {
        console.log(this.string)
    }
}

const test = new Test('Lala')
test.init()
