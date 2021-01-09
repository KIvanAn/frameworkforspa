import {helperUtil, router} from '../main';

export class Module {
    constructor(config) {
        this.components = config.components
        this.mainComponent = config.mainComponent
        this.routes = config.routes
    }

    start() {
        this.initComponents()
        if (this.routes) this.initRoutes()
    }

    initComponents() {
        this.mainComponent.render()
        this.components.forEach(this.renderComponent.bind(this))
    }

    initRoutes() {
        window.addEventListener('hashchange', this.renderRoute.bind(this))
        this.renderRoute()
    }

    renderRoute() {
        const url = router.getUrl()
        let route = this.routes.find(r => r.path === url)

        if (helperUtil.isUndefined(route)) {
            route = this.routes.find(r => r.path === '**')
        }

        document.querySelector('router-outlet').innerHTML = `
            <${route.component.selector}></${route.component.selector}>
        `
        this.renderComponent(route.component)
    }

    renderComponent(c) {
        c.render()
    }
}
