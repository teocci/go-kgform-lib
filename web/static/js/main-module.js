import KGForm from "./lib/kg-form.js"
import Dummy from "./lib/dummy.js"
import KGFieldset from "./lib/kg-fieldset.js"
import KGFieldsetRadio from "./lib/kg-fieldset-radio.js"

/**
 * Created by RTT.
 * Author: teocci@yandex.com on 2022-8월-29
 */
export default class MainModule {
    

    static get instance() {
        this._instance = this._instance ?? new MainModule()

        return this._instance
    }

    constructor() {
        this.initElement()
        this.initListeners()
    }

    initElement() {
        const holder = document.getElementById('main')
        
        const form = new KGForm(holder)

        const group = new KGFieldset(form.body, Dummy.fieldsetOptions)
        Dummy.inputTextOptions.forEach(option => {
            const field = form.createField(option)
            group.addField(field)
        })

        const radioBad = form.createField(Dummy.radioOption)
        group.addField(radioBad)

        const radio = new KGFieldsetRadio(form.body, Dummy.radioOption2)
        radio.fields.forEach( field => {
            field.input.onchange = e => { console.log(`${e.target.id} has changed`)}
        })
    
        form.createField(Dummy.checkboxOption)
        form.createField(Dummy.dateOptions)
        form.createField(Dummy.textareaOptions)

        form.createField(Dummy.rangeOptions)
        form.createField(Dummy.selectOptions)
        
        this.form = form
        this.placeholder = holder
    }

    initListeners() {
        const placeholder = this.placeholder
    }
}