const h2s = document.getElementsByTagName('h2');
 console.log(h2s);
const divs = document.getElementsByTagName('div');
 console.log(divs);
const titulo = document.getElementById('titulo');
 console.log(titulo);
const input = document.getElementById('input');
 console.log('input');
const paragrafo = document.getElementById('paragrafo');
 console.log(paragrafo);
const elementsmargintop2 = document.getElementsByClassName('mt-2');
 console.log(elementsmargintop2);

function alterarHTML(){

  titulo.textContent = input.value;
  titulo.style.color = '#00597b';
  for(let element of elementsmargintop2){
    element.ClassName = 'mt-4';
  }
  input.value = '';

  const novoP = document.CreateElemente('p');
  novoP.TextContent = 'Novo texto adicionado via JavaScript';

  paragrafo.parentNode.appendChild(novoP);
}
