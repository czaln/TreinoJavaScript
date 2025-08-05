let primeiroNumero, segundoNumero, x;
//Aqui usei 2 loops para poder validar se a entrada do usuária é válida dentro dos parâmetros que espero do usuário.
do {
  //Entrada de dados
  primeiroNumero = prompt("Digite um número de 0 à 100:");
  x = parseFloat(primeiroNumero);
} while ((primeiroNumero < 0) || (primeiroNumero > 100) || (isNaN(x)));

do {
  segundoNumero = prompt("Digite um segundo número de 0 à 100:");
  x = parseFloat(primeiroNumero);
} while ((segundoNumero < 0) || (segundoNumero > 100) || (isNaN(x)));
//Precessamento dos dados.
if (primeiroNumero > segundoNumero) {
  //Já os alerts são a saída do programa.
  alert(`${primerioNumero} é maior que ${segundoNumero}.`);
} else if (primeiroNumero < segundoNumero) {
  alert(`${segundoNumero} é maior que ${primeiroNumero}.`);
} else {
  alert(`Os dois números são iguais`);
}