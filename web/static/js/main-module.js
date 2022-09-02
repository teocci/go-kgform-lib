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

        // Dummy.inputTextOptions.forEach(option => {
        //     this.form.createField(option)
        // })
        
        // this.form.createField(Dummy.checkboxOption)
        // this.form.createField(Dummy.dateOptions)
        // this.form.createField(Dummy.textareaOptions)
        // this.form.createField(Dummy.radioOption)

        const group = new KGFieldset(this.form.placeholder, Dummy.fieldsetOptions)
        const field = this.form.createField(Dummy.checkboxOption)
        console.log({field})
        group.addField(field)
        
        console.log({ dom: this.form.placeholder })
    }

    initListeners() {
        const placeholder = this.placeholder
        console.log({ placeholder })
    }
}