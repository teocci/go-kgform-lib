import BaseComponent from '../base/base-component.js'

export default class KGInputCheckBox extends BaseComponent {

    static TAG = 'checkbox'

    constructor(element, options) {
        super(element)

        this.options = options
        this.initElement()
    }

    initElement() {
        const options = this.options
    /**
    options = {
        type : 'checkbox',        
        legend : 'legend name',
        items : [
                {
                    id : id,
                    checked : true,
                    text : content
                },
            ]
    }
    */

        let fieldset = document.createElement('fieldset')

        let legend = document.createElement('legend')
        legend.textContent = options.legend

        fieldset.appendChild(legend)

        options.items.forEach((element) => {
            let div = document.createElement('div')
            let checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.id = element.id
            checkbox.name = element.id
            checkbox.checked = element.checked

            let label = document.createElement('label')
            label.htmlFor = element.id
            label.textContent = element.text

            div.append(checkbox, label)
            fieldset.appendChild(div)
        })

        this.dom.append(fieldset)
    }
}