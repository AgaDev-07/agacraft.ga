const $ = e => document.querySelector(e);
const $$ = e => document.querySelectorAll(e);

function pass() {
  if ($("#pass").type === "password") {
    $("#pass").type = "text";
    $("#btnpass").value = 'o'
  } else {
    $("#pass").type = "password";
    $("#btnpass").value = '-'
  }
}
function download(page, addon) {
  let user = $("#user").value;
  let password = $("#pass").value;
  if (user === "") $("#no").innerHTML = "Ingrese un usuario";
  else if (password === "") $("#no").innerHTML = "Ingrese una contraseña";
  else {
    try {
      const db = new XMLHttpRequest();
      db.open("GET", `https://aga-db.herokuapp.com/${page}/${addon}?user=${stringToUrl(user)}&password=${stringToUrl(password)}`);
      db.send(null);
      let data = JSON.parse(db.responseText)
      if (data.VALID) {
        $('#login').style.display = "none";
        $('.container').style.display = "block";
        $('.login-download').href = data.URL
        $('.login-download').id = 'download'
        throw new Error('VALID');
      } else $("#no").innerHTML = 'Usuario o contraseña incorrectos';
    } catch (error) {
      console.error(error)
    }
  }
}
function stringToUrl(str) {
  return str.replaceAll(' ', "%20").replaceAll('&', "%26").replaceAll('?', "%3F").replaceAll('=', "%3D").replaceAll('+', "%2B").replaceAll('#', "%23").replaceAll('/', "%2F").replaceAll('\\', "%5C").replaceAll('\'', "%27").replaceAll('\"', "%22").replaceAll('<', "%3C").replaceAll('>', "%3E").replaceAll('(', "%28").replaceAll(')', "%29").replaceAll('[', "%5B").replaceAll(']', "%5D").replaceAll('{', "%7B").replaceAll('}', "%7D").replaceAll('^', "%5E").replaceAll('$', "%24").replaceAll('!', "%21").replaceAll('*', "%2A").replaceAll('|', "%7C").replaceAll('~', "%7E").replaceAll('`', "%60");
}
