import {ADirective} from 'framework';

class HoverDirective extends ADirective {
    constructor(config) {
        super(config)
    }
}

export const hoverDirective = new HoverDirective({
    selector: '[appHover]',
    onInit(element, color = 'blue') {
        const defaultColor = element.css().color

        element.on('mouseenter', () => {
            element.css({color})
        })

        element.on('mouseleave', () => {
            element.css({color: defaultColor})
        })
    }
})
