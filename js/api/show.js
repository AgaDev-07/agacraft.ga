function urlToString(url) {
  return url ? url
    .replaceAll('%20', ' ')
    .replaceAll('%21', '!')
    .replaceAll('%22', '"')
    .replaceAll('%23', '#')
    .replaceAll('%24', '$')

    .replaceAll('%26', '&')
    .replaceAll('%27', "'")
    .replaceAll('%28', '(')
    .replaceAll('%29', ')')
    .replaceAll('%2A', '*')
    .replaceAll('%2B', '+')

    .replaceAll('%2F', '/')

    .replaceAll('%3C', '<')
    .replaceAll('%3D', '=')
    .replaceAll('%3E', '>')
    .replaceAll('%3F', '?')

    .replaceAll('%5B', '[')
    .replaceAll('%5C', '\\')
    .replaceAll('%5D', ']')
    .replaceAll('%5E', '^')

    .replaceAll('%60', '`')

    .replaceAll('%7B', '{')
    .replaceAll('%7C', '|')
    .replaceAll('%7D', '}')
    .replaceAll('%7E', '~'):url;
}
getApi().then(json => {
  json = json.filter(addon => addon !== false)
  const $ = q => document.querySelector(q);
  if (window.type)
    json = json.filter(addon => addon.type.includes(window.type));
  json = json.map(addon => {
    addon.URL = '';
    if (addon.type.includes('JunMC13'))
      addon.URL += '/JunMC13';
    else if (addon.type.includes('textura'))
      addon.URL += '/texturas';
    else if (addon.type.includes('addon'))
      addon.URL += '/addons';

    addon.URL += `?content=${addon.name.replaceAll(' ', '-')}`;
    addon.icon ||= '/src/img/proximamente.png';
    return addon;
  });

  let search = window.buscar = getSearch();
  search.search = urlToString(search.search)
  if (search.private === 'true') {
    json = json.filter(addon => addon.private);
  }
  if (search.private === 'false') {
    json = json.filter(addon => !addon.private);
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

      if (!content.url) {
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
window.__onload__ ||= []

window.__onload__.push(()=>{
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
    const search = document.querySelector('input#search').value;
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
window.addEventListener("load", ()=>{window.__onload__.forEach(f=>f())});
