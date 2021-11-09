const fs = require('fs')

function tag(json) {
  json[`tag:${type}`];
  return json;
}
function block(id, name, number) {
  let json = {
    format_version: '1.17',
    'minecraft:block': {
      description: {
        identifier: `${id}:${name}_${number}`,
        register_to_creative_menu: true,
        properties: { 'aga:stuff': ['none', 'chisel'] }
      },
      components: {
        'minecraft:destroy_time': 5,
        'minecraft:loot': 'loot_tables/empty.json',
        'minecraft:on_player_placing': { event: 'place' },
        'minecraft:on_player_destroyed': {
          condition: "(query.equipped_item_any_tag('slot.weapon.mainhand', 'aga:chisel')",
          event: 'fill',
          target: 'self'
        },
        'minecraft:creative_category': {
          group: 'ItemGroup.name.Construction',
          category: 'Construction'
        }
      },
      events: {
        drop_loot: { spawn_loot: { table: 'loot' } },
        place: { set_block_property: { 'aga:stuff': 'none' } },
        fill: {
          set_block_property: {
            'aga:stuff': "(query.equipped_item_any_tag('slot.weapon.mainhand')"
          }
        },
        block_chisel: {set_block: { block_type: `${id}:${name}_${number+1}` } }
      },
      permutations: [
        {
          condition: "(query.block_property('aga:stuff') == 'chisel')",
          components: {
            'minecraft:ticking': { looping: false, range: [0, 0], on_tick: { event: 'block_chisel', target: 'self' } }
          }
        },
        {
          condition: "(query.block_property('aga:stuff') != 'chisel')",
          components: {
            'minecraft:ticking': { looping: false, range: [0, 0], on_tick: { event: 'drop_loot', target: 'self' } }
          }
        }
      ]
    }
  };
  return json
}
function carpetas(name, is_stone, array = false, n = 0) {
  if (fs.existsSync(`../../BP`) == false)
  fs.mkdir(`../../BP`, (error) => {
    if (error) console.log(`Error: ${error}`);
  });
  if (array!=false) {
    if (fs.existsSync(`../recipes/${array}/${name}/uncrafting`) == false)
      fs.mkdir(`../recipes/${array}/${name}/uncrafting`, (error) => {
        if (error) console.log(`Error: ${error}`);
      });
    if (fs.existsSync(`../recipes/${array}/${name}/crafting`) == false)
      fs.mkdir(`../recipes/${array}/${name}/crafting`, (error) => {
        if (error) console.log(`Error: ${error}`);
      });
  }
  return 'Carpetas generadas exitosamente';
}

module.exports = { tag, block, carpetas };