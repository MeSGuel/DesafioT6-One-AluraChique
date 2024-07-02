const inputs = document.querySelectorAll('input');
const submit = document.getElementById('submit');
window.onload = () => {
    inputs.forEach(input => {
        input.value = '';
        submit.value = 'Adicionar';
    })
}

const containerForm = document.getElementById('container-form');
const btnAdd = document.getElementById('btn-add');
const diamondIcon = document.getElementById('diamond');

let containClass = containerForm.classList.contains('show-form');
btnAdd.addEventListener('click', e => showForm(e));

function showForm(e) {
    e.stopPropagation();

    if(!containClass) {
        btnAdd.textContent = 'Fechar Formulário';
        containerForm.classList.add('show-form');
        diamondIcon.classList.add('hidden-diamond');

        containClass = containerForm.classList.contains('show-form');
    } else {
        btnAdd.textContent = 'Adicionar Produtos';
        containerForm.classList.remove('show-form');
        diamondIcon.classList.remove('hidden-diamond');
        
        containClass = containerForm.classList.contains('show-form');
    }
}
