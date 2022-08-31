export default class BaseListener {
    constructor() {
        this.listeners = new Map()
    }

    addListener(name, callback) {
        this.listeners.set(name, callback)
    }

    removeListener(name) {
        if (this.listeners.has(name)) this.listeners.delete(name)
    }

    listener(name) {
        return this.listeners.get(name) ?? null;
    }

    callListener(name, e, ...params) {
        const callback = this.listener(name) ?? null
        if (callback) callback(e, params)
    }
}