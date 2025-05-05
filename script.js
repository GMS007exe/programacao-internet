document.getElementById("btnSomar").onclick = function () {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado = numero1 + numero2;
    document.getElementById("resultadoSoma").textContent = "Resultado: " + resultado;
};
document.getElementById("btnTroco").onclick = function () {
    let valorPago = parseFloat(document.getElementById("valorPago").value);
    let precoProduto = parseFloat(document.getElementById("precoProduto").value);
    let troco = valorPago - precoProduto;

    if (troco < 0) {
        document.getElementById("resultadoTroco").textContent = "Valor pago é insuficiente.";
    } else {
        document.getElementById("resultadoTroco").textContent = "Troco: R$ " + troco.toFixed(2);
    }
};

let titulo = document.querySelector("#titulo");
let campoTexto = document.querySelector("#campoTexto");
let btTrocarTexto = document.querySelector("#btTrocarTexto");

function alterarTexto() {
    let textoDigitado = campoTexto.value;
    titulo.textContent = textoDigitado;
}

btTrocarTexto.onclick = function () {
    alterarTexto();
};


function calcularValor() {
    const precoQuilo = parseFloat(document.getElementById('precoQuilo').value);
    const quantidadeQuilos = parseFloat(document.getElementById('quantidadeQuilos').value);
  
    if (isNaN(precoQuilo) || isNaN(quantidadeQuilos)) {
      document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
      return;
    }
  
    const valorTotal = precoQuilo * quantidadeQuilos;
    document.getElementById('resultado').innerText = 'Valor a pagar: R$ ${valorTotal.toFixed(2)}';
  }