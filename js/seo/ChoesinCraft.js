const cuentas = require('/data/cuentas.json');
var pass = prompt("Ingresa la contraseña");
var correcto = cuentas.seomc99.pass;

if(pass == correcto[0]||pass == correcto[1]/*pass=="SeoMC99" || pass=="seomc99" || pass=="elver galarga"*/){
  location.href="https://www.mediafire.com/file/du063qv9gtiosxo/ChoesinCraft.mcaddon/file";
}
else{
  alert("la contraseña es incorrecta porfavor verifica que la estes ingresando correctamente");
  location.href="/seo/ChoesinCraft";
}
