import {AModule} from '../framework/main';
import {appComponent} from './app.component';

class AppModule extends AModule {
    constructor(config) {
        super(config)
    }
}

export const appModule = new AppModule({
    components: [
        appComponent
    ]
})
