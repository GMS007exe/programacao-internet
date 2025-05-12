function calcular() {
    const cotacao = parseFloat(document.getElementById('cotacaoDolar').value);
    const resultadosDiv = document.getElementById('resultados');
  
    if (isNaN(cotacao) || cotacao <= 0) {
      resultadosDiv.innerHTML = "<p style='color:red;'>Por favor, insira uma cotação válida.</p>";
      return;
    }
  
    const aumentos = [1, 2, 5, 10];
    let html = `<h2>Variações de Preço:</h2><ul>`;
  
    aumentos.forEach(porcentagem => {
      const valor = cotacao * (1 + porcentagem / 100);
      html += `<li>+${porcentagem}%: <strong>R$ ${valor.toFixed(2)}</strong></li>`;
    });
  
    html += `</ul>`;
    resultadosDiv.innerHTML = html;
  }
   
  