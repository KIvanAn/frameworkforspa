import {AComponent} from 'framework';

class PipePageComponent extends AComponent {
    constructor(config) {
        super(config)

        this.data = {
            number: 10
        }
    }
}

export const pipePageComponent = new PipePageComponent({
    selector: 'app-pipe-page',
    template: `
        <div class="container">
            <div class="row">
                <div class="col s6 offset-s3">
                  <h2>{{ number }}</h2>
                  <h2>{{ number | multi }}</h2>
                  <h2>{{ number | multi:5 }}</h2>
                  <h2>{{ number | multi:5:4 }}</h2>
                </div>
            </div>
        </div>
    `,
    styles: ``
})
