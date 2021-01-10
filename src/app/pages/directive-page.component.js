import {AComponent} from 'framework';

class DirectivePageComponent extends AComponent {
    constructor(config) {
        super(config)
    }
}

export const directivePageComponent = new DirectivePageComponent({
    selector: 'app-directive-page',
    template: `
        <div class="container">
            <div class="row">
                <div class="col s6 offset-s3">
                  <h2 appHover="red">Hover</h2>
                </div>
            </div>
        </div>
    `,
    styles: ``
})
