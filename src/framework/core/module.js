import {initComponents} from './component/init-components';
import {initRouting} from './routing/init-routing';

export class Module {
    constructor(config) {
        this.components = config.components
        this.mainComponent = config.mainComponent
        this.routes = config.routes
    }

    start() {
        initComponents(this.mainComponent, this.components)
        initRouting(this.routes)
    }
}
