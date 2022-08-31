import BaseListener from './base-listener.js'

export default class BaseComponent extends BaseListener {
    constructor(element) {
        super()

        this.placeholder = element
    }

    get placeholder() {
        return this.element
    }

    set placeholder(element) {
        this.element = element
    }

    get dom() {
        return this.placeholder
    }

    toggle(val) {
        const element = this.dom
        element.classList.toggle('hidden', val)
    }

    show() {
        const element = this.dom
        element.classList.remove('hidden')
    }

    hide() {
        const element = this.dom
        element.classList.add('hidden')
    }

    destroyChildren(element) {
        element = element ?? this.dom
        while (element.firstChild) {
            const lastChild = element.lastChild ?? false
            if (lastChild) element.removeChild(lastChild)
        }
    }
}