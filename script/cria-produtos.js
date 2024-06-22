export async function criaProdutos(nome, preco, imagem) {
    try {
        const postProdutos = await fetch("http://localhost:3000/produtos", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                nome: nome,
                preco: `$ ${preco}`,
                imagem: imagem
            })    
        });

        if(!postProdutos.ok) {
            throw new Error("Não foi possível enviar o produto!");
        }

        const produtosConvertidos = await postProdutos.json();
        return produtosConvertidos;
    } catch (erro) {
        console.error('Erro ao criar o produto:', erro);
        throw erro;
    }
}
