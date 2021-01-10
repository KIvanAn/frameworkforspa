import {AModule} from 'framework';
import {appComponent} from './app.component';
import {appHeader} from './shared/app.header';
import {appRoutes} from './app.routes';
import {hoverDirective} from './shared/directives/hover.directive';

class AppModule extends AModule {
    constructor(config) {
        super(config)
    }
}

export const appModule = new AppModule({
    components: [
        appHeader
    ],
    mainComponent: appComponent,
    routes: appRoutes,
    directives: [
        hoverDirective
    ]
})
