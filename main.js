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
    const dummy_i = document.getElementById('dummy_i')
    const dummy_o = document.getElementById('dummy_o')

    const progress = document.getElementById('progress')
    btns = document.querySelectorAll('.btn')
    // const myConfetti = confetti.create(document.getElementById('confetti'), {
    //     useWorker: true
    // });
    function nextImg() {
        confetti()
        // myConfetti.reset()
        // myConfetti({
        //     particleCount: 100,
        //     spread: 160
        // });
        btns.forEach(btn => btn.setAttribute('disabled', 'true'))
        progress.classList.add('slide')
        fadeIn(img_i)
        fadeOut(img_o)
        const [src_o, src_i] = pairs[i++]
        dummy_o.src = src_o
        dummy_i.src = src_i
        setTimeout(() => {
            img_o.src = src_o
            img_i.src = src_i
            fadeIn(img_o)
            hidden(img_i)
            btns.forEach(btn => btn.removeAttribute('disabled'))
            progress.classList.remove('slide')
        }, 3000)
    }
    nextImg()
    btns.forEach(btn => btn.addEventListener('click', nextImg))
})