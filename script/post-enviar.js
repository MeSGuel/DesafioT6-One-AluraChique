import { validaTexto } from "./validation.js";

let tituloInput = document.getElementById('titulo');
let precoInput = document.getElementById('preco');
let imagemInput = document.getElementById('imagem');

const form = document.getElementById('form');
form.addEventListener('submit', async e => {
    await postProdutos(e);
    tituloInput.value = '';
    precoInput.value = '';
    imagemInput.value = '';

    tituloInput.focus();
});

async function postProdutos(e) {
    e.preventDefault();
    e.stopPropagation();

    let validacaoDoTexto = validaTexto(tituloInput);

    try {
        let fetchPost = await fetch('http://localhost:3000/produtos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                titulo: validacaoDoTexto,
                preco: precoInput.value,
                imagem: imagemInput.value
            })
        });

        if(!fetchPost.ok) {
            throw new Error();
        }

    } catch(erro) {
        alert('Ops! Parece que a conexão não está boa...');
        console.log('Ocorreu um erro ao tentar enviar o produto - ' + erro)
    }
}
