function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let imc = peso / (altura * altura);
    
    

    if (imc < 18.5) {
        alert("Seu IMC é: " + imc.toFixed(2) + " - Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.9) {
        alert("Seu IMC é: " + imc.toFixed(2) + " - Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
        alert("Seu IMC é: " + imc.toFixed(2) + " - Sobrepeso");
    } else {
        alert("Seu IMC é: " + imc.toFixed(2) + " - Obesidade");
    }
}