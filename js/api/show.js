getApi().then(json => {
  const $ = q => document.querySelector(q);
  if (window.type)
    json = json.filter(addon => addon.type.includes(window.type));
  json = json.map(addon => {
    addon.URL = '';
    if (addon.type.includes('JunMC13') && window.type !== 'JunMC13')
      addon.URL += '/JunMC13';
    else if (addon.type.includes('textura') && window.type !== 'textura')
      addon.URL += '/texturas';
    else if (addon.type.includes('addon') && window.type !== 'addon')
      addon.URL += '/addons';

    addon.URL += `?content=${addon.name.replaceAll(' ', '-')}`;
    addon.icon ||= '/src/img/proximamente.png';
    return addon;
  });

  let search = getSearch();
  if (search.private === 'true') {
    console.log('private');
    json = json.filter(addon => addon.private);
  }
  if (search.content) {
    window.pathname = `/${type}/${search.content
      .replaceAll(' ', '-')
      .replace(/[-]jun/gi, '')
      .split('-')
      .map(str => {
        return str[0].toUpperCase() + str.slice(1);
      })
      .join('-')}`;
    console.log('content');
    let content = json
      .filter(
        addon =>
          addon.name.toLowerCase() ===
          search.content.toLowerCase().replaceAll('-', ' ')
      )
      .map(addon => {
        addon.URL = addon.url;
        return addon;
      })[0];
    if (content) {
      content.description ||= 'Un Addon de AdrianCraft';
      content.images ||= [];
      $('title').innerHTML = `${content.name}(${type}) | AdrianCraft`;
      $('h4.titulo').innerHTML = content.name;
      $(
        'div.texto-box'
      ).innerHTML = `<h3 class="texto">${content.description}</h3>`;
      $(
        'section>div.galeria-port'
      ).innerHTML = `<div v-for="image in images" class="imagen-craft"><img :src="image" alt=""></div>`;

      if (type === 'JunMC13') {
        console.log('a');
        $('#login').innerHTML = `
          <label>Usuario</label><input type="text" name="Usuario" id="user"></br>
          <label>Contraseña</label><input type="password" name="Contraseña" id="pass">
          <input type="button" class="btnm" id="btnpass" value="-" onclick="pass()">
          <input type="button" class="btn" id="btn" value="Verificar" onclick="download('${type}', '${content.name}')">
          <p id="no"></p>`;
        $('div.contenedor').style.display = 'none';
      }
      new Vue({
        el: 'section>div.galeria-port',
        data: content,
      });
      json = [content];
    }
  } else if (search.search) {
    console.log('search');
    json = json.filter(addon =>
      addon.name.toLowerCase().includes(search.search.toLowerCase())
    );
  }
  if (json.length === 0)
    $('.galeria-port').innerHTML = `<h1>No hay ${
      window.type || 'contenido'
    } que coincida con ${search.search} :(</h1>`;

  new Vue({
    el: 'div.contenedor>div.galeria-port',
    data: { json },
  });
});

function getSearch() {
  return Object.fromEntries(
    location.search
      .slice(1)
      .split('&')
      .filter(x => x)
      .map(res => res.split('='))
      .map(([key, value]) => [key, value.replaceAll('-', ' ')])
  );
}

window.addEventListener('load', () => {
  new Vue({
    el: 'nav',
    data: vue,
  });
  new Vue({
    el: '.contenedor-footer',
    data: vue,
  });
  document.querySelector('input#search').value = getSearch().search || '';
  let e = e => {
    const search = document.querySelector('input#search').value.toLowerCase();
    const Search = getSearch();
    Search.search = search;
    if (Search.content !== undefined) delete Search.content;
    if (search === '') delete Search.search;
    location.href = `${
      window.is404 ? '/' : location.href.split('?')[0]
    }?${Object.keys(Search)
      .map(key => `${key}=${Search[key]}`)
      .join('&')}`;
  };
  document.addEventListener('keydown', tecla =>
    tecla.keyCode == 13 ? e() : ''
  );
  document.querySelector('button#search').addEventListener('click', e);
});
