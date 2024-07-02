import { validaDinheiro } from "./validation.js";
import { deleteAll } from "./delete-cards.js";
import { deleteCard } from "./delete-cards.js";

const containerArtigo = document.getElementById('container-cardfluxo');
const btnDeleteAll = document.getElementById('btn-del');
controiCard();

async function getProdutos() {
    try {
        let fetchGet = await fetch('http://localhost:3000/produtos');
        let convertJson = await fetchGet.json();
    
        if(!fetchGet.ok) {
            throw new Error();
        }

        return convertJson;
    } catch(erro) {
        console.log("Algo de errado aconteceu - " + erro)
    }
}

async function controiCard() {
    let produtos = await getProdutos();

    produtos.forEach(produto => {
        let precoValidado = validaDinheiro(produto.preco);
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
                            <p class="money">R$ ${precoValidado}</p>
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
    });

    const artigoLuxo = document.querySelectorAll('#capa');
    const cardChild = document.querySelectorAll('#cardchild');
    const miniBtnDelete = document.querySelectorAll('#delete-card');
    let containClasse;

    cardChild.forEach(card => {
        card.addEventListener('contextmenu', e => showBtnDelete(e, card));
    })
    
    artigoLuxo.forEach(artigo => {
        artigo.addEventListener('click', (e) => {
            e.stopPropagation();
    
            containClasse = artigo.classList.contains('abrir');
            abriEfecha(artigo, containClasse);
        });
    })

    btnDeleteAll.addEventListener('click', async e => await deleteAll(e, cardChild));

    miniBtnDelete.forEach(btn => {
        btn.addEventListener('click', async e => {
            let valorId = e.target.dataset.id;
            
            deleteCard(e, valorId);
        });
    })
}
