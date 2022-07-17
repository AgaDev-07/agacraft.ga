const letters =
  'ABCabcDEFdefGHIghiJKLjklMNOmnoPQRpqrSTUstuVWXvwxYZyz0123456789-@+*?¿()[]{}<>#$&!|°';
const numberLetters = letters.length;

function cifrar(texto, desplazamiento = 1) {
  if (!texto) return '';
  desplazamiento = ((desplazamiento % numberLetters) + numberLetters) % numberLetters;
  return texto.replace(
    /[A-Z]/gi,
    c => letters[(letters.indexOf(c) + desplazamiento) % numberLetters]
  );
}

const counts = {
  SeoMC99: '@FBE13+HBK13',
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
  const contra = cifrar(counts[user] || 'a', 99);
  if (contra === document.getElementById('pass').value) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('descargar').style.display = '';
    document.getElementById('download').href =
      'https://www.mediafire.com/file/du063qv9gtiosxo/ChoesinCraft.mcaddon/file';
    download = undefined;
  } else document.getElementById('no').innerHTML = `usuario o contraseña incorrecta`;
};
