import BaseComponent from "../base/base-component.js"

export default class KGInputText extends BaseComponent {

    static TAG = 'text'

    constructor(element, options) {
        super(element)

        this.options = options
        this.initElement()
    }

    initElement() {
        const options = this.options

        const div = document.createElement('div')

        const label = document.createElement('label')
        label.htmlFor = options.id
        label.textContent = options.title

        const input = document.createElement('input')
        input.id = options.id
        input.type = options.type
        input.name = options.name
        input.requiered = options.requiered

        div.append(label, input)

        const reference = document.getElementById('kg-form-btns')
        this.dom.insertBefore(div, reference)
    }
}