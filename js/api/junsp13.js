document.querySelector('head').innerHTML += `<style>
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

console.log("Aga-Api connected")
window.onload = async function(){
  let api = (await fetch('https://aga-db.herokuapp.com/api?type=JunSP13').then(r=>r.json())).map(addon => {
    addon.URL = '';

    addon.URL += `https://agacraft.ga/JunSP13?content=${addon.name.replaceAll(' ', '-')}`;
    addon.icon ||= 'https://adriancraft07.github.io/src/img/proximamente.png';
    addon.mode = addon.url ? 'Publico' : 'Privado'
    return addon
  }).filter(r=>!(data.publish === false || data['jun-publish'] === false));
  if(location.pathname==='/' || location.pathname==='/F:/JunSP13/index.html')api.length = 1;
  document.querySelector('#data-aga').innerHTML += api.map(data => `
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
                      <p><b>Descripcion:</b><span class="text-warning2"> ${data.description} </span></p>
                      <a href="${data.URL}" target="_blank">
                          <button class="btn btn-outline-primary btn-block"><i class="fa fa-eye" aria-hidden="true"></i> ver ${data.name}</button>
                      </a>
                  </center>
              </div>
          </div>
      </div>`
  ).join('');
  return api;
}
