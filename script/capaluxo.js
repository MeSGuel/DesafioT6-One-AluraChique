const artigoLuxo = document.querySelectorAll('#capa');
const cardChild = document.querySelectorAll('#cardchild')
let containClasse;

cardChild.forEach(card => {
    card.addEventListener('contextmenu', e => showBtnDelete(e, card));
})

artigoLuxo.forEach(artigo => {
    artigo.addEventListener('click', () => {
        containClasse = artigo.classList.contains('abrir');
        abriEfecha(artigo, containClasse);
    });
})


// Mostra o botão Delete
function showBtnDelete(e, card) {
    e.preventDefault();

    let botaoDelete = card.querySelector('#delete-card');
    containClasse = botaoDelete.classList.contains('show-delete-card');

    if(!containClasse) {
        botaoDelete.classList.add('show-delete-card');
    } else {
        botaoDelete.classList.remove('show-delete-card');
    }
}


// Ativa classes de "animação".
function abriEfecha(artigo, containClasse) {
    if(!containClasse) {
        artigo.classList.remove('oneBit');
        artigo.classList.add('abrir');
        tudoInvisivel(artigo, containClasse);
        containClasse = artigo.classList.contains('abrir');
    } else {
        artigo.classList.add('oneBit');
        artigo.classList.remove('abrir');
        tudoInvisivel(artigo, containClasse);
        containClasse = artigo.classList.contains('abrir');
    }
}

// Faz textos ficarem invisiveis ao virar a página.
function tudoInvisivel(artigo, containClasse) {
    let titulo = artigo.querySelector('#capa-titulo');
    let aluraPreco = artigo.querySelector('#capa-money');

    if(!containClasse) {
        setTimeout(() => {
            titulo.classList.add('visibilidade');

        }, 50);
    } else {
        setTimeout(() => {
            titulo.classList.remove('visibilidade');
        }, 50)
    }

    if(!containClasse) {
        setTimeout(() => {
            aluraPreco.classList.add('visibilidade');

        }, 50);
    } else {
        setTimeout(() => {
            aluraPreco.classList.remove('visibilidade');
        }, 50)
    }
}
