import {homePageComponent} from './pages/home-page.component';
import {tabsPageComponent} from './pages/tabs-page.component';
import {directivePageComponent} from './pages/directive-page.component';
import {app404} from './shared/app.404';

export const appRoutes = [
    {path: '', component: homePageComponent},
    {path: 'tabs', component: tabsPageComponent},
    {path: 'directives', component: directivePageComponent},
    {path: '**', component: app404},
]
