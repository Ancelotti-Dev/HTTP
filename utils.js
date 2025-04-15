export function criarItemLista(cadastro, callbackRemover) {
    const item = document.createElement("li");
    item.innerHTML = `
        <strong>Nome:</strong> ${cadastro.nome} <br>
        <strong>Email:</strong> ${cadastro.email}
        <button>X</button>
    `;
    item.querySelector("button").addEventListener("click", () => callbackRemover(cadastro._id, item));
    return item;
}

export function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
}
