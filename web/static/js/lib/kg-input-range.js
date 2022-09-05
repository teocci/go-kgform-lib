import BaseComponent from '../base/base-component.js'

export default class KGInputRange extends BaseComponent {
    static TAG = 'range'
    static DEFAULT_OPTIONS = {
        legend: '',
        type: KGInputRange.TAG,
        items: [
            {
                id: 'kg-id-1',
                label: 'kg-label-1',
                min: '0',
                max: '10',
            },
            {
                id: 'kg-id-2',
                label: 'kg-label-2',
                min: '0',
                max: '10',
            },
        ],
    }

    constructor(element, options) {
        super(element)
        this.options = Object.assign(KGInputRange.DEFAULT_OPTIONS, options)
        this.initElement()
    }

    initElement() {
        const options = this.options
        const fieldset = document.createElement('fieldset')
        const legend = document.createElement('legend')
        legend.textContent = options.legend

        fieldset.appendChild(legend)

        options.items.forEach(item => {
            const div = document.createElement('div')
            const input = document.createElement('input')
            input.type = options.type
            input.id = item.id
            input.name = item.id
            input.min = item.min
            input.max = item.max

            const label = document.createElement('label')
            label.htmlFor = item.id
            label.textContent = item.label

            div.append(input, label)
            fieldset.appendChild(div)
        })

        this.dom = fieldset
        this.holder.append(fieldset)
    }
}