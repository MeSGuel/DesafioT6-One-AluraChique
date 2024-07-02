import { getProdutos } from "./connectaApi.js";
import { formataPreco } from "./validation.js";
import { deleteCard } from "./connectaApi.js";

const submit = document.getElementById('submit');
const containerArtigo = document.getElementById('container-cardfluxo');
const nothingIcon = document.getElementById('nothing-icon');

controiCard();
async function controiCard() {
    let produtos = await getProdutos();
    containerArtigo.innerHTML = '';

    if(containerArtigo.innerHTML == '') {
        nothingIcon.classList.remove('hidden-nothing-icon');
        containerArtigo.innerHTML
    }

    produtos.forEach(produto => {
        let precoFormatado = formataPreco(produto.preco);

        if(produtos.length >= 12) {
            submit.setAttribute('disabled', true);
            submit.value = 'Limite Máximo atingido!';
            submit.classList.add('limitemax');
            containerArtigo.innerHTML += `
            <div class="cardchild" id="cardchild">
                <button class="delete-card" id="delete-card" data-id="${produto.id}">Deletar</button>

                <div class="cardluxo">
                    <div class="capa oneBit" id="capa">
                        <div class="capa__titulo" id="capa-titulo">
                            <h3>${produto.titulo}</h3>
                            <div class="div"></div>
                        </div>
            
                        <div class="capa__money" id="capa-money">
                            <p>AluraGeek</p>
                            <p class="money">R$ ${precoFormatado}</p>
                        </div>
                    </div>
            
                    <div class="cardluxo__artigo-luxo">
                        <div class="artigo">
                            <img src="${produto.imagem}" alt="">
                        </div>
                    </div>
                </div>
            </div>
            `
        } else {
            if(produtos.length < 12 && produtos.length >= 0) {
                submit.removeAttribute('disabled');
                submit.value = 'Adicionar';
                submit.classList.remove('limitemax');
                containerArtigo.innerHTML += `
                <div class="cardchild" id="cardchild">
                    <button class="delete-card" id="delete-card" data-id="${produto.id}">Deletar</button>

                    <div class="cardluxo">
                        <div class="capa oneBit" id="capa">
                            <div class="capa__titulo" id="capa-titulo">
                                <h3>${produto.titulo}</h3>
                                <div class="div"></div>
                            </div>
                
                            <div class="capa__money" id="capa-money">
                                <p>AluraGeek</p>
                                <p class="money">R$ ${precoFormatado}</p>
                            </div>
                        </div>
                
                        <div class="cardluxo__artigo-luxo">
                            <div class="artigo">
                                <img src="${produto.imagem}" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
        }
    });

    // Esconde o ícone caso haja artigos na seção.
    if(containerArtigo.innerHTML) {
        nothingIcon.classList.add('hidden-nothing-icon');
        containerArtigo.innerHTML;
    } else {
        nothingIcon.classList.remove('hidden-nothing-icon');
    }

    const cardsChild = document.querySelectorAll('#cardchild');
    const artigoLuxo = document.querySelectorAll('#capa');
    const miniBtnDelete = document.querySelectorAll('#delete-card');
    let containClasse;


    // Animação de abrir e fechar.
    artigoLuxo.forEach(artigo => {
        artigo.addEventListener('click', (e) => {
            e.stopPropagation();
    
            containClasse = artigo.classList.contains('abrir');
            abriEfecha(artigo, containClasse);
        });
    })


    // Mostrar botão "Deletar" ao clicar com o botão direto.
    cardsChild.forEach(card => {
        card.addEventListener('contextmenu', e => {
            e.preventDefault();
            e.stopPropagation();
            
            showBtnDelete(card)
        });
    })


    // Apaga artigos de luxo.
    miniBtnDelete.forEach(btn => {
        btn.addEventListener('click', async e => {
            e.preventDefault();

            let valorId = e.target.dataset.id;
            await deleteCard(valorId);
            location.reload();
        });
    })

    // Mostra e oculta através do Scroll
    const tituloArtigo = document.getElementById('titulo-artigo');
    const paraArtigo = document.getElementById('para-artigo');
    myObservation.observe(paraArtigo);
    myObservation.observe(tituloArtigo);
    cardsChild.forEach(card => {
        myObservation.observe(card)
    })
}