const inputTitle = document.getElementById('titulo');
const inputPreco = document.getElementById('preco');
const inputSubmit = document.getElementById('submit');

let regExrText = /[^a-zA-Z:&,.âêôÂÊÔéóáíÍÁÉÓàÀãõÃÕ 0-9]+/g;
let regExrDinheiro = /\d?\d/gi;

export function validaTexto() {
    let valorInput = inputTitle.value;
    let replaceValue = valorInput.replace(regExrText, "");
    console.log("Valor Final: " + replaceValue);
}

export function validaDinheiro() {
    let valorInput = inputPreco.value;
    let tratamento = parseFloat(valorInput).toString();

    let numeroCortado;
    let numeroCortadoDois;
    let numeroCortadoTres;
    let concatenar;

    // 1.000
    if(tratamento.length == 4) {
        numeroCortado = tratamento.substring(0, 1);
        numeroCortadoDois = tratamento.substring(1, 4);

        concatenar = `${numeroCortado}.${numeroCortadoDois}`;
        console.log("Valor Final: R$ " + concatenar);
    }

    // 10.000
    if(tratamento.length == 5) {
        numeroCortado = tratamento.substring(0, 2);
        numeroCortadoDois = tratamento.substring(2, 5);

        concatenar = `${numeroCortado}.${numeroCortadoDois}`;
        console.log("Valor Final: R$ " + concatenar);
    }

    // 100.000
    if(tratamento.length == 6) {
        numeroCortado = tratamento.substring(0, 3);
        numeroCortadoDois = tratamento.substring(3, 6);

        concatenar = `${numeroCortado}.${numeroCortadoDois}`;
        console.log("Valor Final: R$ " + concatenar);
    }

    // 100.0000
    if(tratamento.length == 7) {
        numeroCortado = tratamento.substring(0, 3);
        numeroCortadoDois = tratamento.substring(3, 6);
        numeroCortadoTres = tratamento.substring(6, 7);

        concatenar = `${numeroCortado}.${numeroCortadoDois}${numeroCortadoTres}`;
        console.log("Valor Final: R$ " + concatenar);
    }

    // 100.000,00
    if(tratamento.length == 8) {
        numeroCortado = tratamento.substring(0, 3);
        numeroCortadoDois = tratamento.substring(3, 6);
        numeroCortadoTres = tratamento.substring(6, 8);

        concatenar = `${numeroCortado}.${numeroCortadoDois},${numeroCortadoTres}`;
        console.log("Valor Final: R$ " + concatenar);
    }

    // 100.000.000
    if(tratamento.length == 9) {
        numeroCortado = tratamento.substring(0, 3);
        numeroCortadoDois = tratamento.substring(3, 6);
        numeroCortadoTres = tratamento.substring(6, 9);

        concatenar = `${numeroCortado}.${numeroCortadoDois}.${numeroCortadoTres}`;
        console.log("Valor Final: R$ " + concatenar);
    }
}