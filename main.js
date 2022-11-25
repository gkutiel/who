function fadeIn(e) {
    e.classList.remove('hidden', 'fadeOut')
    e.classList.add('fadeIn')
}

function fadeOut(e) {
    e.classList.remove('hidden', 'fadeIn')
    e.classList.add('fadeOut')
}

function hidden(e) {
    e.classList.remove('fadeOut', 'fadeIn')
    e.classList.add('hidden')
}

document.addEventListener('DOMContentLoaded', () => {
    for (var i = pairs.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = pairs[i];
        pairs[i] = pairs[j];
        pairs[j] = temp;
    }

    var i = 0
    const img_o = document.getElementById('img_o')
    const img_i = document.getElementById('img_i')

    const progress = document.getElementById('progress')
    btns = document.querySelectorAll('.btn')
    function nextImg() {
        btns.forEach(btn => btn.setAttribute('disabled', 'true'))
        progress.classList.add('slide')
        fadeIn(img_i)
        fadeOut(img_o)
        setTimeout(() => {
            const [src_o, src_i] = pairs[i++]
            img_o.src = src_o
            img_i.src = src_i
            fadeIn(img_o)
            hidden(img_i)
            btns.forEach(btn => btn.removeAttribute('disabled'))
            progress.classList.remove('slide')
        }, 4000)
    }
    nextImg()
    btns.forEach(btn => btn.addEventListener('click', nextImg))
})