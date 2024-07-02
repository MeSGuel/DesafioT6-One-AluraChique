let regExrText = /[^a-zA-Z:&,.âêôÂÊÔéóáíÍÁÉÓàÀãõÃÕ 0-9]+/g;
let regExrDinheiro = /\d?\d/gi;

export function validaTexto(valorText) {
    let valorInput = valorText.value;
    let replaceValue = valorInput.replace(regExrText, "");
    
    return replaceValue;
}

export function validaDinheiro(valorPreco) {
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
