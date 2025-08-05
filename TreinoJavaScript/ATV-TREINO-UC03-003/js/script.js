let nome, valorVenda, comissao, x;
//entrada

do {
  nome = prompt("Digite o nome do funcionário:");
  if (nome.length <= 3 || !isNaN(nome)) {
    alert("Digite um nome válido!");
  }
} while (nome.length <= 3 || !isNaN(nome));

do {
  valorVenda = prompt("Digite o quanto ele vendeu (em reais)");
  valorVenda = valorVenda.replace("R$", "");//Lida com o caso da pessoa colocar o R$
  valorVenda = valorVenda.replace(/,/g, ".");//Lida com a pessoa colocar , em vez de .
  x = parseFloat(valorVenda);
  if (isNaN(x)) {
    alert("Digite um valor válido!");
  }
}while (isNaN(x));

//processamento
comissao = (valorVenda*10)/100;
//saída
alert(`${nome} receberá R$${comissao}.`);

