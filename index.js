import { h } from '@ficusjs/renderers/jsx-dom'
import { createCustomElement } from 'ficusjs/custom-element'
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers@5/htm'
import { defaults } from './defaults.js'
import { createToast } from './toast.js'

createCustomElement('hello-world', {
    renderer,
    async getKanye () {
        return await fetch('https://api.kanye.rest')
            .then(res => res.json())
            .then(({ quote }) => 
            createToast({
                message: quote,
                color: 'rgba(255, 87, 51, 0.1)',
                width: '200px',
                height: '200px',
                id: 'toast-kanye',
                time: 5000,
                borderRadius: '10px',
                location: {
                    position: 'fixed',
                    bottom: '150px',
                    right: '150px'
                }
            }))
    },
    render () {
        return html`
            <p>Hello world!</p>
            <button onclick="${() => createToast({
                color: 'red',
                width: '200px',
                height: '100px',
                message: 'Lets create a red toast!',
                id: 'toast-red',
                // time: 5000,
                location: {
                    position: 'fixed',
                    top: '30px',
                    right: '0'
                }
            }, ()=>{console.log('I got clicked')})}">Red Toast</button>
            <button onclick="${() => createToast({
                color: 'blue',
                width: '200px',
                message: 'Lets create a blue toast!',
                id: 'toast-blue',
                time: 2000,
                location: {
                    position: 'fixed',
                    bottom: '50vh',
                    right: '0'
                }
            })}">Blue Toast</button>
            <button onclick="${() => createToast({
                color: 'green',
                width: '200px',
                // message: 'Lets create a green toast!',
                id: 'toast-green',
                time: 1000,
                location: {
                    position: 'fixed',
                    bottom: '30px',
                    right: '0'
                }
            })}">Green Toast</button>
            <button onclick="${this.getKanye}">Get me some Kanye!</button>
            <button onclick="${() => createToast({})}">Default Toast</button>
        `
    }
})
