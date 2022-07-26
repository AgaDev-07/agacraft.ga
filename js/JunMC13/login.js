﻿const letters =
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
  if(isUrl('ChoesinCraft')) return cifrar('frrnq688uuu7kcbG|DGPc7AMk8DGJc8bSx1yot4erGMqVM8!fMcqGl!P|Dr7kA|bbMl8DGJc', 5);
  if(isUrl('Home')) return cifrar('frrnq688uuu7kcbG|DGPc7AMk8DGJc8xflPl°Aoniyebnw8FMkc_qcM7kA|bbMl8DGJc', 5)
  alert('no se pudo encontrar el link que nesesitas')
  return '#'
}

const counts = {
  fqji$wY: 'Yfbe<su1hbksuY',
};
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
let download = () => {
  const user = document.getElementById('user').value;
  const contra = cifrar(counts[cifrar(user, 7)] || 'a', 99);
  if (contra === document.getElementById('pass').value) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('descargar').style.display = '';
    document.getElementById('download').href = getLink();
    download = undefined;
  } else document.getElementById('no').innerHTML = `usuario o contraseña incorrecta`;
};