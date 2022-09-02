import BaseComponent from '../base/base-component.js'

export default class KGInputRadio extends BaseComponent {

    static TAG = 'radio'

    static DEFAULT_OPTIONS = {
        type: 'radio',
        legend: 'KG Input Radio',
        name: 'kg',
        items: [
            {
                id: 'kg1',
                value: 'kg1',
                checked: true,
                text: 'KG1',
            },
            {
                id: 'kg2',
                value: 'kg2',
                checked: false,
                text: 'KG2',
            },
        ],
    }

    constructor(element, options) {
        super(element)

        this.options = Object.assign(KGInputRadio.DEFAULT_OPTIONS, options)
        this.initElement()
    }

    initElement() {
        const options = this.options

        const fieldset = document.createElement('fieldset')

        const legend = document.createElement('legend')
        legend.textContent = options.legend

        fieldset.append(legend)

        options.items.forEach((item) => {
            const field = document.createElement('div')
            const radio = document.createElement('input')
            radio.type = KGInputRadio.TAG
            radio.id = item.id
            radio.value = item.value
            radio.name = options.name
            radio.checked = item.checked

            const label = document.createElement('label')
            label.htmlFor = item.id
            label.textContent = item.text

            field.append(radio, label)
            fieldset.appendChild(field)
        })

        this.dom = fieldset
        this.holder.append(fieldset)
    }
}