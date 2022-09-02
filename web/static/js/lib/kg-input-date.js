import BaseComponent from '../base/base-component.js'

export default class KGInputDate extends BaseComponent {
    static TAG = 'date'

    static DEFAULT_OPTIONS = {
        type: 'date',
        title: 'kg-date',
        id: '',
        name: '',
        value: currentDate(),
        min : null,
        max : null,
    }


    constructor(element, options) {
        super(element)

        this.options = Object.assign(KGInputDate.DEFAULT_OPTIONS, options)
        this.initElement()
    }

    initElement() {
        const options = this.options

        let label = document.createElement('label')
        label.htmlFor = options.id
        label.textContent = options.title

        let inputDate = document.createElement('input')
        inputDate.type = KGInputDate.TAG
        inputDate.id = options.id
        inputDate.name = options.name
        inputDate.value = options.value
        options.min ? inputDate.min = options.min : null
        options.max ? inputDate.max = options.max : null

        let div = document.createElement('div')
        div.append(label, inputDate)

        this.dom.append(div)
    }
}