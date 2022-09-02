import BaseComponent from '../base/base-component.js'

export default class KGFieldset extends BaseComponent {

    static TAG = 'fieldset'

    static DEFAULT_OPTIONS = {
        type: 'fieldset',
        legend: null,
        name: 'kg-fieldset',
    }

    constructor(element, options) {
        super(element)

        this.options = Object.assign(KGFieldset.DEFAULT_OPTIONS, options)
        this.fields = new Map()

        this.initElement()
    }

    initElement() {
        const fieldset = document.createElement('fieldset')
        const legend = document.createElement('legend')
        legend.textContent = this.options.legend

        fieldset.appendChild(legend)
        this.dom = fieldset

        this.holder.appendChild(fieldset)
    }

    addField(...fields) {
        const name = this.options.name

        // null이나 undefined가 올 경우 비교
        if (fields == null) throw Error('Invalid fields : null fields')
        if (fields.length === 0) throw Error('Invalid fields : empty fields')

        fields.forEach((element, idx) => {
            this.fields.set(`${name}-${idx}`, element)
            this.dom.appendChild(element)
        })
    }
}