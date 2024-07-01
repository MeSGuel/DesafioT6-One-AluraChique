const abriLivro = document.getElementById('capa');
const tituloCapa = document.getElementById('capa-titulo');
const geekMoneyCapa = document.getElementById('capa-geekmoney');
let seContain = capa.classList.contains('abrir');

abriLivro.addEventListener('click', estilosAplicados)

function estilosAplicados() {
    if(!seContain) {
        abriLivro.classList.remove('oneBit');
        abriLivro.classList.add('abrir');
        setTimeout(() => {
            geekMoneyCapa.classList.add('visibilidade');
            tituloCapa.classList.add('visibilidade');
        },15);
        seContain = capa.classList.contains('abrir');
    } else {
        abriLivro.classList.add('oneBit');
        abriLivro.classList.remove('abrir');
        setTimeout(() => {
            geekMoneyCapa.classList.remove('visibilidade');
            tituloCapa.classList.remove('visibilidade');
        },100);
        seContain = capa.classList.contains('abrir');
    }
}
