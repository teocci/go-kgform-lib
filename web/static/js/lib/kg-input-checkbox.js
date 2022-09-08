/**
 * Created by RTT.
 * Author: teocci@yandex.com on 2022-9월-06
 */
import BaseInput from '../base/base-input.js'

export default class KGInputCheckbox extends BaseInput {
    static TAG = 'checkbox'

    static DEFAULT_OPTIONS = {
        type: KGInputCheckbox.TAG,
        id: null,
        label: null,
        name: null,
        value: undefined,
        checked: false,
        indeterminate: undefined,
    }

    constructor(element, options) {
        super(element, options)

        this.initElement()
    }

    initElement() {
        const options = this.options
        const input = this.input
        if (!isNull(options.checked)) input.checked = options.checked
        if (!isNull(options.indeterminate)) input.indeterminate = options.indeterminate
    }
}