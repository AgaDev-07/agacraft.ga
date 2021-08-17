const cuentas = require('/data/cuentas.json');
var pass = prompt("Ingresa la contraseña");
var pass1 = cuentas.seomc99.pass.1;
var pass2 = cuentas.seomc99.pass.2;

if(pass == pass1||pass == pass2){
  location.href="https://www.mediafire.com/file/du063qv9gtiosxo/ChoesinCraft.mcaddon/file";
}
else{
  alert("la contraseña es incorrecta porfavor verifica que la estes ingresando correctamente");
  location.href="/seo/ChoesinCraft";
}
