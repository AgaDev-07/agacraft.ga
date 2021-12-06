const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function cifrar(texto, desplazamiento){
  if(!texto)return '';
  desplazamiento = (desplazamiento % 26 + 26)%26;
  return texto.replace(/[a-Z]/ig, c=> letras[(letras.indexOf(c)+desplazamiento)%26])
}
function deCifrar(texto, desplazamiento){
  if(!texto)return '';
  desplazamiento = (desplazamiento % 26 - 26)%26;
  return texto.replace(/[a-Z]/ig, c=> letras[(letras.indexOf(c)-desplazamiento)%26])
}