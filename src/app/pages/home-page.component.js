import {AComponent, router} from 'framework';

class HomePageComponent extends AComponent {
    constructor(config) {
        super(config)
    }

    events() {
        return {
            'click .js-link': 'goTo'
        }
    }

    onInit() {
        console.log('Component init')
    }

    afterInit() {
        console.log('Component after init')
    }

    goTo(event) {
        event.preventDefault()
        router.navigate('tabs')
    }
}

export const homePageComponent = new HomePageComponent({
    selector: 'app-home-page',
    template: `
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
                      <a href="#" class="js-link">This is a link</a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    `
})
