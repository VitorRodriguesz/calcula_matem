function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

function calcularFibonacci(numero) {
    let fibonacciArray = [];
    let a = 0, b = 1;
    while (a <= numero) {
        fibonacciArray.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
    return fibonacciArray;
}

document.getElementById("calcularBtn").addEventListener("click", function() {
    let numero = parseInt(document.getElementById("numeroInput").value);
    let resultadoElement = document.getElementById("resultado");
    
    if (isNaN(numero) || numero < 0) {
        resultadoElement.innerHTML = '<span class="error-msg">Por favor, insira um número inteiro positivo.</span>';
        return;
    }
    
    let fatorial = calcularFatorial(numero);
    let fibonacciSequence = calcularFibonacci(numero);

    resultadoElement.innerHTML = `
        <p>O fatorial de <strong>${numero}</strong> é: <strong>${fatorial}</strong></p>
        <p>A sequência de Fibonacci até <strong>${numero}</strong> é: <strong>${fibonacciSequence.join(", ")}</strong></p>
    `;
});