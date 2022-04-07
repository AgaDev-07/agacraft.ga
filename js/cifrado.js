const letters = 'ABCabcDEFdefGHIghiJKLjklMNOmnoPQRpqrSTUstuVWXvwxYZyz0123456789-@+*?¿()[]{}<>#$&!|°';
const numberLetters = letters.length

function cifrar(texto, desplazamiento=1) {
  if (!texto) return '';
  desplazamiento = (desplazamiento % numberLetters + numberLetters) % numberLetters;
  return texto.replace(/[A-Z]/ig, c => letters[(letters.indexOf(c) + desplazamiento) % numberLetters])
}
function deCifrar(texto, desplazamiento=1) {
  if (!texto) return '';
  desplazamiento = (desplazamiento % numberLetters - numberLetters) % numberLetters;
  return texto.replace(/[A-Z]/ig, c => letters[(letters.indexOf(c) - desplazamiento) % numberLetters])
}

export { cifrar, deCifrar }