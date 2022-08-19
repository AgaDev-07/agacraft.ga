const download = () => {
  console.log(location.pathname)
  const $ = e => document.querySelector(e);
  try {
    fetch("https://aga-db.herokuapp.com/(page)/(addon)?passsword=(password)&user=(user)", { 
      method: "POST",
    }).then(res => res.json()).then(data => {
      if (data.access) {const $ = e=>document.querySelector(e)
        $('.contenedor').style.display = '';
        $('.section-1').style.display = 'none';
        $('#login-download').id = 'download';
        $('#download').href = data.url;
      }
    }).catch(console.error)
  } catch (e) {
    $('p').innerText += e
  }
}
