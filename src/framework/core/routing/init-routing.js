import {_} from 'framework';
import {RoutingModule} from './routing.module';

export function initRouting(routes, dispatcher) {
    if (_.isUndefined(routes)) return

    const routing = new RoutingModule(routes, dispatcher)
    routing.init()
}
