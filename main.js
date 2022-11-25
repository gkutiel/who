document.addEventListener('DOMContentLoaded', () => {
    for (var i = pairs.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = pairs[i];
        pairs[i] = pairs[j];
        pairs[j] = temp;
    }

    var i = 0
    const img = document.getElementById('img')
    const progress = document.getElementById('progress')
    btns = document.querySelectorAll('.btn')
    function nextImg() {
        btns.forEach(btn => btn.setAttribute('disabled', 'true'))
        const [_, src_i] = pairs[i++]
        img.src = src_i
        progress.classList.add('slide')
        setTimeout(() => {
            const [src_o, _] = pairs[i]
            img.src = src_o
            btns.forEach(btn => btn.removeAttribute('disabled'))
            progress.classList.remove('slide')
        }, 5000)
    }
    nextImg()
    btns.forEach(btn => btn.addEventListener('click', nextImg))
})