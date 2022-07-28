let download = () => {
  const user = document.getElementById('user').value;
  const contra = cifrar(counts[cifrar(user, 7)] || 'a', 99);
  if (contra === document.getElementById('pass').value) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('descargar').style.display = '';
    document.getElementById('download').href = cifrar(getLink(), 5);
    download = undefined;
  } else document.getElementById('no').innerHTML = `usuario o contraseña incorrecta`;
};
