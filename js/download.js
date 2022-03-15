document.addEventListener('keydown', function(tecla){
  if(tecla.keyCode == 13){
    try {
      download()
    } catch (error) {
      window.location.href = document.links.download.href
    }
  }
});
