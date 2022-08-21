const $ = e => document.querySelector(e);
const $$ = e => document.querySelectorAll(e);
const params = location.search.substring(1).split('&').reduce((params, param) => {
    const [key, value] = param.split('=');
    params[key] = value;
    return params;
}, {});

function pass() {
  if ($("#pass").type === "password") {
    $("#pass").type = "text";
    $("#btnpass").value = 'o'
  } else {
    $("#pass").type = "password";
    $("#btnpass").value = '-'
  }
}
(()=>{
  let interval = setInterval(()=>{
    if(loclStorage.length){
        login(localStorage.getItem('password'), localStorage.getItem('user'))
    }
  }, 500)
})()
function download(page, addon) {
  let user = $("#user").value;
  let password = $("#pass").value;
  if (user === "") $("#no").innerText = "Ingrese un usuario";
  else if (password === "") $("#no").innerText = "Ingrese una contraseña";
  else login(user, password)
}
function login(user, password){
    fetch(`https://aga-db.herokuapp.com${location.pathname}?user=${stringToUrl(user)}&password=${stringToUrl(password)}`).then(res => res.json()).then(data => {
      if (data.access) {
        const $ = e=>document.querySelector(e)
        $('.contenedor').style.display = '';
        $('#login').style.display = 'none';
        $('#login-download').id = 'download';
        $('#download').href = data.url;
        localStorage.setItem('password', password);
        localStorage.setItem('user', user);
      }else $('#no').innerText= 'Usuario o contraseña incorrecta'

    }).catch(console.error)
}
function stringToUrl(str) {
  return str.replaceAll(' ', "%20").replaceAll('&', "%26").replaceAll('?', "%3F").replaceAll('=', "%3D").replaceAll('+', "%2B").replaceAll('#', "%23").replaceAll('/', "%2F").replaceAll('\\', "%5C").replaceAll('\'', "%27").replaceAll('\"', "%22").replaceAll('<', "%3C").replaceAll('>', "%3E").replaceAll('(', "%28").replaceAll(')', "%29").replaceAll('[', "%5B").replaceAll(']', "%5D").replaceAll('{', "%7B").replaceAll('}', "%7D").replaceAll('^', "%5E").replaceAll('$', "%24").replaceAll('!', "%21").replaceAll('*', "%2A").replaceAll('|', "%7C").replaceAll('~', "%7E").replaceAll('`', "%60");
}
