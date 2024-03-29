function request(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(r => resolve(r))
      .catch(e => reject(e));
  });
}

async function loadApi(query) {
  let { type, content, search, version, index, format } = query;
  const data = await request(
    'https://agaapi.onrender.com/api.agacraft'
  );
  let text = (await data.text()).trim();
  let json = JSON.parse(text);
  json = json.filter(addon => addon.publish !== false);
  if (index) json = json.filter((_, i) => i == index);
  else if (type) {
    json = json.filter(addon => addon.type.includes(type));
    if (content) {
      json = json.filter(
        addon =>
          addon.name.toLowerCase() == content.toLowerCase().replaceAll('-', ' ')
      );
      if (version) {
        json.forEach(addon => {
          addon.url = addon.versions
            ? addon.versions[version] ?? addon.url
            : addon.url;
          return addon;
        });
      }
    }
  } else if (search) {
    json = json.filter(addon =>
      addon.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  json.forEach(addon => {
    addon.description ||= 'Un Addon de AdrianCraft';
    addon.icon ||= '/src/img/proximamente.png';
    if (addon.versions && addon.versions[addon['last-version']])
      addon.url = addon.versions[addon['last-version']];
  });
  if (format === 'aga')
    json = json.map(
      ({ name, 'last-version': version, update = ['Nueva version'] }) => ({
        name,
        version,
        update,
      })
    );
  else if (format === 'show')
    json = json.forEach(({ name, icon, url }) => ({ name, icon, url }));
  return json;
}
