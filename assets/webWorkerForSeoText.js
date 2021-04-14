self.addEventListener('message', function(e) {
    const bannerText = e.data.text
    setTimeout(() => self.postMessage(bannerText), 1000)
})