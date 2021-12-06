const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function cifrar(texto, desplazamiento){
  if(!texto)return '';
  texto = texto.toUpperCase()
  desplazamiento = (desplazamiento % 26 + 26)%26;
  return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+desplazamiento)%26])
}
function deCifrar(texto, desplazamiento){
  if(!texto)return '';
  texto = texto.toUpperCase()
  desplazamiento = (desplazamiento % 26 - 26)%26;
  return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-desplazamiento)%26])
}