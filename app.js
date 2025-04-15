import { Cadastro } from './classes.js';
import { criarItemLista, limparCampos } from './utils.js';

const listaCadastro = document.getElementById("listacadastro");
const API_URL = "https://crudcrud.com/api/a412e397599a480e8864ae97dcbe57c6/cadastro";

function atualizarLista() {
    fetch(API_URL)
        .then(res => res.json())
        .then(dados => {
            listaCadastro.innerHTML = "";
            dados.map(cadastro => {
                const item = criarItemLista(cadastro, removerCadastro);
                listaCadastro.appendChild(item);
            });
        });
}

document.getElementById("cadastrar").addEventListener('click', () => {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!nome || !email) {
        alert("Preencha todos os campos!");
        return;
    }

    const novoCadastro = new Cadastro(nome, email);

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoCadastro)
    }).then(() => {
        limparCampos();
        atualizarLista();
    });
});

function removerCadastro(id, item) {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    }).then(() => {
        item.remove();
    });
}

// Carrega ao iniciar
atualizarLista();