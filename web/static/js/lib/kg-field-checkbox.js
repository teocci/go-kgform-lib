import BaseField from '../base/BaseField.js'
import KGInputCheckbox from './kg-input-checkbox.js'

export default class KGFieldCheckbox extends BaseField {
    static TAG = 'checkbox'

    static DEFAULT_OPTIONS = {
        type: KGFieldCheckbox.TAG,
        legend: null,
        group: `kg-${KGFieldCheckbox.TAG}-group`,
        inputs: [],
    }

    constructor(element, options) {
        super(element, options)

        this.initElement()
    }

    initElement() {
        const options = this.options
        if (isNull(options.inputs)) throw Error('invalidParameter: null checkboxes')
        if (options.inputs.length === 0) throw Error('invalidParameter: empty checkboxes')

        const fieldset = document.createElement('fieldset')
        const legend = document.createElement('legend')
        if (!isNull(options.legend)) legend.textContent = options.legend
        fieldset.appendChild(legend)

        options.inputs.forEach((item) => {
            new KGInputCheckbox(fieldset, item)
        })

        this.dom = fieldset
        this.holder.append(fieldset)
    }
}