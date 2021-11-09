//Librerias
const fs = require('fs');
const plugins = require('../../data/plugins.json');
function Plugin(carp = null, type, json, ext = 'Translate') {
  if (require(`../../data/addon.json`).pluginsOn) {
    fs.readdir('../../plugins', (err, files) => {
      if (err) return console.error(err);
      files.forEach((file) => {
        if (!file.endsWith('.plugin.js')) return;
        let PluginName = file.split('.')[0];
        let plugin = require('../../plugins/' + file);
        Add(file);

        if (carp == 'BP')
          if (plugin.BP('')) {
            if (type == 'item')
              if (plugin.BP('item')) {
                plugin.ItemB(json);

                this.stop = plugin.Stop(type);
                console.log(this.stop);
                if (carp == null) return this.stop;
              }
            if (type == 'block')
              if (plugin.BP('block')) {
                plugin.BlockB(json);

                this.stop = plugin.Stop(type);
                console.log(this.stop);
              }
            if (type == 'entity')
              if (plugin.BP('entity')) {
                plugin.EntityB(json);

                this.stop = plugin.Stop(type);
                console.log(this.stop);
              }
          }

        if (carp == 'RP')
          if (plugin.RP('')) {
            if (type == 'item') if (plugin.RP('item')) plugin.ItemR();
            if (type == 'block') if (plugin.RP('block')) plugin.BlockR();
            if (type == 'entity') if (plugin.RP('entity')) plugin.EntityR();
            if (type == 'translate') if (plugin.RP('translate')) plugin.TranslateR(json, ext);
          }
      });
    });
  }
}
function Add(file) {
  if (plugins[file.split('.')[0]] != undefined) {
    if (require('../../plugins/' + file).MoreAdd(plugins) == false) return;
    else
      fs.writeFile('../../data/plugins.json', require('../../plugins/' + file).MoreAdd(plugins), (error) => {
        if (error) console.error(error);
        else return
      });
  }

  fs.writeFile('../../data/plugins.json', require('../../plugins/' + file).Add(plugins), (error) => {
    if (error) console.error(error);
  });
  return file;
}
Plugin();

Plugin('RP', 'translate', 'item.${name}.name', 'blocks/chisel');/*
Plugin('RP', 'translate', 'tile.${name}.name');
Plugin('RP', 'translate', 'entity.${name}.name');
Plugin('RP', 'translate', 'item.spawn_egg.entity.${name}.name');
*/
module.exports = { Plugin };
