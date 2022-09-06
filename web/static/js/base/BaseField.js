/**
 * Created by RTT.
 * Author: teocci@yandex.com on 2022-9월-06
 */
import BaseInput from './BaseInput.js'

export default class BaseField extends BaseInput {
    static DEFAULT_INPUT_OPTIONS = {
        id: undefined,
        label: undefined,
        checked: undefined,
        value: undefined,
    }

    constructor(element, options) {
        super(element, options)

        if (this.options.inputs) {
            const inputs = []
            for (const raw of this.options.inputs) {
                const input = simpleMerge(BaseField.DEFAULT_INPUT_OPTIONS, raw)
                input.label = input.label ?? `kg-${this.tag}`
                input.name = input.name ?? `${this.options.group}`
                inputs.push(input)
            }
            this.options.inputs = inputs
        }
        console.log({options: this.options})
    }
}