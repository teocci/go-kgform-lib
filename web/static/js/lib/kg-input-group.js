export default class KGInputGroup {

    constructor(type, item) {
        this.type = type
        this.item = item
    }

    makeInputGroup() {
        const type = this.type
        const item = this.item

        const div = document.createElement('div')
        const input = document.createElement('input')
        input.type = type

        const label = document.createElement('label')
        label.htmlFor = item.id
        label.textContent = item.text

        switch (type) {
            case 'checkbox':
                input.id = item.id
                input.name = item.id
                input.checked = item.checked
                break
            case 'radio':
                break
            case 'range':
                break
            default:
                break
        }
        div.append(input, label)
        return div
    }
}