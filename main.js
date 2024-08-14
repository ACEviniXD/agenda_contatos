document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeContato = document.getElementById('nome-contato').value;
    const numeroTelefone = document.getElementById('numero-telefone').value;

    if (nomeContato === "" || numeroTelefone === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const tabela = document.querySelector('.cadastro-dados tbody');
    const linhas = tabela.querySelectorAll('tr');
    
    for (let i = 0; i < linhas.length; i++) {
        const celulaNome = linhas[i].cells[0].textContent.trim();
        const celulaNumero = linhas[i].cells[1].textContent.trim();
        
        if (nomeContato === celulaNome) {
            alert("Este nome já está na lista.");
            return;
        }
        
        if (numeroTelefone === celulaNumero) {
            alert("Este número de telefone já está na lista.");
            return;
        }
    }
    
    const novaLinha = tabela.insertRow();
    

    const celulaNome = novaLinha.insertCell(0);
    const celulaNumero = novaLinha.insertCell(1);


    celulaNome.textContent = nomeContato;
    celulaNumero.textContent = numeroTelefone;


    const totalNumeros = document.getElementById('total-numeros');
    totalNumeros.textContent = totalAtual + 1;


    document.getElementById('form-cadastro').reset();
});
