const form = document.getElementById("formDoacao");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const idade = +document.getElementById("idade").value;
    const peso = +document.getElementById("peso").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("Estado").value;
    const tipo = document.getElementById("tipo").value;

    if (nome.length < 3) return alert("Nome inválido");
    if (!email.includes("@")) return alert("Email inválido");
    if (telefone.length < 10) return alert("Telefone inválido");
    if (idade <= 16) return alert("Idade minima 16 anos");
    if (!tipo) return alert("Selecione um tipo sanguineo");
    if (peso < 50) return alert("Peso baixo demais para a doação.");
    if (!cidade) return alert("Informe a cidade");
    if (!estado) return alert("Informe o estado");

    let informações = [{
        nome,
        email,
        idade,
        peso,
        tipo: tipo,
        telefone,
        cidade,
        estado
    }];

    alert("Formulário enviado!");
    alert(JSON.stringify(informações, null, ));
});