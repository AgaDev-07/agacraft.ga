import api from '/json/api.json' assert {type: 'json'};

/**
 * @param {({
 *  type: 'JunSP13' | 'textura' | 'addon';
 *  content: string;
 *  version: string;
 * } | {
 *  type?:'JunSP13' | 'textura' | 'addon';
 * }) & {
 *  index?: number;
 *  search?: string;
 *  format?: 'aga' | 'show';
 * }} query
 */
export default function loadApi(query) {
  let { type, content, search, version, index, format } = query;
  let json = api
  json = json.filter(addon => addon.publish !== false);
  if (index) json = json.filter((_, i) => i == index);
  if (type) {
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
  }if (search) {
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
};