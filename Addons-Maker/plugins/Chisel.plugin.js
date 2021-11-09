// Un comentario :D
const fs = require('fs'),
  addon = require(`../data/addon.json`).name;
function BP(type) {
  if (type == 'block') return true;
  else if (type == '') return true;
  else return false;
}
function RP(type) {
  return false;
}
function BlockB(json) {
  console.log(json);
  const C = require('../data/plugins.json').Chisel.blocks.end;
  var n = 1;
  let name = (reload = json.description.identifier);
  let drop = json.events.drop_loot.spawn_loot.table;

  while (n <= C) {
    json.description.identifier = `${name}_${n}`;
    json.description.properties = { 'aga:stuff': ['none', 'chisel'] };

    json.components['minecraft:on_player_placing'] = { event: 'place' };
    json.components['minecraft:on_interact'] = {
      event: 'fill',
      condition: "(query.get_equipped_item_name('main_hand') == 'chisel')"
    };
    json.components['minecraft:display_name'] = name;
    json.permutations = [
      {
        condition: "(query.block_property('aga:stuff') == 'chisel')",
        components: { 'minecraft:ticking': { looping: false, range: [0, 0], on_tick: { event: 'block_chisel', target: 'self' } } }
      }
    ];
    if (n != C)
      json.events = {
        drop_loot: drop,
        place: { set_block_property: { 'aga:stuff': 'none' } },
        fill: { set_block_property: { 'aga:stuff': "query.get_equipped_item_name('main_hand')" } },
        block_chisel: { set_block: { block_type: `${name}_${n + 1}` } }
      };
    else
      json.events = {
        drop_loot: drop,
        place: { set_block_property: { 'aga:stuff': 'none' } },
        fill: { set_block_property: { 'aga:stuff': "query.get_equipped_item_name('main_hand')" } },
        block_chisel: { set_block: { block_type: `${name}_${1}` } }
      };

    fs.writeFile(`../../${addon}_BP/blocks/aa/${n}.json`, JSON.stringify(json), (error) => {
      if (error) {
        console.log(error);
      }
    });
    n++;

    console.log(json);
    name = reload;
  }
}
function Add(json) {
  json.Chisel = {
    blocks: {
      origen: '',
      data: false,
      end: 2,
      tnt: false,
      ice: false,
      array: false,
      var: {
        on: false,
        end: 2,
        next: '',
        var: {
          name: '',
          ant: '',
          sig: ''
        }
      }
    }
  };

  return JSON.stringify(json);
}
function MoreAdd(json) {
  if (json.Translate != undefined) {
    var T = json.Translate,
      n = 0,
      i = 0;
    while (T[n] != undefined) {
      if (T[n].blocks.chisel == undefined)
        while (T[n].lang[i] != undefined) {
          var t = T[n].lang[i].split('_')[0];
          if (t == 'es') T[n].blocks.chisel = 'Bloque de :name: cincelado';
          else if (t == 'en') T[n].blocks.chisel = 'Chiseled Block of :name:';
          else T[n].blocks.chisel = 'Chisel :name:';
          i++;
          return JSON.stringify(json);
        }
      i = 0;
      n++;
    }
  }
  return false;
}
function Stop(type) {
  if (type == 'block') return true;
  else return false;
}
module.exports = { BlockB, BP, RP, Add, MoreAdd, Stop };
