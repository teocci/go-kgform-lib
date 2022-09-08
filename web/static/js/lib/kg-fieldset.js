/**
 * Created by RTT.
 * Author: teocci@yandex.com on 2022-9월-08
 */
import BaseField from '../base/base-field.js'

export default class KGFieldset extends BaseField {
    static TAG = 'fieldset'

    static DEFAULT_OPTIONS = {
        type: KGFieldset.TAG,
        legend: undefined,
        group: `${KGFieldset.TAG}-group`,
        useFieldset: true,
    }

    constructor(element, options) {
        super(element, options)

        this.fields = new Map()

        this.content = null

        this.initField()
    }

    get defaultOptions() {
        return simpleMerge(KGFieldset.DEFAULT_OPTIONS, this.constructor.DEFAULT_OPTIONS)
    }

    initField() {
        const options = this.options

        const fieldset = this.createElement(options.useFieldset)

        const content = document.createElement('div')
        content.classList.add('fieldset-content')
        fieldset.append(content)

        this.content = content
        this.dom = fieldset
        this.holder.appendChild(fieldset)
    }

    createElement(useFieldset) {
        let element, legend
        const options = this.options
        if (useFieldset) {
            element = document.createElement('fieldset')
            legend = document.createElement('legend')
            if (!isNull(options.legend)) legend.textContent = this.options.legend
        } else {
            element = document.createElement('div')
            element.classList.add('fieldset', options.group)

            legend = document.createElement('div')
            legend.classList.add('fieldset-legend')
            if (!isNull(options.legend)) legend.textContent = this.options.legend
        }

        element.appendChild(legend)

        return element
    }

    addField(...fields) {
        const name = this.options.name

        // null이나 undefined가 올 경우 비교
        if (fields == null) throw Error('Invalid fields : null fields')
        if (fields.length === 0) throw Error('Invalid fields : empty fields')

        fields.forEach((element, idx) => {
            const id = element.id ?? `${name}-${idx}`
            this.fields.set(id, element)
            this.dom.appendChild(element)
        })
    }
}