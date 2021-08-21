import { h } from '@ficusjs/renderers/jsx-dom'
import { createCustomElement } from 'ficusjs/custom-element'

createCustomElement('hello-world', {
    render () {
        return html`
            <p>Hello world!</p>
        `
    }
})
