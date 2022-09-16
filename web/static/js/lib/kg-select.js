/**
 * Created by RTT.
 * Author: teocci@yandex.com on 2022-9월-08
 */
import BaseComponent from '../base/base-component.js'

export default class KGSelect extends BaseComponent {
    static TAG = 'select'
    static DEFAULT_OPTIONS = {
        type: KGSelect.TAG,
        legend: '',
        id: 'kg-select',
        name: 'kg-select-name',
        items: [
            {
                value: 'kg-1',
                text: 'KG1',
            },
            {
                value: 'kg-2',
                text: 'KG2',
            },
        ],
    }

    constructor(element, options) {
        super(element)
        this.options = {...KGSelect.DEFAULT_OPTIONS, ...options}
        this.initElement()
    }

    initElement() {
        const options = this.options

        const label = document.createElement('label')
        label.htmlFor = options.id
        label.textContent = options.legend

        const select = document.createElement('select')
        select.name = options.name
        select.id = options.id

        options.items.forEach((element) => {
            const option = document.createElement('option')
            option.value = element.value
            option.textContent = element.text

            select.appendChild(option)
        })

        const div = document.createElement('div')
        div.append(label, select)

        this.dom = div
        this.holder.append(div)
    }
}