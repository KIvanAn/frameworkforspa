import {initComponents} from './component/init-components';
import {initRouting} from './routing/init-routing';
import {initDirectives} from './directives/init-directives';
import {initPipes} from './pipes/init-pipes';
import {EventEmiter} from 'framework';

export class Module {
    constructor(config) {
        this.components = config.components
        this.mainComponent = config.mainComponent
        this.routes = config.routes
        this.directives = config.directives
        this.pipes = config.pipes

        this.dispatcher = new EventEmiter()
    }

    start() {
        initPipes(this.pipes)
        initComponents(this.mainComponent, this.components)
        initRouting(this.routes, this.dispatcher)
        initDirectives(this.directives)

        this.dispatcher.on('routing.change-page', () => {
            initDirectives(this.directives)
        })
    }
}
