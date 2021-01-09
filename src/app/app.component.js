import {AComponent} from '../framework/main';

class AppComponent extends AComponent {
    constructor(config) {
        super(config)
    }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        <div class="container home-page">
            <div class="row">
                <div class="col s6 offset-s3">
                  <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                      <span class="card-title">Home page</span>
                      <p>
                          I am a very simple card. 
                          I am good at containing 
                          small bits of information.
                          I am convenient because I 
                          require little markup to use 
                          effectively.
                      </p>
                    </div>
                    <div class="card-action">
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    `
})
