import {homePageComponent} from './pages/home-page.component';
import {tabsPageComponent} from './pages/tabs-page.component';
import {app404} from './common/app.404';

export const appRoutes = [
    {path: '', component: homePageComponent},
    {path: 'tabs', component: tabsPageComponent},
    {path: '**', component: app404},
]
