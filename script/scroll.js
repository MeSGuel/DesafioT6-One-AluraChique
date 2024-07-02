const tituloArtigo = document.getElementById('titulo-artigo');
const cardsDeLuxoScroll = document.querySelectorAll('#cardchild');
let myObservation = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.remove('hidden-scroll');
            entry.target.classList.add('show-scroll');
        } else {
            entry.target.classList.add('hidden-scroll');
            entry.target.classList.remove('show-scroll');
        }
    })
})

myObservation.observe(tituloArtigo);
cardsDeLuxoScroll.forEach(card => {
    myObservation.observe(card)
})