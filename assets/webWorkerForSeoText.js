self.addEventListener('message', function(e) {
    const inputTexts = e.data.text
    const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/

    function decodeText(text) {
        const decodedText = base64regex.test(text) ? atob(text) : text
        return decodedText
    }

    const outputTexts = inputTexts.map(item => decodeText(item))
    setTimeout(() => self.postMessage(outputTexts), 500)
})
