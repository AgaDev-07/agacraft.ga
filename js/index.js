import loadInterface from './load/interface.js'
import loadApi from './load/api.js'
import getSearch from './lib/search.js'
import {urlToString} from './lib/url.js'

import { $ } from 'https://adriancraft07.github.io/js-lib/$.js'
import { createElementDom } from 'https://adriancraft07.github.io/js-lib/dom.js'

const aTag = /#([^*]+)\*([^#]+)#/g;
function getVersion(addon, version){
  if(!version && addon['last-version']) return addon['last-version'];
  if(!addon.versions || !addon.versions[version]) return addon['last-version']||'1.0.0'
  return version;
}

function load_data(){
  const apiQuery = {};

  const search = getSearch();
  search.search = urlToString(search.search);

  if (globalThis.type) {
    apiQuery.type = globalThis.type
  }
  if (search.content) {
    apiQuery.content = search.content.replaceAll(' ', '-');
  }
  else if(search.search){
    apiQuery.search = search.search;
  }
  if(search.version){
    apiQuery.version = search.version;
  }
  const type = apiQuery.type || 'addons';

  let json = loadApi(apiQuery);
  json = json.map(addon => {
    addon.URL = '';
    if (addon.type.includes('JunSP13')) addon.URL += '/JunSP13';
    else if (addon.type.includes('textura')) addon.URL += '/texturas';
    else if (addon.type.includes('addon')) addon.URL += '/addons';

    addon.URL += `?content=${addon.name.replaceAll(' ', '-')}`;
    return addon;
  });
  if (search.content) {
    window.pathname = `/${type}/${search.content
      .replaceAll(' ', '-')
      .replace(/[-]jun/gi, '')
      .split('-')
      .map(str => str[0].toUpperCase() + str.slice(1))
      .join('-')}`;
    window.onlogin && window.onlogin()
    let content = json.map(addon => {
      addon.URL = addon.versions[getVersion(addon, search.version)] || addon.url;
      return addon;
    })[0];
    if (content) {
      content.description = content.description.replace(
        aTag,
        '<a href="$2">$1</a>'
      );
      content.images ||= [];
      $('title').text(`${content.name}(${type}) | AdrianCraft`);
      $('h4.titulo').html(`${content.name} v${getVersion(content, search.version)}`);
      $(
        'div.texto-box'
      ).html(`<h3 class="texto">${content.description}</h3>`);
      const $images = $('section>div.galeria-port');
      content.images.forEach((image)=>{
        const div = createElementDom('div', { class: 'imagen-port' },
          createElementDom('img', { src: image }),
        );
        $images.append(div);
      })

      if (!content.url) {
        $('#login').html(`
          <label>Usuario</label><input type="text" name="Usuario" id="user"></br>
          <label>Contraseña</label><input type="password" name="Contraseña" id="pass">
          <input type="button" class="btnm" id="btnpass" value="-" onclick="pass()">
          <input type="button" class="btn" id="btn" value="Verificar" onclick="download('${type}', '${content.name}')">
          <p id="no"></p>`);
        $('div.contenedor').css('display', 'none');
      }
      json = [content];
    }
  }
  if (json.length === 0)
    $('.galeria-port').html(`<h1>No hay ${
      window.type || 'contenido'
    } que coincida con la busqueda :(</h1>`);

  const $galeria = $('div.contenedor div.galeria-port');
  json.forEach(addon => {
    const div = createElementDom('div', { class: 'imagen-port' }, 
      createElementDom('img', { src: addon.icon}),
      createElementDom('a', { id:'download', href:addon.URL },
        createElementDom('div', {class:'hover-galeria'}, 
          createElementDom('img', { src:'/src/img/click.png' }, 
            createElementDom('p', {class:'texto-galeria'}, `${addon.name} (${addon.url ? 'Publico' : 'Privado'})` )
          ),
        )
      )
    );
    $galeria.append(div);
  })
}

loadInterface();
load_data();
$('button#search').click(() => {
  const search = document.querySelector('input#search').value;
  const query = '?search=' + search.replaceAll(' ', '-');
  location.href = location.origin + location.pathname + query;
});
$("div#spinner").css({display:'none'})
