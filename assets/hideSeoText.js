window.addEventListener('DOMContentLoaded', () => {

    const hiddenSeoTexts = document.querySelectorAll('[data-hook="seo-text"]')
    if (!hiddenSeoTexts) return

    // Create array of SEO texts
    let seoTexts = Array()
    hiddenSeoTexts.forEach((hiddenSeoText) => {
        const seoText = hiddenSeoText.getAttribute('data-banner')
        if (seoText) seoTexts.push(seoText)
    })

    // Call Web Worker & return decoded SEO text into block
    const worker = new Worker('./assets/webWorkerForSeoText.js')
    worker.postMessage({'text': seoTexts})
    worker.onmessage = (e) => {
        const outputTexts = e.data
        hiddenSeoTexts.forEach((hiddenSeoText, key) => {
            hiddenSeoText.innerText = outputTexts[key]
        })
    }
    
})