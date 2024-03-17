// Exibir no console 150 multiplos de 3

for(let multiplo = 0; multiplo < 150; multiplo++){
  console.log(multiplo*3);
}

// Executar enquanto variavel de controle for a divisão exata de 23

let indice = 1;

while(indice % 23 !== 0){
  console.log(indice);
  indice++;
}

// Executar uma primeira vez e verificar se o número é par, se for par parar o loop

let numero = 0;

do{
  console.log(numero);
  numero++;
}while(numero % 2 !== 0);

// Percorrer uma lista de produtos e exibilos

const produtos = ['café', 'arroz', 'pão', 'açucar' ,'óleo', 'tomate', 'feijão', 'batata', 'leite'];

for(const produto of produtos){
  console.log(produto);
}