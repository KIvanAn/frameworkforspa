export const router = {
    getUrl() {
        return location.hash.slice(1)
    },

    navigate(hash) {
        location.hash = hash
    }
}
