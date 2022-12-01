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
</style>`;

const domain = 'https://agacraft.ga';

function loadScript(url){
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

window.onload = async function () {
  await loadScript(`${domain}/js/api/agaapi.js`);
  let api = (await loadApi({type:'JunSP13'}))
    .filter(data => !(data.publish === false || data['jun-publish'] === false))
    .map(addon => {
      addon.URL = '';

      addon.URL += `${domain}/JunSP13?content=${addon.name.replaceAll(
        ' ',
        '-'
      )}`;
      addon.icon ||= '/src/img/proximamente.png';
      addon.mode = addon.url ? 'Publico' : 'Privado';
      addon.icon = domain + addon.icon;
      return addon;
    });
  if (
    location.pathname === '/' ||
    location.pathname === '/F:/JunSP13/index.html'
  )
    api = [api[0]].map(
      data => `<div class="col-lg-4 izquierda">
									  <center><img src="${data.icon}" class="espacio-img" width="128px"></center>
									</div><div class="col-lg-8 derecha">
									  <center><h4 class="text-ee"><b>${data.name} (${data.mode})</b></h4>
                                      <p><b>Creador:</b><span class="text-warning2"> AdrianCraft (Aga)</span></p>
                                      <p><b>Descripcion:</b><span class="text-warning2"> ${data.description}</span></p>
									  <a href="${data.URL}" target="_blank"><button class="btn btn-outline-primary btn-block"><i class="fa fa-eye"></i> Ver ${data.name}</button></a></center>
								    </div>`
    );
  else
    api = api.map(
      data => `
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
    );
  document.querySelector('#data-aga').innerHTML += api.join('');
  return api;
};
