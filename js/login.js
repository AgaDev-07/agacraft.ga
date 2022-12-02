const $ = e => document.querySelector(e);
const $$ = e => document.querySelectorAll(e);
window.addEventListener('load', () =>
  $('button#signout').addEventListener('click', () => {
    localStorage.clear();
    location.reload();
  })
);

const params = location.search
  .substring(1)
  .split('&')
  .reduce((params, param) => {
    const [key, value] = param.split('=');
    params[key] = value;
    return params;
  }, {});

function pass() {
  if ($('#pass').type === 'password') {
    $('#pass').type = 'text';
    $('#btnpass').value = 'o';
  } else {
    $('#pass').type = 'password';
    $('#btnpass').value = '-';
  }
}
window.onlogin = () => {
  if (localStorage.length)
    login(localStorage.getItem('user'), localStorage.getItem('password'));
};
function download() {
  let user = $('#user').value;
  let password = $('#pass').value;
  if (user === '') $('#no').innerText = 'Ingrese un usuario';
  else if (password === '') $('#no').innerText = 'Ingrese una contraseña';
  else login(user, password);
}
function login(user, password) {
  fetch(
    `https://agaapi.webredirect.org:3000${window.pathname}?user=${stringToUrl(
      user
    )}&password=${stringToUrl(password)}`
  )
    .then(res => res.text())
    .then(JSON.parse)
    .then(data => {
      if (data.access) {
        if (localStorage.getItem('user') && localStorage.getItem('password'))
          $('button#signout').style.display = 'block';
        $('.contenedor').style.display = '';
        $('#login').style.display = 'none';
        $('#login-download').id = 'download';
        $('#download').href = data.url;
        localStorage.setItem('password', password);
        localStorage.setItem('user', user);
      } else $('#no').innerText = 'Usuario o contraseña incorrecta';
    })
    .catch(console.error);
}
function stringToUrl(str) {
  return (str || 'null')
    .replaceAll(' ', '%20')
    .replaceAll('!', '%21')
    .replaceAll('"', '%22')
    .replaceAll('#', '%23')
    .replaceAll('$', '%24')

    .replaceAll('&', '%26')
    .replaceAll("'", '%27')
    .replaceAll('(', '%28')
    .replaceAll(')', '%29')
    .replaceAll('*', '%2A')
    .replaceAll('+', '%2B')

    .replaceAll('/', '%2F')

    .replaceAll('<', '%3C')
    .replaceAll('=', '%3D')
    .replaceAll('>', '%3E')
    .replaceAll('?', '%3F')

    .replaceAll('[', '%5B')
    .replaceAll('\\', '%5C')
    .replaceAll(']', '%5D')
    .replaceAll('^', '%5E')

    .replaceAll('`', '%60')

    .replaceAll('{', '%7B')
    .replaceAll('|', '%7C')
    .replaceAll('}', '%7D')
    .replaceAll('~', '%7E');
}
