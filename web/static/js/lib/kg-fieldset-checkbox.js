/**
 * Created by RTT.
 * Author: teocci@yandex.com on 2022-9월-08
 */
import KGInputCheckbox from './kg-input-checkbox.js'
import KGFieldset from './kg-fieldset.js'

export default class KGFieldsetCheckbox extends KGFieldset {
    static TAG = 'checkbox'

    static DEFAULT_OPTIONS = {
        type: KGFieldsetCheckbox.TAG,
        legend: undefined,
        group: `kg-${KGFieldsetCheckbox.TAG}-group`,
        inputs: [],
        useFieldset: true,
    }

    constructor(element, options) {
        super(element, options)

        this.initElement()
    }

    initElement() {
        const content = this.content
        const inputs = this.options.inputs
        const group = this.options.group
        if (!isNull(inputs) && inputs.length > 0) {
            inputs.forEach((input, idx) => {
                const field = new KGInputCheckbox(content, input)
                const id = input.id ?? `${group}-${idx}`
                this.fields.set(id, field)
            })
        }
    }
}