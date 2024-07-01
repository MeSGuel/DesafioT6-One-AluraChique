const estrela = document.getElementById('star');
let contains = estrela.classList.contains('stardust--toggle');

estrela.addEventListener('click', () => {
    if(!contains) {
        estrela.classList.remove('star--toggle');
        estrela.classList.add('stardust--toggle');
        document.body.dataset.cenario = 'claro';
        contains = estrela.classList.contains('stardust--toggle');;
    } else {
        estrela.classList.remove('stardust--toggle');
        estrela.classList.add('star--toggle');
        document.body.dataset.cenario = 'escuro';
        contains = estrela.classList.contains('stardust--toggle');;
    }
})