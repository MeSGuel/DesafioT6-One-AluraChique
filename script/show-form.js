const containerForm = document.getElementById('container-form');
const btnAdd = document.getElementById('btn-add');
const btnDel = document.getElementById('btn-del');
const hipoIcon = document.getElementById('hipo');

let containsClass = containerForm.classList.contains('show-form');
btnAdd.addEventListener('click', (e) => {
    if(!containsClass) {
        btnAdd.textContent = 'Fechar Formulário';
        containerForm.classList.add('show-form');
        btnDel.classList.add('show-btn');
        hipoIcon.classList.add('hidden-hipo');
        containsClass = containerForm.classList.contains('show-form');
    } else {
        btnAdd.textContent = 'Adicionar Produtos';
        containerForm.classList.remove('show-form');
        btnDel.classList.remove('show-btn');
        hipoIcon.classList.remove('hidden-hipo');
        containsClass = containerForm.classList.contains('show-form');
    }
})
