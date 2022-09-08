import BaseComponent from '../base/base-component.js'

export default class KGInputRadio extends BaseComponent {
    static TAG = 'radio'

    static DEFAULT_OPTIONS = {
        type: KGInputRadio.TAG,
        name: null,
        id: null,
        value: null,
        checked: false,
        text: null
    }

    constructor(element, options) {
        super(element)
        
        this.options = Object.assign(KGInputRadio.DEFAULT_OPTIONS, options)
        this.initElement()
    }

    initElement() {
        const options = this.options
        
        const field = document.createElement('div')
        
        const radio = document.createElement('input')
        radio.type = options.type
        if( !isNull(options.id)) radio.id = options.id
        if( !isNull(options.value)) radio.value = options.value
        if( !isNull(options.name)) radio.name = options.name
        if( !isNull(options.checked)) radio.checked = options.checked

        const label = document.createElement('label')
        if (!isNull(options.id))    label.htmlFor = options.id
        if (!isNull(options.text)) label.textContent = options.text

        field.append(label, radio)
       
        this.dom = field
        this.holder.append(field)
    }
}