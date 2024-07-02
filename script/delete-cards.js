export async function deleteAll(e, cardChild) {
    e.preventDefault();
    e.stopPropagation();

    try {
        let fetchDelete;
        for(let i = 0; cardChild.length; i++) {
            fetchDelete = await fetch(`http://localhost:3000/produtos/${i}`, {
                method: "DELETE"
            })
        }

        if(!fetchDelete.ok) {
            throw new Error();
        }

    } catch(erro) {
        alert('Ops! Parece que a conexão não está boa...');
        console.log('Não foi possível deletar todos os produtos - ' + erro);
    }
}

export async function deleteCard(e, id) {
    e.preventDefault();
    e.stopPropagation();

    try {
        let fetchDelete;
        fetchDelete = await fetch(`http://localhost:3000/produtos/${id}`, {
            method: "DELETE"
        })
    

        if(!fetchDelete.ok) {
            throw new Error();
        }

    } catch(erro) {
        alert('Ops! Parece que a conexão não está boa...');
        console.log('Não foi possível deletar todos os produtos - ' + erro);
    }
}