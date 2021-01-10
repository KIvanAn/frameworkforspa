import {_} from 'framework';
import {RoutingModule} from './routing.module';

export function initRouting(routes) {
    if (_.isUndefined(routes)) return

    const routing = new RoutingModule(routes)
    routing.init()
}
