import BaseListener from './base-listener.js'

export default class BaseComponent extends BaseListener {
    constructor(element) {
        super()

        this.holder = element
    }

    get holder() {
        return this.placeholder
    }

    set holder(element) {
        this.placeholder = element
    }

    get dom() {
        return this.element
    }

    set dom(element) {
        this.element = element
    }

    get tag () {
        return this.constructor.TAG
    }

    append(...children) {
        if (children == null) throw Error(`invalidParameter: null children`)
        if (children.length < 1) throw Error(`invalidParameter: empty children`)

        this.dom.append(children)
    }

    appendChild(child) {
        if (child == null) throw Error(`invalidParameter: null child`)

        this.dom.appendChild(child)
    }

    appendToHolder(...children) {
        if (children == null) throw Error(`invalidParameter: null children`)
        if (children.length < 1) throw Error(`invalidParameter: empty children`)

        this.holder.append(...children)
    }

    appendChildToHolder(child) {
        if (child == null) throw Error(`invalidParameter: null child`)

        this.holder.appendChild(child)
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