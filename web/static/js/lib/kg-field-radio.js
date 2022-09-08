import BaseField from '../base/base-field.js'
import KGInputRadio from './kg-input-radio.js'

export default class KGFieldRadio extends BaseField{
    static TAG = 'radio'

    static DEFAULT_OPTIONS = {
        type: KGFieldRadio.TAG,
        legend: null,
        group: `kg-${KGFieldRadio.TAG}-group`,
        inputs: [],
    }

    constructor(element, options){
        super(element, options)
        this.initElement()
    }

    initElement(){
        const options = this.options
        if (isNull(options.inputs)) throw Error('invalidParameter: null radios')
        if (options.inputs.length === 0) throw Error('invalidParameter: empty radios')

        const fieldset = document.createElement('fieldset')
        const legend = document.createElement('legend')
        if (!isNull(options.legend)) legend.textContent = options.legend
        fieldset.appendChild(legend)

        console.log(options)

        options.inputs.forEach((item) => {
            new KGInputRadio(fieldset, item)
        })

        this.dom = fieldset
        this.holder.append(fieldset)
    }
}