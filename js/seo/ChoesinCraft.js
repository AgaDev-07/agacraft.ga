const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ+*0123456789';
const n = letras.length

function cifrar(texto, desplazamiento=7) {
  if (!texto) return '';
  const textoMayuscula = texto.toUpperCase();
  const desplazamientoCalculo = (desplazamiento % n + n) % n;
  return textoMayuscula.replace(/[A-Z+*0-9]/ig, c => letras[(letras.indexOf(c) + desplazamientoCalculo) % n])
}
function pass() {
  document.getElementById('btn1').style.display = 'none';
  document.getElementById('btn2').style.display = '';
  document.getElementById('pass').type = 'text';
}
function passNo() {
  document.getElementById('btn1').style.display = '';
  document.getElementById('btn2').style.display = 'none';
  document.getElementById('pass').type = 'password';
}
function validar() {
  const parrafo = document.getElementById("no")
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const password = `@${(50 * 12)+(5*5)}MOJ${1+(9*9)}BMOKK`
  const contra = cifrar(cifrar(cifrar(pass))) === password;
  if (user === "SeoMC99" && contra) {
    console.log(contra);
    document.getElementById('login').style.display = 'none';
    document.getElementById('descargar').style.display = '';
    document.getElementById('load').id = 'download';
  } else {
    console.log(contra);
    if (user == "SeoMC99") {
      parrafo.innerHTML = `${user} tu contraseña es incorresta`;
    } else {
      parrafo.innerHTML = `"${user}" invalido`;
    }
  }
}
