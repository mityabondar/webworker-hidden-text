window.addEventListener('DOMContentLoaded', () => {

    const hiddenSeoTexts = document.querySelectorAll('[data-hook="seo-text"]')
    
    if (hiddenSeoTexts) {
        hiddenSeoTexts.forEach((hiddenSeoText) => {
            const seoText = hiddenSeoText.getAttribute('data-inner')
            if (seoText) {
                const worker = new Worker('./webWorkerForSeoText.js')
                worker.postMessage({'text': seoText})
                worker.onmessage = (e) => {
                    hiddenSeoText.innerText = e.data
                }
            }
        })
    }

})