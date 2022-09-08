import KGForm from "./lib/kg-form.js"
import Dummy from "./lib/dummy.js"
import KGFieldset from "./lib/kg-fieldset.js"

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
        this.placeholder = document.getElementById('main')

        this.form = new KGForm(this.placeholder)

        const group = new KGFieldset(this.form.body, Dummy.fieldsetOptions)
        Dummy.inputTextOptions.forEach(option => {
            const field = this.form.createField(option)
            group.addField(field)
        })

        const radio = this.form.createField(Dummy.radioOption)
        group.addField(radio)
        
        this.form.createField(Dummy.checkboxOption)
        this.form.createField(Dummy.dateOptions)
        this.form.createField(Dummy.textareaOptions)

        this.form.createField(Dummy.rangeOptions)
        this.form.createField(Dummy.selectOptions)
    }

    initListeners() {
        const placeholder = this.placeholder
        console.log({ placeholder })
    }
}