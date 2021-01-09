import {AComponent} from '../../framework/main';

class App404 extends AComponent {
    constructor(config) {
        super(config)
    }
}

export const app404 = new App404({
    selector: 'app-404',
    template: `
        <div class="container">
            <div class="row">
                <div class="col s6 offset-s3">
                    <h2 class="red darken-1">
                        <strong>404</strong> 
                        Page not found
                    </h2>
                    <a href="#">Home</a>
                </div>
            </div>   
        </div>
    `
})
