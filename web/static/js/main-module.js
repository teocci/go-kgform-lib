import KGForm from "./lib/kg-form.js"
import KGInputText from "./lib/kg-input-text.js"

/**
 * Created by RTT.
 * Author: teocci@yandex.com on 2022-8월-29
 */
export default class MainModule {
    static demo = [
        {
            id : 'test',
            title : 'title',
            type : 'text',
            name : 'test-name',
            required : true
        },
        {
            id : 'test2',
            title : 'title2',
            type : 'text',
            name : 'test-name',
            required : true
        },
        {
            id : 'test3',
            title : 'title3',
            type : 'text',
            name : 'test-name',
            required : true
        },
        {
            id : 'test4',
            title : 'title4',
            type : 'text',
            name : 'test-name',
            required : true
        },
        {
            id : 'test5',
            title : 'title5',
            type : 'text',
            name : 'test-name',
            required : true,
        },
    ]
    

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
        
        const domForm = this.form.dom
        const options = {
            id : 'test',
            title : 'title',
            type : 'text',
            name : 'test-name',
            required : true
        }

        MainModule.demo.forEach( option =>{
            this.form.createField(option)
        })

        console.log({dom: this.form.dom})
    }

    initListeners() {
        const placeholder = this.placeholder
        console.log({placeholder})
    }
}