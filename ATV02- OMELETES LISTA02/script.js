function calcularOmelete() {
    const pessoas = parseInt(document.getElementById('pessoas').value);
    const resultado = document.getElementById('resultado');
  
    if (isNaN(pessoas) || pessoas <= 0) {
      resultado.innerHTML = `<p style="color:red;">Por favor, insira um número válido de pessoas.</p>`;
      return;
    }
  
    const ovos = pessoas * 2;
    const queijo = pessoas * 50;
  
    resultado.innerHTML = `
      <h2>Ingredientes Necessários:</h2>
      <ul>
        <li><strong>${ovos}</strong> ovos</li>
        <li><strong>${queijo}</strong> gramas de queijo</li>
      </ul>
    `;
  }
  