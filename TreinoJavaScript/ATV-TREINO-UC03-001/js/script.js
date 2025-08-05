let numero;

numero = prompt("Digite um número.");

if (numero > 100) {
  alert(`${numero} é maior que 100.`);
} else if (numero < 100) {
  alert(`${numero} é menor que 100`);
} else {
  alert(`Uau você adivinhou o número!`);
}