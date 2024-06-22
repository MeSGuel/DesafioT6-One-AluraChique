export async function pegaProduto() {
    const getProdutos = await fetch("http://localhost:3000/produtos");
    
    if (!getProdutos.ok) {
        throw new Error('Erro ao obter os produtos');
    }

    const produtosConvertidos = await getProdutos.json();
    return produtosConvertidos;
}