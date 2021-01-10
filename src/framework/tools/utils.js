export const _ = {
    delay(ms = 1000) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, ms)
        })
    },

    isUndefined(data) {
        return typeof data === 'undefined'
    },

    isNull(value) {
        return value === null
    },

    isString(el) {
        return typeof el === 'string'
    },

    isEmpty(data) {
        return data.length && data.length === 0
    }
}
