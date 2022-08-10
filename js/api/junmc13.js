window.$ = e=>document.querySelector(e)
function loadScript(src){
  return new Promise((res, rej)=>{
    let script = document.createElement('script');
    script.src = src;
    script.onload = res;
    script.onerror = rej;
    document.head.appendChild(script)
  })
}
function loadFile(url){
  const file = XMLHTTPRequest();
  file.open('GET', url, false);
  file.send();
  return file.responseText;
}

loadScript('https://adriancraft07.github.io/js/api/data.js')
$('head').innerHTML += `<style>
.card-aga{
  width: 48%;
  margin: 10px;
}
@media screen and (max-width:1250px){
  .card-aga{
    width: 47%;
  }
}
@media screen and (max-width:1160px){
  .card-aga{
    width: 100%;
  }
}
</style>`

function load(callback) {
  let interval = setInterval(() => {
    callback()
    clearInterval(interval);
  }, 1);
}
load(()=>{
$('#data-aga').innerHTML += ` 
    <div class="card shadow mb-4 card-aga">
        <div class="card-body">
            <div class="col-lg-4 izquierda">
                <center>
                    <img src="https://adriancraft07.github.io/img/JunMC13/ChoesinCraft/icono.png" class="espacio-img" width="128px">
                </center>
            </div>
            <div class="col-lg-8 derecha">
                <center><h6 class="m-0 font-weight-bold text-primary">NOMBRE DEL ADDON (CREADO POR AGA)</h6><br>
                    <p><b>Creador:</b><span class="text-warning2"> AdrianCraft (Aga)</span></p>
                    <a href="LINK DE LA PÁGINA DE AGA" target="_blank">
                        <button class="btn btn-outline-primary btn-block">Descargar NOMBRE DEL ADDON</button>
                    </a>
                </center>
            </div>
        </div>
    </div>`
})
