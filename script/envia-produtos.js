import { criaProdutos } from "./cria-produtos.js";
const form = document.querySelector('[data-formulario]');

form.addEventListener('submit', e => enviaProdutos(e));

async function enviaProdutos(e) {
    e.preventDefault();

    let nome = document.getElementById('nome').value;
    let preco = document.getElementById('preco').value;
    let imagem = document.getElementById('url').value;

    try {
        await criaProdutos(nome, preco, imagem);
    } catch (erro) {
        console.error('Erro ao enviar o produto:', erro);
    }
}