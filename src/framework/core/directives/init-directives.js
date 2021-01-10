import {_} from 'framework';

export function initDirectives(directives) {
    if (_.isUndefined(directives)) return

    directives.forEach(d => d.init())
}
