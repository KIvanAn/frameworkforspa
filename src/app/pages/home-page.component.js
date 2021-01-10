import {AComponent, router, http} from 'framework';

class HomePageComponent extends AComponent {
    constructor(config) {
        super(config)

        this.data = {
            title: 'Home page!!',
            description: `
                I am a very simple card. I am good at containing 
                small bits of information. I am convenient because I 
                require little markup to use effectively.
            `,
            linkTitle: 'Go to tabs',
            ip: 'Loading...'
        }
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
        http.get('https://api64.ipify.org?format=json')
            .then(({ip}) => {
                this.data.ip = ip
                this.render()
            })
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
                  <div class="card darken-1 home-card">
                    <div class="card-content white-text">
                      <span class="card-title">{{ title }}</span>
                      <p>{{ description }}</p>
                      </br>
                      <p>Your ip: {{ ip }}</p>
                    </div>
                    <div class="card-action">
                      <a href="#" class="js-link">{{ linkTitle }}</a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    `,
    styles: `
        .home-card { background: #1e88e5; }
    `
})
