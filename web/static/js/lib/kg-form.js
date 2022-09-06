import BaseComponent from '../base/base-component.js'
import KGInputCheckBox from './kg-input-checkbox.js'
import KGInputDate from './kg-input-date.js'
import KGInputRadio from './kg-input-radio.js'
import KGInputRange from './kg-input-range.js'
import KGInputText from './kg-input-text.js'
import KGTextArea from './kg-textarea.js'
import KgInputPassword from './kg-input-password.js'
import KgInputEmail from './kg-input-email.js'
import KGSelect from './kg-select.js'

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

        const body = document.createElement('div')
        body.classList.add('kg-form-body')

        const footer = document.createElement('div')
        footer.classList.add('kg-form-btns')

        const submitBtn = document.createElement('button')
        submitBtn.textContent = '전송'

        submitBtn.onclick = e => { this.onSubmitClick(e) }

        const cancelBtn = document.createElement('button')
        cancelBtn.textContent = '취소'
        cancelBtn.onclick = e => {
            this.onCancelClick(e)
        }

        footer.append(submitBtn, cancelBtn)
        form.append(body, footer)

        this.body = body
        this.dom = form
        this.holder.appendChild(form)
    }

    createField(options) {
        let field
        switch (options.type) {
            case KGInputText.TAG:
                field = new KGInputText(this.body, options)
                break
            case KgInputEmail.TAG:
                field = new KgInputEmail(this.body, options)
                break
            case KgInputPassword.TAG:
                field = new KgInputPassword(this.body, options)
                break

            case KGInputCheckBox.TAG:
                field = new KGInputCheckBox(this.body, options)
                break

            case KGInputDate.TAG:
                field = new KGInputDate(this.body, options)
                break

            case KGTextArea.TAG:
                field = new KGTextArea(this.body, options)
                break

            case KGInputRadio.TAG:
                field = new KGInputRadio(this.body, options)
                break

            case KGInputRange.TAG:
                field = new KGInputRange(this.body, options)
                break

            case KGSelect.TAG:
                field = new KGSelect(this.body, options)
                break

            default:
                throw new Error(`type ${options.type} not supported`)
        }

        this.fields.set(options.id, field)

        return field.dom
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