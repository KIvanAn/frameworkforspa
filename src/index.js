import './style.css';
import {bootstrap} from './framework/main';
import {appModule} from './app/app.module';
import {helperUtil} from './framework/tools/utils';

helperUtil.delay().then(() => {
    bootstrap(appModule)
})
