const h2s = $('h2');
const divs = $('div');
const titulo = $('#titulo');
const input = $('input');
const paragrafo = $('#paragrafo');
const elementsmargintop2 = $('.mt-4');

function alterarHTML(){

  titulo.text(input.val());
  titulo.css('color', '#7FFF00');
  for(let element of elementsmargintop2){
    $(element).addClass('mt-4');
  }
  input.val('');

  const novoP = document.createElement('p');
  novoP.TextContent = 'Novo texto adicionado via JavaScript';

  paragrafo.after(novoP);
}