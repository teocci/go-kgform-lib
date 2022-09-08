/**
 * Created by RTT.
 * Author: teocci@yandex.com on 2022-9월-08
 */
import BaseInput from '../base/base-input.js'

export default class KGInputDate extends BaseInput {
    static TAG = 'date'

    static DEFAULT_OPTIONS = {
        type: KGInputDate.TAG,
        id: `kg-${KGInputDate.TAG}`,
        label: KGInputDate.TAG,
        name: null,
        value: currentDate(),
        min: null,
        max: null,
    }

    constructor(element, options) {
        super(element, options)

        this.initElement()
    }

    initElement() {
        const options = this.options
        const input = this.input
        if (!isNull(options.min)) input.min = options.min
        if (!isNull(options.max)) input.max = options.max
    }
}