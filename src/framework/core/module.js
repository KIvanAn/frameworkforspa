export class Module {
    constructor(config) {
        this.components = config.components
        this.mainComponent = config.mainComponent
    }

    start() {
        this.initComponents()
    }

    initComponents() {
        this.mainComponent.render()
        this.components.forEach(c => c.render())
    }
}
