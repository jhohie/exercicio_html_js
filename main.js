const form = document.getElementById('form-exercicio');


form.addEventListener("submit", function(e){
    e.preventDefault();
const numeroA =  (document.getElementById('numero-A').value);
const numeroB =  (document.getElementById('numero-B').value);
function CalculaDiferenca(numeroA, numeroB){
    if (numeroB > numeroA){
        alert('  Sucesso, Segundo número maior que o primeiro');
        return true;
    } else {
        alert('Erro, Primeiro número maior que o segundo');
        return false;
    }
}
formEValido = CalculaDiferenca(numeroA, numeroB)
}
);