function mostrarTabuada() {
    let inNumero = document.getElementById("inNumero");
    let outTabuada = document.getElementById("outTabuada");

    let numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número válido");
        inNumero.focus();
        return;
    }

    //cria uma variável tipo string
    let = resposta = "";

    //cria um laço de repetição
    for (var i = 1; i <= 10; i++) {
        //a variável resposta vai acumulandoos novos conteudos

        resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";
    }
    outTabuada.textContent = resposta;

}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarTabuada)