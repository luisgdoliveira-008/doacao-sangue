// Array para armazenar os doadores
const doadores = [];

const form = document.getElementById('doadorForm');
const mensagemErro = document.getElementById('mensagem');
const listaDoadoresUI = document.getElementById('listaDoadores');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    mensagemErro.innerText = ""; // Limpa erros anteriores

    // Captura de valores
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const idade = parseInt(document.getElementById('idade').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const tipo = document.getElementById('tipo').value;
    const telefone = document.getElementById('telefone').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const estado = document.getElementById('estado').value.trim();

    let erros = [];

    // --- VALIDAÇÕES ---
    
    // 1. Nome completo (pelo menos nome e sobrenome)
    if (nome.split(' ').length < 2) {
        erros.push("O nome deve conter nome e sobrenome.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        erros.push("Insira um e-mail válido.");
    }

    if (idade < 16) {
        erros.push("A idade mínima para doação é 16 anos.");
    }

    if (peso < 50) {
        erros.push("O peso mínimo para doação é 50kg.");
    }

    if (tipoSanguineo === "") {
        erros.push("Selecione um tipo sanguíneo.");
    }

    const telefoneNumerico = telefone.replace(/\D/g, ''); // Remove o que não for número
    if (telefone !== telefoneNumerico || telefone === "") {
        erros.push("O telefone deve conter apenas números.");
    }


    if (erros.length > 0) {
        mensagemErro.innerText = erros.join("\n");
    } else {
        
        // Criar objeto do doador
        const novoDoador = {
            nome,
            email,
            idade,
            peso,
            tipoSanguineo,
            telefone,
            cidade,
            estado
        };

        // Adicionar ao array
        doadores.push(novoDoador);

        // Exibir no console conforme solicitado
        console.log("Doador cadastrado com sucesso!", novoDoador);
        console.log("Lista completa de doadores:", doadores);

        // Atualizar a tela
        atualizarLista();
        form.reset();
        alert("Cadastro realizado com sucesso!");
    }
});

function atualizarLista() {
    listaDoadoresUI.innerHTML = "";
    doadores.forEach(d => {
        const li = document.createElement('li');
        li.innerText = `${d.nome} | ${d.tipoSanguineo} | ${d.cidade}-${d.estado}`;
        listaDoadoresUI.appendChild(li);
    });
}