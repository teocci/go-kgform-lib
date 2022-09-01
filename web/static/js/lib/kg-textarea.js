import BaseComponent from '../base/base-component.js';

export default class KGTextArea extends BaseComponent{

    static TAG = 'textarea'

    constructor(element, options){
        super(element)

        this.options = options
        this.initElement()
    }

    initElement(){
        const options = this.options
        
        let label = document.createElement('label')
        label.htmlFor = options.id 
        label.textContent = options.title

        let textarea = document.createElement('textarea')
        textarea.id = options.id
        textarea.name = options.id
        textarea.rows = '5'
        textarea.cols = '33'

        let div = document.createElement('div')
        div.append(label, textarea)
        
        this.dom.appendChild(div)
    }
    
}