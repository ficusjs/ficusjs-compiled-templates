import { h } from '@ficusjs/renderers/jsx-dom'
import { createCustomElement } from 'ficusjs/custom-element'
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers@5/htm'

createCustomElement('hello-world', {
    renderer,
    handleClick (styles) {
        const toast = document.createElement('div')
        toast.style.backgroundColor = styles.color
        toast.style.width = styles.width
        toast.style.position = styles.location.position
        toast.style.zIndex = 10
        toast.style.padding = '20px'
        toast.style.textAlign = 'center'
        if (styles.borderRadius) {
            toast.style.borderRadius = styles.borderRadius
        }
        if (styles.location.top) {
            toast.style.top = styles.location.top
        } 
        if (styles.location.bottom) {
            toast.style.bottom = styles.location.bottom
        }
        if (styles.location.left) {
            toast.style.left = styles.location.left
        }
        if (styles.location.right) {
            toast.style.right = styles.location.right
        }
        const toastContent = document.createTextNode(styles.message)
        toast.appendChild(toastContent)
        toast.id = styles.id
        // const helloWorld = document.querySelector('hello-world')
        // document.body.insertBefore(toast, helloWorld)
        document.body.appendChild(toast)
        setTimeout(() => {
            toast.remove()
        }, styles.time)
        
    },
    async getKanye () {
        return await fetch('https://api.kanye.rest')
            .then(res => res.json())
            .then(({ quote }) => 
            this.handleClick({
                message: quote,
                color: 'pink',
                width: '200px',
                height: '200px',
                id: 'toast-kanye',
                time: 5000,
                borderRadius: '10px',
                location: {
                    position: 'fixed',
                    top: '150px',
                    right: '20px'
                }

            }))
    },
    render () {
        return html`
            <p>Hello world!</p>
            <button onclick="${() => this.handleClick({
                color: 'red',
                width: '200px',
                height: '100px',
                message: 'Lets create a red toast!',
                id: 'toast-red',
                time: 5000,
                location: {
                    position: 'fixed',
                    top: '30px',
                    right: '0'
                }
            })}">Red Toast</button>
            <button onclick="${() => this.handleClick({
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
            <button onclick="${() => this.handleClick({
                color: 'green',
                width: '200px',
                message: 'Lets create a green toast!',
                id: 'toast-green',
                time: 1000,
                location: {
                    position: 'fixed',
                    bottom: '30px',
                    right: '0'
                }
            })}">Green Toast</button>
            <button onclick="${this.getKanye}">Get me some Kanye!</button>
        `
    }
})

createCustomElement('test-div', {
    renderer,
    render () {
        return html`
            <div style="width: 100vw; height: 100vh; background-color: yellow"></div>
        `
    }
})
