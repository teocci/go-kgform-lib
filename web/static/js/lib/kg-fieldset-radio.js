/**
 * Created by RTT.
 * Author: teocci@yandex.com on 2022-9월-08
 */
import KGInputRadio from './kg-input-radio.js'
import KGFieldset from './kg-fieldset.js'

export default class KGFieldsetRadio extends KGFieldset {
    static TAG = 'radio'

    static DEFAULT_OPTIONS = {
        type: KGFieldsetRadio.TAG,
        legend: undefined,
        group: `kg-${KGFieldsetRadio.TAG}-group`,
        inputs: [],
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
                const field = new KGInputRadio(content, input)
                this.fields.set(`${group}-${idx}`, field)
            })
        }
    }
}