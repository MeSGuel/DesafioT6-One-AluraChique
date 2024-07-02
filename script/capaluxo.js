// Mostra o botão Delete
function showBtnDelete(card) {
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
        textoInvisivel(artigo, containClasse);
        containClasse = artigo.classList.contains('abrir');
    } else {
        artigo.classList.add('oneBit');
        artigo.classList.remove('abrir');
        textoInvisivel(artigo, containClasse);
        containClasse = artigo.classList.contains('abrir');
    }
}

// Faz textos ficarem invisiveis ao virar a página.
function textoInvisivel(artigo, containClasse) {
    let titulo = artigo.querySelector('#capa-titulo');
    let preco = artigo.querySelector('#capa-money');

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
            preco.classList.add('visibilidade');
        }, 50);
    } else {
        setTimeout(() => {
            preco.classList.remove('visibilidade');
        }, 50)
    }
}
