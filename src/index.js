import './style.css';
import {bootstrap} from './framework/main';
import {appModule} from './app/app.module';
import {delayUtil} from './framework/tools/utils';

delayUtil.delay().then(() => {
    bootstrap(appModule)
})
