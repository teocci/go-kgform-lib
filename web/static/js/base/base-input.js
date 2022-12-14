/**
 * Created by RTT.
 * Author: teocci@yandex.com on 2022-9월-06
 */
import BaseComponent from './base-component.js'

export default class BaseInput extends BaseComponent {
    static DEFAULT_INPUT_OPTIONS = {
        id: undefined,
        label: undefined,
        value: undefined,
    }

    constructor(element, options) {
        super(element)

        this.label = null
        this.input = null

        this.options = Object.assign(this.defaultOptions, options)

        this.initInput()
    }

    get defaultOptions () {
        return Object.assign(BaseInput.DEFAULT_INPUT_OPTIONS, this.constructor.DEFAULT_OPTIONS)
    }

    initInput() {
        const options = this.options

        const field = document.createElement('div')
        field.classList.add('field')

        const label = document.createElement('label')
        if (!isNull(options.id)) label.htmlFor = options.id
        if (!isNull(options.label)) label.textContent = options.label

        const input = document.createElement('input')
        input.type = options.type

        if (!isNull(options.id)) input.id = options.id
        if (!isNull(options.name)) input.name = options.name
        if (!isNull(options.value)) input.value = options.value
        if (!isNull(options.required)) input.required = options.required

        field.append(label, input)

        this.label = label
        this.input = input

        this.dom = field
        this.holder.append(field)
    }
}