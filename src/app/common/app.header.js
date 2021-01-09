import {AComponent} from '../../framework/main';

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
                    <li><a href="#">Sass</a></li>
                    <li><a href="#">Components</a></li>
                  </ul>
                </div>
            </div>
         </nav>
    `
})
