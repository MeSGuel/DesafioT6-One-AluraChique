const stars = document.getElementById('star');
let containClasseStar = stars.classList.contains('stardust--toggle');

stars.addEventListener('click', e => spinStar(e))

function spinStar(e) {
    e.stopPropagation();

    if(!containClasseStar) {
        stars.classList.remove('star--toggle');
        stars.classList.add('stardust--toggle');
        document.body.dataset.cenario = 'claro';
        containClasseStar = stars.classList.contains('stardust--toggle');;
    } else {
        stars.classList.remove('stardust--toggle');
        stars.classList.add('star--toggle');
        document.body.dataset.cenario = 'escuro';
        containClasseStar = stars.classList.contains('stardust--toggle');;
    }
} 
