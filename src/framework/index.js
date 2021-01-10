import {Module as AModule} from './core/module';
import {Component as AComponent} from './core/component/component';
import {Directive as ADirective} from './core/directives/directive';
import {EventEmiter} from 'framework/tools/event-emiter';
import {bootstrap} from './core/functions/bootstrap';
import {_} from './tools/utils';
import {$} from './tools/dom';
import {router} from './core/routing/router';

export {
    AModule,
    AComponent,
    ADirective,
    EventEmiter,
    bootstrap,
    _,
    $,
    router
}
