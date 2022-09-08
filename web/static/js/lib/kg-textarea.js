/**
 * Created by RTT.
 * Author: teocci@yandex.com on 2022-9월-08
 */
import BaseComponent from '../base/base-component.js'

export default class KGTextArea extends BaseComponent {
    static TAG = 'textarea'
    static DEFAULT_OPTIONS = {
        type: KGTextArea.TAG,
        id: `kg-${KGTextArea.TAG}`,
        label: KGTextArea.TAG,
        name: null,
        rows: null,
        cols: null,
    }

    constructor(element, options) {
        super(element)
        this.options = Object.assign(KGTextArea.DEFAULT_OPTIONS, options)
        console.log(this.options)
        this.initElement()
    }

    initElement() {
        const options = this.options

        const label = document.createElement('label')
        label.htmlFor = options.id
        label.textContent = options.label

        const textarea = document.createElement('textarea')
        textarea.id = options.id
        textarea.name = options.id
        textarea.cols = options.cols
        textarea.rows = options.rows

        const field = document.createElement('div')
        field.append(label, textarea)

        this.dom = field
        this.holder.appendChild(field)
    }
}