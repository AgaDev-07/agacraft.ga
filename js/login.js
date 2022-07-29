const letters =
  'ABCabcDEFdefGHIghiJKLjklMNOmnoPQRpqrSTUstuVWXvwxYZyz0123456789-:./@+*?¿()[]{}<>#$&!|°';
const reg = /[A-Za-z0-9-@+*?¿()[\]{}<>#$&!|°:/.]/g
const numberLetters = letters.length;
function cifrar(texto, desplazamiento = 1) {
  if (!texto) return '';
  desplazamiento = ((desplazamiento % numberLetters) + numberLetters) % numberLetters;
  return texto.replace(reg,
    c => letters[(letters.indexOf(c) + desplazamiento) % numberLetters]
  );
}
function isUrl(Url){
  let url=document.URL;
  return url.endsWith(Url) || url.endsWith(Url+'.html')
}
function getLink(){
  const keys = Object.keys(url);
  const URL = keys.map(Url=>isUrl(Url)?url[Url]:'').join('');
  alert('no se pudo encontrar el link que nesesitas')
  return URL || '#'
}
function pass() {
  document.getElementById('btn').value = 'o';
  document.getElementById('btn').onclick = () => passNo();
  document.getElementById('pass').type = 'text';
}
function passNo() {
  document.getElementById('btn').onclick = () => pass();
  document.getElementById('btn').value = '-';
  document.getElementById('pass').type = 'password';
}
