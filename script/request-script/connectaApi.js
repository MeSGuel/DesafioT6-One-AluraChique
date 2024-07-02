import { validaTexto } from "./validation.js";

export async function postProdutos(tituloInput, precoInput, imagemInput) {
    let validacaoDoTexto = validaTexto(tituloInput);

    try {
        let fetchPost = await fetch('https://668432fe56e7503d1adfa6f7.mockapi.io/prod/produtos', {
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
            throw new Error('Erro ao enviar dados a API');
        }

    } catch(erro) {
        alert('Opa! Parece que o Mockapi tá com problema! Pode voltar mais tarde por favorzinho?');
        console.log('Não foi possível realizar o pedido - ' + erro)
    }
}

export async function getProdutos() {
    try {
        let fetchGet = await fetch('https://668432fe56e7503d1adfa6f7.mockapi.io/prod/produtos');
        let convertJson = await fetchGet.json();
    
        if(!fetchGet.ok) {
            throw new Error('Erro ao retornar dados da API');
        }

        return convertJson;
    } catch(erro) {
        console.log("Não foi possível realizar o pedido - " + erro)
    }
}

export async function deleteCard(id) {
    try {
        let fetchDelete;
        fetchDelete = await fetch(`https://668432fe56e7503d1adfa6f7.mockapi.io/prod/produtos/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    

        if(!fetchDelete.ok) {
            throw new Error('Erro ao deletar dados da API');
        }

    } catch(erro) {
        alert('Ops! Parece que a conexão não está boa...');
        console.log('Não foi possível realizar o pedido - ' + erro);
    }
}