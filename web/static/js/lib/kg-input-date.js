import BaseComponent from '../base/base-component.js'

export default class KGInputDate extends BaseComponent {
    static TAG = 'date'

    static DEFAULT_OPTIONS = {
        type: KGInputDate.TAG,
        id: `kg-${KGInputDate.TAG}`,
        label: KGInputDate.TAG,
        name: null,
        value: currentDate(),
        min: null,
        max: null,
    }

    constructor(element, options) {
        super(element)

        this.options = Object.assign(KGInputDate.DEFAULT_OPTIONS, options)
        this.initElement()
    }

    initElement() {
        const options = this.options

        const label = document.createElement('label')
        label.htmlFor = options.id
        label.textContent = options.label

        const input = document.createElement('input')
        input.type = KGInputDate.TAG
        input.id = options.id
        input.name = options.name
        input.value = options.value
        if (!isNull(options.min)) input.min = options.min
        if (!isNull(options.max)) input.max = options.max

        const field = document.createElement('div')
        field.append(label, input)

        this.dom = field
        this.holder.append(field)
    }
}