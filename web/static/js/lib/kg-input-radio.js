import BaseComponent from '../base/base-component.js'

export default class KGInputRadio extends BaseComponent{
    
    static TAG = 'radio'

    static DEFAULT_OPTIONS = {
        type: 'radio',
        legend: 'KG Input Radio',
        name : 'kg',
        items: [
            {
                id: 'kg1',
                value : 'kg1',
                checked: true,
                text : 'KG1'
            },
            {
                id: 'kg2',
                value : 'kg2',
                checked: false,
                text : 'KG2'
            }
        ]
    }

    constructor(element, options){
        super(element)

        this.options = Object.assign(KGInputRadio.DEFAULT_OPTIONS, options)
        this.initElement()
    }

    initElement(){
        const options = this.options

        const fieldset = document.createElement('fieldset')
        
        const legend = document.createElement('legend')
        legend.textContent = options.legend
        
        fieldset.append(legend)

        options.items.forEach((element) => {
            let div = document.createElement('div')
            let radio = document.createElement('input')
            radio.type = KGInputRadio.TAG
            radio.id = element.id
            radio.name = options.name
            radio.value = element.value

            let label = document.createElement('label')
            label.htmlFor = element.id
            label.textContent = element.text

            div.append(radio, label)
            fieldset.appendChild(div)
        });

        this.dom.append(fieldset)



        
    }
}