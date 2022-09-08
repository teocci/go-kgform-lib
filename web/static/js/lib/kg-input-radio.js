/**
 * Created by RTT.
 * Author: teocci@yandex.com on 2022-9월-08
 */
import BaseInput from '../base/base-input.js'

export default class KGInputRadio extends BaseInput {
    static TAG = 'radio'

    static DEFAULT_OPTIONS = {
        type: KGInputRadio.TAG,
        id: null,
        label: undefined,
        name: undefined,
        value: undefined,
        checked: false,
    }

    constructor(element, options) {
        super(element, options)

        this.initElement()
    }

    initElement() {
        const options = this.options
        console.log(options)
        const input = this.input
        if (!isNull(options.checked)) input.checked = options.checked
    }
}