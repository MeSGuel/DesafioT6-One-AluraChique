exibirNaTela();

async function pegaProduto() {
    const getProdutos = await fetch("http://localhost:3000/produtos");
    
    if (!getProdutos.ok) {
        throw new Error('Erro ao obter os produtos');
    }

    const produtosConvertidos = await getProdutos.json();
    return produtosConvertidos;
}

async function exibirNaTela() {
    const produtosRetornandos = await pegaProduto();
    const areaDosProdutos = document.getElementById('produtos');
    
    produtosRetornandos.forEach(produtos => {
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
    })
}