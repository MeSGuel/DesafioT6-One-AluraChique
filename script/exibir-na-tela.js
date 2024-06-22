import { pegaProduto } from "./pega-produtos.js";

const areaDosProdutos = document.getElementById('produtos');
export function exibirNaTela() {
    pegaProduto().then(res => {
        res.forEach(produtos => {
            areaDosProdutos.innerHTML += `
            <div class="produtos__card">
                <div class="produtos__img">
                    <img src="${produtos.imagem}" alt="Boneco Roblox dançando!">
                </div>
                <div class="produtos__descricao">
                    <p>${produtos.nome}</p>
                    <p>${produtos.preco}</p>
                </div>
            </div><!--produtos__card-->
        `
        });
    });
}

exibirNaTela();