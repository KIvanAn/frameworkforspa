import {AComponent} from 'framework';

class AppHeader extends AComponent {
    constructor(config) {
        super(config)
    }
}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
        <nav class="indigo">
            <div class="container">
                <div class="nav-wrapper">
                  <a href="#" class="brand-logo">Framework for SPA</a>
                  <ul class="right hide-on-med-and-down">
                    <li><a href="#">Home</a></li>
                    <li><a href="#tabs">Tabs</a></li>
                  </ul>
                </div>
            </div>
         </nav>
    `
})
