import BaseComponent from '../base/base-component.js'

export default class KGFieldset extends BaseComponent{
    
    static TAG = 'fieldset'
   
    constructor(element, options){
        super(element)

        this.options = options
        this.fields = new Map()

        this.initElement()
    }

    initElement(){
        const fieldset = document.createElement('fieldset')
        this.dom.append(fieldset)
    }
}