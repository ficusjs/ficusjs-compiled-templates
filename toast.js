import { defaults } from './defaults.js'

export function createToast (styles, onClickFunction) {
  const toast = document.createElement('div')
    toast.style.backgroundColor = styles?.color || defaults.color
    toast.style.width = styles?.width || defaults.width
    toast.style.height = styles?.height || defaults.height
    toast.style.position = styles?.location?.position || defaults.location.position
    toast.style.zIndex = '10'
    toast.style.padding = styles?.padding || defaults.padding
    toast.style.textAlign = styles?.textAlign || defaults.textAlign
    toast.style.borderRadius = styles?.borderRadius || defaults.borderRadius
    toast.style.display = styles?.display?.displayType || defaults.display.displayType
    toast.style.justifyContent = styles?.display?.justifyContent || defaults.display.justifyContent
    toast.style.alignItems = styles?.display?.alignItems || defaults.display.alignItems
    toast.style.margin = styles?.margin || defaults.margin
    toast.style.padding = styles?.padding || defaults.padding
    if (styles?.location) {
        if (styles?.location.top) {
            toast.style.top = styles?.location.top
        }
        if (styles?.location.bottom) {
            toast.style.bottom = styles?.location.bottom
        }
        if (styles?.location.left) {
            toast.style.left = styles?.location.left
        }
        if (styles?.location.right) {
            toast.style.right = styles?.location.right
        }
    } else {
        toast.style.top = defaults.location.top
        toast.style.right = defaults.location.right
    }

    if (onClickFunction) {
        toast.addEventListener('click', onClickFunction)
    }
    
    const toastContent = document.createTextNode(styles?.message || defaults.message)

    toast.appendChild(toastContent)
    toast.id = styles?.id || defaults.id
    document.body.appendChild(toast)
    setTimeout(() => {
        toast.remove()
    }, styles?.time || defaults.time)   
  }
