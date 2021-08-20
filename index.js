import { createCustomElement } from 'ficusjs'

createCustomElement('hello-world', {
    render () {
        return html`
            <p>Hello world!</p>
        `
    }
})
