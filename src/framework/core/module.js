import {renderComponent} from './component/render-component';
import {_} from 'framework';
import {RoutingModule} from './routing/routing.module';

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

function initComponents(main, components) {
    if (_.isUndefined(main)) {
        throw new Error(`Main component is not defined`)
    }

    [main, ...components].forEach(renderComponent)
}

function initRouting(routes) {
    if (_.isUndefined(routes)) return

    const routing = new RoutingModule(routes)
    routing.init()
}
