import BaseComponent from '../base/base-component.js'

export default class KGInputDate extends BaseComponent {
    static TAG = 'date'

    constructor(element, options) {
        super(element)

        this.options = options
        this.initElement()
    }

    //    options = {
    //         title : 'title',
    //         type : 'date',
    //         id : 'id',
    //         name : '',
    //         value : '2022-08-23',
    //         min : '2022-01-01',
    //         max : '2022-12-31',    
    //     }

    initElement() {
        const options = this.options

        let label = document.createElement('label')
        label.htmlFor = options.id
        label.textContent = options.title

        let inputDate = document.createElement('input')
        inputDate.type = KGInputDate.TAG
        inputDate.id = options.id
        inputDate.name = options.name
        inputDate.value = options.value
        inputDate.min = options.min
        inputDate.max = options.max

        let div = document.createElement('div')
        div.append(label, inputDate)

        this.dom.append(div)
    }
}