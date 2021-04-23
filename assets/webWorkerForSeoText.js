self.addEventListener('message', function(e) {
    const inputTexts = e.data.text
    const outputTexts = inputTexts.map(item => atob(item))
    setTimeout(() => self.postMessage(outputTexts), 500)
})