import { postProdutos } from "./connectaApi.js";

const submit = document.getElementById('submit');
const form = document.getElementById('form');

form.addEventListener('invalid', e => {
    form.style.backgroundColor = 'red';
})

const regExrText = /[^a-zA-Z:&,.âêôÂÊÔéóáíÍÁÉÓàÀãõÃÕ 0-9]+/g;
const regExrDinheiro = /[^0-9]/g;

let tituloInput = document.getElementById('titulo');
let precoInput = document.getElementById('preco');
let imagemInput = document.getElementById('imagem');
form.addEventListener('submit', async e => {
    e.preventDefault();

    await postProdutos(tituloInput, precoInput, imagemInput);
    location.reload();

    tituloInput.value = '';
    precoInput.value = '';
    imagemInput.value = '';

    tituloInput.focus();
});


// Funções de validações.
export function validaTexto(tituloInput) {
    let valorInput = tituloInput.value;
    let replaceValue = valorInput.replace(regExrText, "");
    
    return replaceValue;
}

precoInput.addEventListener('blur', inputEmpty);
function inputEmpty() {
    let valorInput = precoInput.value;
    let valorTrocado = valorInput.replace(regExrDinheiro, '');

    precoInput.value = valorTrocado;
    console.log('Valor trocado: ' + valorTrocado);
}


// Formata o preço dos Produtos
export function formataPreco(valorPreco) {
    let precoTratado = parseFloat(valorPreco).toString();

    let numeroCortado;
    let numeroCortadoDois;
    let numeroCortadoTres;
    let concatenar;

    // 1.000
    if(precoTratado.length == 4) {
        numeroCortado = precoTratado.substring(0, 1);
        numeroCortadoDois = precoTratado.substring(1, 4);

        concatenar = `${numeroCortado}.${numeroCortadoDois}`;
        console.log("Valor Final: R$ " + concatenar);
    }


    // 10.000
    if(precoTratado.length == 5) {
        numeroCortado = precoTratado.substring(0, 2);
        numeroCortadoDois = precoTratado.substring(2, 5);

        concatenar = `${numeroCortado}.${numeroCortadoDois}`;
        console.log("Valor Final: R$ " + concatenar);
    }

    // 100.000
    if(precoTratado.length == 6) {
        numeroCortado = precoTratado.substring(0, 3);
        numeroCortadoDois = precoTratado.substring(3, 6);

        concatenar = `${numeroCortado}.${numeroCortadoDois}`;
        console.log("Valor Final: R$ " + concatenar);
    }

    // 100.0000
    if(precoTratado.length == 7) {
        numeroCortado = precoTratado.substring(0, 3);
        numeroCortadoDois = precoTratado.substring(3, 6);
        numeroCortadoTres = precoTratado.substring(6, 7);

        concatenar = `${numeroCortado}.${numeroCortadoDois}${numeroCortadoTres}`;
        console.log("Valor Final: R$ " + concatenar);
    }

    // 100.000,00
    if(precoTratado.length == 8) {
        numeroCortado = precoTratado.substring(0, 3);
        numeroCortadoDois = precoTratado.substring(3, 6);
        numeroCortadoTres = precoTratado.substring(6, 8);

        concatenar = `${numeroCortado}.${numeroCortadoDois},${numeroCortadoTres}`;
        console.log("Valor Final: R$ " + concatenar);
    }

    // 100.000.000
    if(precoTratado.length == 9) {
        numeroCortado = precoTratado.substring(0, 3);
        numeroCortadoDois = precoTratado.substring(3, 6);
        numeroCortadoTres = precoTratado.substring(6, 9);

        concatenar = `${numeroCortado}.${numeroCortadoDois}.${numeroCortadoTres}`;
        console.log("Valor Final: R$ " + concatenar);
    }

    return concatenar;
}
