const download = () => {
  const $ = e => document.querySelector(e);
  try {
    fetch("https://aga-db.herokuapp.com/Json", {
      method: "POST",
      body: JSON.stringify({
        user: $("#user").value,
        password: $("#password").value
      })
    }).then(res => res.json()).then(data => {
      console.log(data);
      if (data.access) {
        $('.contenedor').style.display = '';
        $('#login-download').id = 'download';
        $('#download').href = data.url;
      }
    }).catch(console.error)
  } catch (e) {
    $('p').innerText += e
  }
}
