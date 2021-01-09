import {AComponent} from '../../framework/main';

class TabsPageComponent extends AComponent {
    constructor(config) {
        super(config)
    }
}

export const tabsPageComponent = new TabsPageComponent({
    selector: 'app-tabs-page',
    template: `<h1>Tabs page</h1>`
})
