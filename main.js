const form = document.getElementById('form');
const table = document.querySelector('table');

if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('e-mail').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const novoContato = { name, email, subject, message };

        // Salvar no localStorage
        const contatosAtuais = JSON.parse(localStorage.getItem('contatos')) || [];
        contatosAtuais.push(novoContato);
        localStorage.setItem('contatos', JSON.stringify(contatosAtuais));

        alert("Contato salvo com sucesso!");
        form.reset();
    });
}

if (table) {
    carregarContatos();
}

function adicionarLinhaNaTabela({ name, email, subject, message }) {
    if (!table) return;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${subject}</td>
        <td>${message}</td>
    `;
    table.appendChild(newRow);
}

function carregarContatos() {
    const contatosSalvos = JSON.parse(localStorage.getItem('contatos')) || [];

    contatosSalvos.forEach(contato => {
        adicionarLinhaNaTabela(contato);
    });
}
