let $ = e => document.querySelector(e)
function loadScript(src) {
  return new Promise((res, rej) => {
    let script = document.createElement('script');
    script.src = src;
    script.onload = res;
    script.onerror = rej;
    document.head.appendChild(script)
  })
}
function loadFile(url) {
  const file = new XMLHttpRequest();
  file.open('GET', url, false);
  file.send();
  return file.responseText;
}
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
  let interval;
  let data = { stop: () => clearInterval(interval) }
  interval = setInterval(() => {
    callback(data)
  }, 100);
}

loadScript('https://adriancraft07.github.io/js/api/data.js').then(async res => {
  const api = (await getApi()).filter(v=>v.type.includes('JunMC13')).map(addon => {
    addon.URL = '';

    addon.URL += `https://adriancraft07.github.io/JunMC13?content=${addon.name.replaceAll(' ', '-')}`;
    addon.icon ||= 'https://adriancraft07.github.io/src/img/proximamente.png';
    addon.mode = addon.url ? 'Publico' : 'Privado'
    return addon
  }).map(data => {
    if(data.publish === false)return '';
    return `
      <div class="card shadow mb-4 card-aga">
          <div class="card-body">
              <div class="col-lg-4 izquierda">
                  <center>
                      <img src="${data.icon}" class="espacio-img" width="128px">
                  </center>
              </div>
              <div class="col-lg-8 derecha">
                  <center><h6 class="m-0 font-weight-bold text-primary">${data.name} (${data.mode})</h6><br>
                      <p><b>Creador:</b><span class="text-warning2"> AdrianCraft (Aga)</span></p>
                      <a href="${data.URL}" target="_blank">
                          <button class="btn btn-outline-primary btn-block">Descargar ${data.name}</button>
                      </a>
                  </center>
              </div>
          </div>
      </div>`
  }).join('')
  load(interval => {
    if (($('#data-aga').innerHTML || '').endsWith(api)) interval.stop()
    else {
      $('#data-aga').innerHTML += api
    }
  })
})
console.log("Aga-Api connected")
