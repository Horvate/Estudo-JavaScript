const OlaMundo = 'Olá mundo, introdução a JS';

console.log(OlaMundo);
    console.log(`data hora: ${new Date()}`);

    function mensagem () {
      alert(OlaMundo);
    }

// Operadores && e || 

const verdadeiro = true;
const Naoverdadeiro = !verdadeiro;

const TudoVerdadeiro  = verdadeiro && Naoverdadeiro;
const TudoFalso = !verdadeiro && Naoverdadeiro;
const AlgumVerdadeiro  = verdadeiro || Naoverdadeiro;
const AlgumFalso = !verdadeiro || Naoverdadeiro;

console.log('Verdadeiro', verdadeiro);
console.log('TudoVerdadeiro', TudoVerdadeiro);
console.log('TudoFalso', TudoFalso);
console.log('AlgumVerdadeiro', AlgumVerdadeiro);
console.log('AlgumFalso',AlgumFalso);
