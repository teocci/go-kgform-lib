import BaseComponent from '../base/base-component.js'

export default class KGInputText extends BaseComponent {

    static TAG = 'text'
    static DEFAULT_OPTIONS = {
        type: KGInputText.TAG,
        id: `kg-${KGInputText.TAG}`,
        label: KGInputText.TAG,
        name: null,
        required: false,
        minLength: null,
        maxLength: null,
        size: null,
    }

    constructor(element, options) {
        super(element)

        this.options = Object.assign(KGInputText.DEFAULT_OPTIONS, options)

        this.initElement()
    }

    initElement() {
        const options = this.options
        const field = document.createElement('div')

        const label = document.createElement('label')
        label.htmlFor = options.id
        label.textContent = options.label

        const input = document.createElement('input')
        input.type = options.type
        input.id = options.id
        input.requiered = options.requiered

        if (!isNull(options.name)) input.minLength = options.name
        if (!isNull(options.minLength)) input.minLength = options.minLength
        if (!isNull(options.maxLength)) input.maxLength = options.maxLength
        if (!isNull(options.size)) input.size = options.size

        field.append(label, input)

        this.dom = field
        this.holder.appendChild(field)
    }
}