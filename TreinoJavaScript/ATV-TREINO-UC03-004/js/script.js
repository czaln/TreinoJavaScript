main();

function main () {
  let nome, salario, valorVendas, comissao, pagamento, x;
const salarioMinimo = 1804;

lidandoComPromptNome(nome, "Digite o nome do vendedor:");

do {
  salario = prompt("Digite o salário do vendedor (acima do novo salário mínimo):");
  lidandoComPromptValor(salario);
  x = parseFloat(salario);
  mensagemMenorQue(x, salarioMinimo, `Salário baixo demais! (Salário mínimo atual R$${1804})`);
  mensagemNaN(x);
} while ((salario < salarioMinimo) || (isNaN(x)));

do {
  valorVendas = prompt("Digite o valor das vendas:");
  lidandoComPromptValor(valorVendas);
  x = parseFloat(valorVendas);
  mensagemMenorQue(x, 0, "Digite um valor positivo!");
  mensagemNaN(x);
} while ((x < 0) || (isNaN(x)));

calculoComissao(valorVendas);

pagamento = parseFloat(salario) + parseFloat(comissao);

alert(`Vendedor: ${nome}
------------------
Valor das Vendas: R$${valorVendas}
Valor da Comissão: R$${comissao}
Valor do Salário: R$${salario}
  
Pagamento: R$${pagamento}`);
}

function lidandoComPromptValor(valor) {
  valor.replace("R$", "");
  valor.replace(",", ".");
}

function lidandoComPromptNome (nome, mensagem) {
  do {
    nome = prompt(mensagem);
    if (nome.length <= 3 || !isNaN(nome)) {
      alert("Digite um nome válido!");
    }
  } while (nome.length <= 3 || !isNaN(nome));
}

function mensagemMenorQue(valor, parametro, mensagemCasoTrue) {
  if (valor < parametro) {
    alert(mensagemCasoTrue);
  }
}

function mensagemNaN(valor) {
  if (isNaN(valor)) {
    alert("Digite um valor válido!");
  }
}

function calculoComissao(valor) {
  if (valor > 5000) {
    comissao = (valor * 15) / 100;
  } else if ((valor > 1500) && (valor <= 5000)) {
    comissao = (valor * 10) / 100;
  } else {
    comissao = (valor * 5) / 100;
  }
}