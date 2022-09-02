import BaseComponent from "../base/base-component.js"

export default class KGInputText extends BaseComponent {

    static TAG = 'text'
    static DEFAULT_OPTIONS = {
        id: '',
        title: 'kg-label',
        type: KGInputText.TAG,
        name: 'kg-name',
        required: false,
        minLength: null,
        maxLength: 15,
        size: 20,
    }

    constructor(element, options) {
        super(element)

        this.options = Object.assign(KGInputText.DEFAULT_OPTIONS, options)
        
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
        options.minLength ? input.minLength = options.minLength : null
        options.maxLength ? input.maxLength = options.maxLength : null
        options.size ? input.size = options.size : null
        

        div.append(label, input)

        const reference = document.getElementById('kg-form-btns')
        this.dom.insertBefore(div, reference)
    }
}