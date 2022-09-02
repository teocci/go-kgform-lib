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

    get dom () {
        return this.domElement
    }

    set dom (element) {
        this.domElement = element
    }

    toggle(val) {
        const element = this.placeholder
        element.classList.toggle('hidden', val)
    }

    show() {
        const element = this.placeholder
        element.classList.remove('hidden')
    }

    hide() {
        const element = this.placeholder
        element.classList.add('hidden')
    }

    destroyChildren(element) {
        element = element ?? this.placeholder
        while (element.firstChild) {
            const lastChild = element.lastChild ?? false
            if (lastChild) element.removeChild(lastChild)
        }
    }
}