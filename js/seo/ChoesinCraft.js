const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const password = document.getElementById('pass')

const parrafo = document.getElementById("no")
const counts = {
  SeoMC99: 'password'
}

function pass() {
  btn1.style.display = 'none';
  btn2.style.display = '';
  password.type = 'text';
}
function passNo() {
  btn1.style.display = '';
  btn2.style.display = 'none';
  password.type = 'password';
}
function download() {
  const user = document.getElementById("user").value;
  const contra = cifrar(cifrar(cifrar(counts[user]||'')))
  if (counts[user] === contra) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('descargar').style.display = '';
  } else parrafo.innerHTML = `usuario o contraseña incorrecta`
}
