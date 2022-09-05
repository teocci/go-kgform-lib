import BaseComponent from '../base/base-component.js'

export default class KGInputCheckBox extends BaseComponent {
    static TAG = 'checkbox'

    static DEFAULT_OPTIONS = {
        type: 'checkbox',
        legend: 'kg-checkbox',
        items: [
            {
                id: '',
                checked: false,
                text: '',
            },
            {
                id: '',
                checked: false,
                text: '',
            },
        ],
    }

    constructor(element, options) {
        super(element)

        this.options = Object.assign(KGInputCheckBox.DEFAULT_OPTIONS, options)
        this.initElement()
    }

    initElement() {
        const options = this.options

        const fieldset = document.createElement('fieldset')

        const legend = document.createElement('legend')
        legend.textContent = options.legend

        fieldset.appendChild(legend)

        options.items.forEach((item) => {
            const field = document.createElement('div')
            const checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.id = item.id
            checkbox.name = item.id
            checkbox.checked = item.checked

            const label = document.createElement('label')
            label.htmlFor = item.id
            label.textContent = item.text

            field.append(checkbox, label)
            fieldset.appendChild(field)
        })

        this.dom = fieldset
        this.holder.append(fieldset)
    }
}