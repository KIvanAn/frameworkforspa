import {AComponent} from '../framework/main';

class AppComponent extends AComponent {
    constructor(config) {
        super(config)
    }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `<div><h4>App component working!</h4></div>`
})
