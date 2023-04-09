const form = document.getElementById("form");
const inputNome = document.getElementById("nome");
const inputTel = document.getElementById("tel");
const corpoTabela = document.getElementById("corpoTabela");
const btnDeletar = document.querySelector('.btn-deletar');
const btnEditar = document.querySelector('.btn-editar');
const button = document.getElementById('button');
const alerta = document.querySelector('.alerta');


let todosNomeContato = [];
let todosTelContato = [];


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nomeContato = inputNome.value;
    const telContato = inputTel.value;

    if (todosTelContato.includes(telContato)) {
        // mensagem essa pessoa ja está cadastrada com esse numero
        alerta.style.display = 'block';
        alerta.innerHTML = " Usuário já existente "
        return;
    }
   
    alerta.style.display = 'none';
    cadastraContato(nomeContato, telContato);
    inputNome.value = '';
    inputTel.value = '';


});


function deletaLinha(tr) {
    tr.remove();
}


function cadastraContato(nome, tel) {
    let tr = criaTr();

    let tdNome = criaTd();
    tdNome.innerHTML = nome;
    tr.appendChild(tdNome);
    todosNomeContato.push(nome);

    let tdTel = criaTd();
    tdTel.innerHTML = tel;
    tr.appendChild(tdTel);
    todosTelContato.push(tel)

    const tdBtn = criaTd();
    const btnDel = criaBtn();
    btnDel.innerHTML = "Deletar";
    btnDel.classList.add('btn-deletar');
    tr.appendChild(btnDel);

    const btnEdit = criaBtn();
    btnEdit.innerHTML = "Editar";
    btnEdit.classList.add('btn-editar');

    tdBtn.appendChild(btnDel);
    tdBtn.appendChild(btnEdit);

    tr.appendChild(tdBtn);

    btnDel.onclick = () => {
        deletaLinha(tr)
    };

    btnEdit.onclick = () => {
        inputNome.value = nome;
        inputTel.value = tel;

        const editButtonForm = criaBtn();
        editButtonForm.innerHTML = "editar"
        form.appendChild(editButtonForm);
        button.style.display = 'none';

        editButtonForm.onclick = () => {
            tdNome.innerHTML = inputNome.value;
            tdTel.innerHTML = inputTel.value;
          
            editButtonForm.style.display = 'none';
            button.style.display = 'block';
            tr.remove();
        }

    };


    corpoTabela.appendChild(tr);


}



function criaTr() {
    const tr = document.createElement('tr');
    return tr;
}


function criaTd() {
    const td = document.createElement('td');
    return td;
}

function criaBtn() {
    const btn = document.createElement('button');
    return btn
}