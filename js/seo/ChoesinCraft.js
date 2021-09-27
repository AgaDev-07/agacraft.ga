function pass() {
document.getElementById('btn1').style.display = 'none';
document.getElementById('btn2').style.display = '';
document.getElementById('pass').type='text';
}
function passNo() {
  document.getElementById('btn1').style.display = '';
  document.getElementById('btn2').style.display = 'none';
  document.getElementById('pass').type='password';
}
function validar (){
  const parrafo = document.getElementById("no")
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  if(user=="SeoMC99" && pass=="@NJM13+PJS13**"){
    alert("usuario y contraseña validos");
    document.getElementById('login').style.display = 'none';
    document.getElementById('descargar').style.display = '';
  }else {
    if(user=="SeoMC99") {
      parrafo.innerHTML = `${user} tu contraseña es incorresta`;
    }else {
      parrafo.innerHTML = "Usuario y/o contraseña incorrecta";
    }
  }
}
