function calcularOperacoes() {
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const resultadoDiv = document.getElementById('resultado');
  
    if (isNaN(numero1) || isNaN(numero2)) {
      resultadoDiv.innerHTML = "<p style='color:red;'>Por favor, insira dois números válidos.</p>";
      return;
    }
  
    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicacao = numero1 * numero2;
    const divisao = numero2 !== 0 ? (numero1 / numero2).toFixed(2) : "Não é possível dividir por zero";
  
    resultadoDiv.innerHTML = `
      <h2>Resultados das Operações:</h2>
      <ul>
        <li><strong>Soma:</strong> ${soma}</li>
        <li><strong>Subtração:</strong> ${subtracao}</li>
        <li><strong>Multiplicação:</strong> ${multiplicacao}</li>
        <li><strong>Divisão:</strong> ${divisao}</li>
      </ul>
    `;
  }
  