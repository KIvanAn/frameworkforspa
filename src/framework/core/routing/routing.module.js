import {$, _, router} from 'framework';
import {renderComponent} from '../component/render-component';

export class RoutingModule {
    constructor(routes, dispatcher) {
        this.routes = routes
        this.dispatcher = dispatcher
    }

    init() {
        window.addEventListener('hashchange', renderRoute.bind(this))
        renderRoute.call(this)
    }
}

function renderRoute() {
    const url = router.getUrl()
    // eslint-disable-next-line no-invalid-this
    let route = this.routes.find(r => r.path === url)

    if (_.isUndefined(route)) {
        // eslint-disable-next-line no-invalid-this
        route = this.routes.find(r => r.path === '**')
    }

    $('router-outlet')
        .html(`<${route.component.selector}></${route.component.selector}>`)

    renderComponent(route.component)

    // eslint-disable-next-line no-invalid-this
    this.dispatcher.emit('routing.change-page')
}
