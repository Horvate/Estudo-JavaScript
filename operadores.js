const numero1 = 32;
const numero2 = 24;
const numero3 = 14;
const numero4 = 89;
const stringNumero = '1';

console.log('é igual', numero4 == stringNumero);
console.log('é igual', numero4 === stringNumero);
console.log('é diferente', numero4 != stringNumero);
console.log('é diferente', numero4 !== stringNumero);

console.log('número3 é maior igual que número2:', numero3 >= numero2);
console.log('número4 é maior igual que número2:', numero4 < numero2 );

console.log('Adição',numero2 + numero1);
console.log('Subtração',numero4 - numero1);
console.log('Multiplicação',numero3 * numero1);
console.log('Divisão',numero1 / numero3);
console.log('Módulo', numero2 % numero3);

// Estrutura de seleção

if (numero3 > numero4){
    console.log('Número 3 é maior');
}else if(numero2 > numero3){
    console.log('Número 2 é maior');
}else{
    console.log('Número 4 é maior');
  }

switch(numero4){
  case 54:
    console.log('cinquenta e quatro');
    break;
  case 44:
    console.log('quarenta e quatro');
    break;
  case 12:
    console.log('Dose');
    break;
  case 89:
    console.log('Oitenta e nove');
    break;
  default:
    console.log('Número não encontrado');
}



