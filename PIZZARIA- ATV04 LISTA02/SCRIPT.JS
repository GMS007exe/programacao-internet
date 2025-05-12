function calcularPedido() {
    const sabores = [
      document.getElementById("sabor1").value.trim(),
      document.getElementById("sabor2").value.trim(),
      document.getElementById("sabor3").value.trim(),
      document.getElementById("sabor4").value.trim()
    ];
  
    const refri = parseInt(document.getElementById("refri").value);
    const resultado = document.getElementById("resultado");
  
    // Verifica se os sabores foram preenchidos e o número de refrigerantes é válido
    if (sabores.some(s => s === "") || isNaN(refri) || refri < 0) {
      resultado.innerHTML = "<p style='color:red;'>Preencha todos os sabores e insira um número válido de refrigerantes.</p>";
      return;
    }
  
    const precoPizza = 12;
    const precoRefri = 7;
    const total = (4 * precoPizza) + (refri * precoRefri);
  
    let html = "<h2>Pedido Realizado</h2><p><strong>Sabores escolhidos:</strong></p><ul>";
    sabores.forEach(sabor => {
      html += `<li>${sabor}</li>`;
    });
    html += `</ul><p><strong>Refrigerantes:</strong> ${refri}</p>`;
    html += `<p><strong>Total a pagar:</strong> R$ ${total.toFixed(2)}</p>`;
  
    resultado.innerHTML = html;
  }
  