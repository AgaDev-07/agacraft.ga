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
  const validate = /^@([^0-9A-MO-Za-z][^0-9A-IK-Za-z][^0-9A-LN-Za-z][1][3])([+])([^0-9A-OQ-Za-z][^0-9A-IK-Za-z][^0-9A-RT-Za-z][1][3])([*][*])$/;
  const contra = validate.test(pass);
  if(user=="SeoMC99" && contra==true){
    console.log(contra);
    document.getElementById('login').style.display = 'none';
    document.getElementById('descargar').style.display = '';
  }else {
    console.log(contra);
    if(user=="SeoMC99") {
      parrafo.innerHTML = `${user} tu contraseña es incorresta`;
    }else {
      parrafo.innerHTML = `"${user}" invalido`;
    }
  }
}
document.addEventListener('keydown', function(tecla){
  var codigoTecla = tecla.keyCode;
  if(codigoTecla == 13){
    validar();
  }
});
