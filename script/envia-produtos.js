import { criaProdutos } from "./cria-produtos.js";
// import { exibirNaTela } from "./exibir-na-tela.js";

formulario.addEventListener('submit', e => {
    e.preventDefault();

    enviaProdutos(e);
});
async function enviaProdutos(e) {
    // let prevent = e.preventDefault();

    // console.log(prevent)

    let nome = document.getElementById('nome').value;
    let preco = document.getElementById('preco').value;
    let imagem = document.getElementById('url').value;

    try {
        await criaProdutos(e, nome, preco, imagem);
    } catch (erro) {
        console.error('Erro ao enviar o produto:', erro);
    }
}




// import axios from 'axios';

// const form = document.querySelector('[data-formulario]');

// form.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     let nome = document.getElementById('nome').value;
//     let preco = document.getElementById('preco').value;
//     let imagem = document.getElementById('url').value;

//     try {
//         const response = await axios.post('http://localhost:3000/produtos', {
//             nome,
//             preco: `$ ${preco}`,
//             imagem
//         });

//         console.log('Produto enviado com sucesso:', response.data);
//     } catch (error) {
//         console.error('Erro ao enviar o produto:', error);
//     }
// });

