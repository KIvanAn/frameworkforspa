import {AComponent} from '../../framework/main';

class TabsPageComponent extends AComponent {
    constructor(config) {
        super(config)
    }

    events() {
        return {
            'click .collapsible': 'onTabClick'
        }
    }

    onTabClick({target}) {
        if (!target.classList.contains('collapsible-header')) return

        this.el.querySelectorAll('.js-tab')
            .forEach(e => e.classList.remove('active'))

        target.parentNode.classList.add('active')
    }
}

export const tabsPageComponent = new TabsPageComponent({
    selector: 'app-tabs-page',
    template: `
        <div class="container tabs-page">
            <div class="row">
                <div class="col s8 offset-s2">
                    <ul class="collapsible popout">
                          <li class="js-tab">
                            <div class="collapsible-header">
                                <i class="material-icons">filter_drama</i>First
                            </div>
                            <div class="collapsible-body">
                              <span>
                                  Lorem ipsum dolor sit amet, 
                                  consectetur adipiscing elit, sed 
                                  do eiusmod tempor incididunt ut 
                                  labore et dolore magna aliqua. Ut 
                                  enim ad minim veniam, quis nostrud 
                                  exercitation ullamco laboris nisi 
                                  ut aliquip ex ea commodo consequat.
                              </span>
                            </div>
                          </li>
                          <li class="js-tab">
                            <div class="collapsible-header">
                              <i class="material-icons">place</i>Second</div>
                            <div class="collapsible-body">
                              <span>
                                  Lorem ipsum dolor sit amet, 
                                  consectetur adipiscing elit, sed do 
                                  eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim 
                                    veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                              </span>
                            </div>
                          </li>
                          <li class="js-tab active">
                            <div class="collapsible-header">
                              <i class="material-icons">whatshot</i>Third</div>
                            <div class="collapsible-body">
                              <span>
                                  Lorem ipsum dolor sit amet, consectetur 
                                  adipiscing elit, sed do eiusmod tempor 
                                  incididunt ut labore et dolore magna 
                                  aliqua. Ut enim ad minim veniam, quis 
                                  nostrud exercitation ullamco laboris 
                                  nisi ut aliquip ex ea commodo consequat.
                              </span>
                            </div>
                          </li>
                    </ul>
                </div>
            </div>
        </div>
    `
})
