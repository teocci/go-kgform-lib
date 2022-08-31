import BaseComponent from '../base/base-component.js'
import KGInputText from './kg-input-text.js'

export default class KGForm extends BaseComponent {

    static TAG = 'form'

    constructor(element) {
        super(element)

        this.fields = new Map()

        this.initElements()
    }

    initElements() {
        const form = document.createElement('form')
        form.classList.add('kg-form')

        const div = document.createElement('div')
        div.id = 'kg-form-btns'

        const submitBtn = document.createElement('button')
        submitBtn.textContent = '전송'

        submitBtn.onclick = e => {
            this.onSubmitClick(e)
        }

        const cancelBtn = document.createElement('button')
        cancelBtn.textContent = '취소'
        cancelBtn.onclick = e => {
            this.onCancelClick(e)
        }

        div.append(submitBtn, cancelBtn)
        form.appendChild(div)
        this.dom.appendChild(form)
        this.form = form

    }

    createField(options) {
        let field
        switch (options.type) {
            case KGInputText.TAG:
                field = new KGInputText(this.form, options)
                break;


            default:
                throw new Error('no type supported');
                break;
        }

        this.fields.set(options.id, field)
    }



    onSubmitClick(e) {
        e.preventDefault()
        console.log('submit click')
    }

    onCancelClick(e) {
        e.preventDefault()
        console.log('cancel click')
    }
}