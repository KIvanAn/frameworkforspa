import {_} from 'framework';
import {renderComponent} from './render-component';

export function initComponents(main, components) {
    if (_.isUndefined(main)) {
        throw new Error(`Main component is not defined`)
    }

    [main, ...components].forEach(renderComponent)
}
