import {AModule} from '../framework/main';
import {appComponent} from './app.component';
import {appHeader} from './common/app.header';
import {appRoutes} from './app.routes';

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
    routes: appRoutes
})
