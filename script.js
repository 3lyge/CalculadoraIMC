function calcularIMC() {

    //entrada de dados
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    //processamento
    let IMC = peso / (altura * altura);
    //Formatação de resultado
    let IMCformatado = IMC.toFixed(2).replace('.', ',');

    //Saída
    document.getElementById("resultado").textContent = "Seu IMC é: " + IMCformatado;
    if (IMC < 18.5) {
        document.getElementById("resultado").textContent += " - Abaixo do peso 🟡";
    } else if (IMC >= 18.5 && IMC < 25) {
        document.getElementById("resultado").textContent += " - Peso normal 🟢";
    } else if (IMC >= 25 && IMC < 30) {
        document.getElementById("resultado").textContent += " - Sobrepeso 🟡";
    } else if (IMC >=30) {
        document.getElementById("resultado").textContent += " - Obesidade 🔴";
    }
}
