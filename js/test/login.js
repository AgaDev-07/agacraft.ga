const download = () => {
  const $ = e => document.querySelector(e);
  try {
    fetch(`https://aga-db.herokuapp.com/${location.pathname}?passsword=${$('#password').value}&user=${$('#user').value}`, { 
      method: "POST",
    }).then(res => res.json()).then(data => {
      if (data.access) {const $ = e=>document.querySelector(e)
        $('.contenedor').style.display = '';
        $('.section-1').style.display = 'none';
        $('#login-download').id = 'download';
        $('#download').href = data.url;
      }else $('p').innerText= 'usuario o contraseña incorrecta'
    }).catch(console.error)
  } catch (e) {
    $('p').innerText += e
  }
}
