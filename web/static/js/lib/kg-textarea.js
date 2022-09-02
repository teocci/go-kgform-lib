import BaseComponent from '../base/base-component.js'

export default class KGTextArea extends BaseComponent {

    static TAG = 'textarea'
    static DEFAULT_OPTIONS = {
        type: 'textarea',
        title: 'kg-textarea',
        id: '',
        rows: '5',
        cols: '40',
    }

    constructor(element, options) {
        super(element)
        this.options = Object.assign(KGTextArea.DEFAULT_OPTIONS, options)
        console.log(this.options)
        this.initElement()
    }

    initElement() {
        const options = this.options

        let label = document.createElement('label')
        label.htmlFor = options.id
        label.textContent = options.title

        let textarea = document.createElement('textarea')
        textarea.id = options.id
        textarea.name = options.id
        textarea.cols = parseInt(options.cols)
        textarea.rows = parseInt(options.rows)

        let div = document.createElement('div')
        div.append(label, textarea)

        this.dom = div
        this.holder.appendChild(div)
    }
}