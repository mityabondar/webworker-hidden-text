self.addEventListener('message', function(e) {
    const bannerText = atob(e.data.text)
    setTimeout(() => self.postMessage(bannerText), 1000)
})