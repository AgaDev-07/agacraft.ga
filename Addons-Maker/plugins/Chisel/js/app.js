const fs = require('fs');
const config = require('../config/config.json');
var sound = config.sonido;
var blocks = config.bloque;
var pickaxes = config.pico;
var langs = config.lang;

const sonidos = require(sound);
const blockc = require(blocks);
const pickaxe = require(pickaxes);
const lang = require(langs);
var es = lang.español;
var en = lang.ingles;
var esname = blockc.traduccion.es;
var enname = blockc.traduccion.en;

//Esto se configura en el block.json
var name = blockc.name; //Nombre del grupo de bloques
var origen = blockc.origen; //ID de el bloque del que proviene
var type = blockc.type; //metal, stone
var picable = blockc.picable; //stone, iron, diamond
var fin = blockc.ultimo; //La cantidad de bloques del grupo
var datab = blockc.data.usar;
var data = blockc.data.id;
var array = blockc.array.name;
fin++;

var bar = '_';
var num = 1;
var subid = name + bar;
var numnext = num + 1;
var id = subid + num;
var next = subid + numnext;
var listo = 0;
var sonido;
var destroy;
var carp = 0;
console.log(fin);

carpetas();
function carpetas() {
  function reci() {
    if (blockc.array.usar) {
      if (fs.existsSync(`../recipes/${array}/${name}/uncrafting`)) {
        console.log('La carpeta Recipes/Uncrafting fue creado anteriormente');
        carp++;
        start();
      } else {
        fs.mkdir(`../recipes/${array}/${name}/uncrafting`, (error) => {
          if (error) {
            console.log(`Error: ${error}`);
          } else {
            console.log(`Carpeta Recipes/Uncraftin generado correctamente`);
            carp++;
            start();
          }
        });
      }
      if (fs.existsSync(`../recipes/${array}/${name}/crafting`)) {
        console.log('La carpeta Recipes/Craftin fue creado anteriormente');
        carp++;
        start();
      } else {
        fs.mkdir(`../recipes/${array}/${name}/crafting`, (error) => {
          if (error) {
            console.log(`Error: ${error}`);
          } else {
            console.log(`Carpeta Recipes/Craftin generado correctamente`);
            carp++;
            start();
          }
        });
      }
    } else {
      if (fs.existsSync(`../recipes/${name}/uncrafting`)) {
        console.log('La carpeta Recipes/Uncrafting fue creado anteriormente');
        carp++;
        start();
      } else {
        fs.mkdir(`../recipes/${name}/uncrafting`, (error) => {
          if (error) {
            console.log(`Error: ${error}`);
          } else {
            console.log(`Carpeta Recipes/Uncraftin generado correctamente`);
            carp++;
            start();
          }
        });
      }
      if (fs.existsSync(`../recipes/${name}/crafting`)) {
        console.log('La carpeta Recipes/Craftin fue creado anteriormente');
        carp++;
        start();
      } else {
        fs.mkdir(`../recipes/${name}/crafting`, (error) => {
          if (error) {
            console.log(`Error: ${error}`);
          } else {
            console.log(`Carpeta Recipes/Craftin generado correctamente`);
            carp++;
            start();
          }
        });
      }
    }
  }
  console.log('carpetas');
  if (type == 'metal' || type == 'stone') {
    if (blockc.array.usar == true) {
      if (fs.existsSync(`../loot_tables/blocks/${array}`)) {
        console.log('La carpeta Loot fue creado anteriormente');
        carp++;
        start();
      } else {
        fs.mkdir(`../loot_tables/blocks/${array}`, (error) => {
          if (error) {
            console.log(`Error: ${error}`);
          } else {
            console.log(`Carpeta Loot generado correctamente`);
            carp++;
            start();
          }
        });
      }
      if (fs.existsSync(`../loot_tables/blocks/${array}/${name}`)) {
        console.log('La carpeta Loot fue creado anteriormente');
        carp++;
        start();
      } else {
        fs.mkdir(`../loot_tables/blocks/${array}/${name}`, (error) => {
          if (error) {
            console.log(`Error: ${error}`);
          } else {
            console.log(`Carpeta Loot generado correctamente`);
            carp++;
            start();
          }
        });
      }
    } else {
      if (fs.existsSync(`../loot_tables/blocks/${name}`)) {
        console.log('La carpeta Loot fue creado anteriormente');
        carp++;
        start();
      } else {
        fs.mkdir(`../loot_tables/blocks/${name}`, (error) => {
          if (error) {
            console.log(`Error: ${error}`);
          } else {
            console.log(`Carpeta Loot generado correctamente`);
            carp++;
            start();
          }
        });
      }
    }
  }
  if (blockc.array.usar == true) {
    if (fs.existsSync(`../blocks/${array}`)) {
      console.log('La carpeta Block fue creado anteriormente');
      carp++;
      start();
    } else {
      fs.mkdir(`../blocks/${array}`, (error) => {
        if (error) {
          console.log(`Error: ${error}`);
        } else {
          console.log(`Carpeta Block generado correctamente`);
          carp++;
          start();
        }
      });
    }
    if (fs.existsSync(`../blocks/${array}/${name}`)) {
      console.log('La carpeta Block fue creado anteriormente');
      carp++;
      start();
    } else {
      fs.mkdir(`../blocks/${array}/${name}`, (error) => {
        if (error) {
          console.log(`Error: ${error}`);
        } else {
          console.log(`Carpeta Block generado correctamente`);
          carp++;
          start();
        }
      });
    }
  } else {
    if (fs.existsSync(`../blocks/${name}`)) {
      console.log('La carpeta Block fue creado anteriormente');
      carp++;
      start();
    } else {
      fs.mkdir(`../blocks/${name}`, (error) => {
        if (error) {
          console.log(`Error: ${error}`);
        } else {
          console.log(`Carpeta Block generado correctamente`);
          carp++;
          start();
        }
      });
    }
  }
  if (blockc.array.usar == true) {
    if (fs.existsSync(`../recipes/${array}`)) {
      console.log('La carpeta Recipes fue creado anteriormente');
      carp++;
      start();
    } else {
      fs.mkdir(`../recipes/${array}`, (error) => {
        if (error) {
          console.log(`Error: ${error}`);
        } else {
          console.log(`Carpeta Recipes generado correctamente`);
          carp++;
        }
      });
    }
    if (fs.existsSync(`../recipes/${array}/${name}`)) {
      console.log('La carpeta Recipes fue creado anteriormente');
      carp++;
      start();
      reci();
    } else {
      fs.mkdir(`../recipes/${array}/${name}`, (error) => {
        if (error) {
          console.log(`Error: ${error}`);
        } else {
          console.log(`Carpeta Recipes generado correctamente`);
          carp++;
          reci();
        }
      });
    }
  } else {
    if (fs.existsSync(`../recipes/${name}`)) {
      console.log('La carpeta Recipes fue creado anteriormente');
      carp++;
      start();
      reci();
    } else {
      fs.mkdir(`../recipes/${name}`, (error) => {
        if (error) {
          console.log(`Error: ${error}`);
        } else {
          console.log(`Carpeta Recipes generado correctamente`);
          carp++;
          reci();
        }
      });
    }
  }
  console.log(carp);
}
if (type == 'metal') {
  sonido = sonidos.metal;
} else {
  sonido = sonidos.stone;
}

if (picable == 'wood') {
  destroy = pickaxe.wood_pickaxe;
} else if (picable == 'stone') {
  destroy = pickaxe.stone_pickaxe;
} else if (picable == 'iron') {
  destroy = pickaxe.iron_pickaxe;
} else if (picable == 'diamond') {
  destroy = pickaxe.diamond_pickaxe;
}
function start() {
  console.log(carp);
  if (carp == 5 && blockc.array.usar == false) {
    block();
  } else if (type != metal && type != stone) {
    if (carp == 4) {
      block();
    }
  } else if (carp == 8 && blockc.array.usar == true) {
    block();
  }
}
function block() {
  if (type == 'metal') {
    metal();
  } else if (type == 'stone') {
    if (blockc.tnt == true) {
      if (blockc.array.usar == true) {
        concredian();
      } else {
        obsidian();
      }
    } else if (blockc.array.usar == true) {
      concrete();
    } else {
      stone();
    }
  } else if (type == 'wood') {
    wood();
  } else if (type == 'dirt') {
    dirt();
  } else if (type == 'glass') {
    glass();
  } else if (type == 'ice') {
    ice();
  } else if (type == 'miel') {
    miel();
  }
}
function metal() {
  let blocks = {
    format_version: '1.16.200',
    'minecraft:block': {
      description: {
        identifier: `aga:${id}`,
        register_to_creative_menu: true,
        properties: {
          'aga:stuff': ['none', 'chisel']
        }
      },
      components: {
        'tag:metal': {},
        'minecraft:destroy_time': 5,
        'minecraft:loot': 'loot_tables/empty.json',
        'minecraft:on_player_placing': {
          event: 'place'
        },
        'minecraft:on_interact': {
          event: 'fill',
          condition: "(query.get_equipped_item_name('main_hand') == 'chisel')"
        },
        'minecraft:on_player_destroyed': {
          condition: `${destroy}`,
          event: 'drop_loot',
          target: 'self'
        },
        'minecraft:creative_category': {
          group: 'ItemGroup.name.Construction',
          category: 'Construction'
        }
      },
      events: {
        drop_loot: {
          spawn_loot: {
            table: `loot_tables/blocks/${name}/${id}.json`
          }
        },
        place: {
          set_block_property: {
            'aga:stuff': 'none'
          }
        },
        fill: {
          set_block_property: {
            'aga:stuff': "query.get_equipped_item_name('main_hand')"
          }
        },
        block_chisel: {
          play_sound: {
            sound: `${sonido}`,
            target: 'self'
          },
          set_block: {
            block_type: `aga:${next}`
          }
        }
      },
      permutations: [
        {
          condition: "(query.block_property('aga:stuff') == 'chisel')",
          components: {
            'minecraft:ticking': {
              looping: false,
              range: [0, 0],
              on_tick: {
                event: 'block_chisel',
                target: 'self'
              }
            }
          }
        }
      ]
    }
  };
  let jsonBlock = JSON.stringify(blocks);
  fs.writeFile(`../blocks/${name}/${id}.json`, jsonBlock, (error) => {
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      console.log(`Archivo block ${id}.json generado correctamente`);
      listo++;
      todoL();
    }
  });
}
function stone() {
  let blocks = {
    format_version: '1.16.200',
    'minecraft:block': {
      description: {
        identifier: `aga:${id}`,
        register_to_creative_menu: true,
        properties: {
          'aga:stuff': ['none', 'chisel']
        }
      },
      components: {
        'tag:stone': {},
        'minecraft:destroy_time': 5,
        'minecraft:loot': 'loot_tables/empty.json',
        'minecraft:on_player_placing': {
          event: 'place'
        },
        'minecraft:on_interact': {
          event: 'fill',
          condition: "(query.get_equipped_item_name('main_hand') == 'chisel')"
        },
        'minecraft:on_player_destroyed': {
          condition: `${destroy}`,
          event: 'drop_loot',
          target: 'self'
        },
        'minecraft:creative_category': {
          group: 'ItemGroup.name.Construction',
          category: 'Construction'
        }
      },
      events: {
        drop_loot: {
          spawn_loot: {
            table: `loot_tables/blocks/${name}/${id}.json`
          }
        },
        place: {
          set_block_property: {
            'aga:stuff': 'none'
          }
        },
        fill: {
          set_block_property: {
            'aga:stuff': "query.get_equipped_item_name('main_hand')"
          }
        },
        block_chisel: {
          play_sound: {
            sound: `${sonido}`,
            target: 'self'
          },
          set_block: {
            block_type: `aga:${next}`
          }
        }
      },
      permutations: [
        {
          condition: "(query.block_property('aga:stuff') == 'chisel')",
          components: {
            'minecraft:ticking': {
              looping: false,
              range: [0, 0],
              on_tick: {
                event: 'block_chisel',
                target: 'self'
              }
            }
          }
        }
      ]
    }
  };
  let jsonBlock = JSON.stringify(blocks);
  fs.writeFile(`../blocks/${name}/${id}.json`, jsonBlock, (error) => {
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      console.log(`Archivo block ${id}.json generado correctamente`);
      listo++;
      todoL();
    }
  });
}
function glass() {
  let blocks = {
    format_version: '1.16.200',
    'minecraft:block': {
      description: {
        identifier: `aga:${id}`,
        register_to_creative_menu: true,
        properties: {
          'aga:stuff': ['none', 'chisel']
        }
      },
      components: {
        'minecraft:destroy_time': 0.4,
        'minecraft:loot': 'loot_tables/empty.json',
        'minecraft:on_player_placing': {
          event: 'place'
        },
        'minecraft:on_interact': {
          event: 'fill',
          condition: "(query.get_equipped_item_name('main_hand') == 'chisel')"
        },
        'minecraft:creative_category': {
          group: 'ItemGroup.name.Construction',
          category: 'Construction'
        }
      },
      events: {
        place: {
          set_block_property: {
            'aga:stuff': 'none'
          }
        },
        fill: {
          set_block_property: {
            'aga:stuff': "query.get_equipped_item_name('main_hand')"
          }
        },
        block_chisel: {
          play_sound: {
            sound: `${sonido}`,
            target: 'self'
          },
          set_block: {
            block_type: `aga:${next}`
          }
        }
      },
      permutations: [
        {
          condition: "(query.block_property('aga:stuff') == 'chisel')",
          components: {
            'minecraft:ticking': {
              looping: false,
              range: [0, 0],
              on_tick: {
                event: 'block_chisel',
                target: 'self'
              }
            }
          }
        }
      ]
    }
  };
  let jsonBlock = JSON.stringify(blocks);
  fs.writeFile(`../blocks/${name}/${id}.json`, jsonBlock, (error) => {
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      console.log(`Archivo block ${id}.json generado correctamente`);
      listo++;
      todoL();
    }
  });
}
function ice() {
  let blocks = {
    format_version: '1.16.200',
    'minecraft:block': {
      description: {
        identifier: `aga:${id}`,
        register_to_creative_menu: true,
        properties: {
          'aga:stuff': ['none', 'chisel']
        }
      },
      components: {
        'minecraft:friction': 1,
        'minecraft:destroy_time': 0.4,
        'minecraft:loot': 'loot_tables/empty.json',
        'minecraft:on_player_placing': {
          event: 'place'
        },
        'minecraft:on_interact': {
          event: 'fill',
          condition: "(query.get_equipped_item_name('main_hand') == 'chisel')"
        },
        'minecraft:material_instances': {
          '*': {
            render_method: 'blend',
            face_dimming: false,
            texture: `${id}`
          }
        },
        'minecraft:creative_category': {
          group: 'ItemGroup.name.Construction',
          category: 'Construction'
        }
      },
      events: {
        place: {
          set_block_property: {
            'aga:stuff': 'none'
          }
        },
        fill: {
          set_block_property: {
            'aga:stuff': "query.get_equipped_item_name('main_hand')"
          }
        },
        block_chisel: {
          play_sound: {
            sound: `${sonido}`,
            target: 'self'
          },
          set_block: {
            block_type: `aga:${next}`
          }
        }
      },
      permutations: [
        {
          condition: "(query.block_property('aga:stuff') == 'chisel')",
          components: {
            'minecraft:ticking': {
              looping: false,
              range: [0, 0],
              on_tick: {
                event: 'block_chisel',
                target: 'self'
              }
            }
          }
        }
      ]
    }
  };
  let jsonBlock = JSON.stringify(blocks);
  fs.writeFile(`../blocks/${name}/${id}.json`, jsonBlock, (error) => {
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      console.log(`Archivo block ${id}.json generado correctamente`);
      listo++;
      todoL();
    }
  });
}
function miel() {
  let blocks = {
    format_version: '1.16.200',
    'minecraft:block': {
      description: {
        identifier: `aga:${id}`,
        register_to_creative_menu: true,
        properties: {
          'aga:stuff': ['none', 'chisel']
        }
      },
      components: {
        'minecraft:friction': 0.01,
        'minecraft:destroy_time': 0.4,
        'minecraft:preventsjumping': true,
        'minecraft:loot': 'loot_tables/empty.json',
        'minecraft:on_player_placing': {
          event: 'place'
        },
        'minecraft:on_interact': {
          event: 'fill',
          condition: "(query.get_equipped_item_name('main_hand') == 'chisel')"
        },
        'minecraft:material_instances': {
          '*': {
            render_method: 'blend',
            face_dimming: false,
            texture: `${id}`
          }
        },
        'minecraft:creative_category': {
          group: 'ItemGroup.name.Construction',
          category: 'Construction'
        }
      },
      events: {
        place: {
          set_block_property: {
            'aga:stuff': 'none'
          }
        },
        fill: {
          set_block_property: {
            'aga:stuff': "query.get_equipped_item_name('main_hand')"
          }
        },
        block_chisel: {
          play_sound: {
            sound: `${sonido}`,
            target: 'self'
          },
          set_block: {
            block_type: `aga:${next}`
          }
        }
      },
      permutations: [
        {
          condition: "(query.block_property('aga:stuff') == 'chisel')",
          components: {
            'minecraft:ticking': {
              looping: false,
              range: [0, 0],
              on_tick: {
                event: 'block_chisel',
                target: 'self'
              }
            }
          }
        }
      ]
    }
  };
  let jsonBlock = JSON.stringify(blocks);
  fs.writeFile(`../blocks/${name}/${id}.json`, jsonBlock, (error) => {
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      console.log(`Archivo block ${id}.json generado correctamente`);
      listo++;
      todoL();
    }
  });
}
function obsidian() {
  let blocks = {
    format_version: '1.16.200',
    'minecraft:block': {
      description: {
        identifier: `aga:${id}`,
        register_to_creative_menu: true,
        properties: {
          'aga:stuff': ['none', 'chisel']
        }
      },
      components: {
        'tag:stone': {},
        'minecraft:destroy_time': 5,
        'minecraft:explosion_resistance': 200,
        'minecraft:loot': 'loot_tables/empty.json',
        'minecraft:on_player_placing': {
          event: 'place'
        },
        'minecraft:on_interact': {
          event: 'fill',
          condition: "(query.get_equipped_item_name('main_hand') == 'chisel')"
        },
        'minecraft:on_player_destroyed': {
          condition: `${destroy}`,
          event: 'drop_loot',
          target: 'self'
        },
        'minecraft:creative_category': {
          group: 'ItemGroup.name.Construction',
          category: 'Construction'
        }
      },
      events: {
        drop_loot: {
          spawn_loot: {
            table: `loot_tables/blocks/${name}/${id}.json`
          }
        },
        place: {
          set_block_property: {
            'aga:stuff': 'none'
          }
        },
        fill: {
          set_block_property: {
            'aga:stuff': "query.get_equipped_item_name('main_hand')"
          }
        },
        block_chisel: {
          play_sound: {
            sound: `${sonido}`,
            target: 'self'
          },
          set_block: {
            block_type: `aga:${next}`
          }
        }
      },
      permutations: [
        {
          condition: "(query.block_property('aga:stuff') == 'chisel')",
          components: {
            'minecraft:ticking': {
              looping: false,
              range: [0, 0],
              on_tick: {
                event: 'block_chisel',
                target: 'self'
              }
            }
          }
        }
      ]
    }
  };
  let jsonBlock = JSON.stringify(blocks);
  fs.writeFile(`../blocks/${name}/${id}.json`, jsonBlock, (error) => {
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      console.log(`Archivo block ${id}.json generado correctamente`);
      listo++;
      todoL();
    }
  });
}
function concrete() {
  let blocks = {
    format_version: '1.16.200',
    'minecraft:block': {
      description: {
        identifier: `aga:${id}`,
        register_to_creative_menu: true,
        properties: {
          'aga:stuff': ['none', 'chisel']
        }
      },
      components: {
        'tag:stone': {},
        'minecraft:destroy_time': 5,
        'minecraft:loot': 'loot_tables/empty.json',
        'minecraft:on_player_placing': {
          event: 'place'
        },
        'minecraft:on_interact': {
          event: 'fill',
          condition: "(query.get_equipped_item_name('main_hand') == 'chisel')"
        },
        'minecraft:on_player_destroyed': {
          condition: `${destroy}`,
          event: 'drop_loot',
          target: 'self'
        },
        'minecraft:creative_category': {
          group: 'ItemGroup.name.Construction',
          category: 'Construction'
        }
      },
      events: {
        drop_loot: {
          spawn_loot: {
            table: `loot_tables/blocks/${array}/${name}/${id}.json`
          }
        },
        place: {
          set_block_property: {
            'aga:stuff': 'none'
          }
        },
        fill: {
          set_block_property: {
            'aga:stuff': "query.get_equipped_item_name('main_hand')"
          }
        },
        block_chisel: {
          play_sound: {
            sound: `${sonido}`,
            target: 'self'
          },
          set_block: {
            block_type: `aga:${next}`
          }
        }
      },
      permutations: [
        {
          condition: "(query.block_property('aga:stuff') == 'chisel')",
          components: {
            'minecraft:ticking': {
              looping: false,
              range: [0, 0],
              on_tick: {
                event: 'block_chisel',
                target: 'self'
              }
            }
          }
        }
      ]
    }
  };
  let jsonBlock = JSON.stringify(blocks);
  fs.writeFile(`../blocks/${array}/${name}/${id}.json`, jsonBlock, (error) => {
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      console.log(`Archivo block ${id}.json generado correctamente`);
      listo++;
      todoL();
    }
  });
}
function concredian() {
  let blocks = {
    format_version: '1.16.200',
    'minecraft:block': {
      description: {
        identifier: `aga:${id}`,
        register_to_creative_menu: true,
        properties: {
          'aga:stuff': ['none', 'chisel']
        }
      },
      components: {
        'tag:stone': {},
        'minecraft:destroy_time': 5,
        'minecraft:explosion_resistance': 200,
        'minecraft:loot': 'loot_tables/empty.json',
        'minecraft:on_player_placing': {
          event: 'place'
        },
        'minecraft:on_interact': {
          event: 'fill',
          condition: "(query.get_equipped_item_name('main_hand') == 'chisel')"
        },
        'minecraft:on_player_destroyed': {
          condition: `${destroy}`,
          event: 'drop_loot',
          target: 'self'
        },
        'minecraft:creative_category': {
          group: 'ItemGroup.name.Construction',
          category: 'Construction'
        }
      },
      events: {
        drop_loot: {
          spawn_loot: {
            table: `loot_tables/blocks/${array}/${name}/${id}.json`
          }
        },
        place: {
          set_block_property: {
            'aga:stuff': 'none'
          }
        },
        fill: {
          set_block_property: {
            'aga:stuff': "query.get_equipped_item_name('main_hand')"
          }
        },
        block_chisel: {
          play_sound: {
            sound: `${sonido}`,
            target: 'self'
          },
          set_block: {
            block_type: `aga:${next}`
          }
        }
      },
      permutations: [
        {
          condition: "(query.block_property('aga:stuff') == 'chisel')",
          components: {
            'minecraft:ticking': {
              looping: false,
              range: [0, 0],
              on_tick: {
                event: 'block_chisel',
                target: 'self'
              }
            }
          }
        }
      ]
    }
  };
  let jsonBlock = JSON.stringify(blocks);
  fs.writeFile(`../blocks/${array}/${name}/${id}.json`, jsonBlock, (error) => {
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      console.log(`Archivo block ${id}.json generado correctamente`);
      listo++;
      todoL();
    }
  });
}
function wood() {
  let blocks = {
    format_version: '1.16.200',
    'minecraft:block': {
      description: {
        identifier: `aga:${id}`,
        register_to_creative_menu: true,
        properties: {
          'aga:stuff': ['none', 'chisel']
        }
      },
      components: {
        'tag:wood': {},
        'minecraft:destroy_time': 5,
        'minecraft:on_player_placing': {
          event: 'place'
        },
        'minecraft:on_interact': {
          event: 'fill',
          condition: "(query.get_equipped_item_name('main_hand') == 'chisel')"
        },
        'minecraft:creative_category': {
          group: 'ItemGroup.name.Construction',
          category: 'Construction'
        }
      },
      events: {
        place: {
          set_block_property: {
            'aga:stuff': 'none'
          }
        },
        fill: {
          set_block_property: {
            'aga:stuff': "query.get_equipped_item_name('main_hand')"
          }
        },
        block_chisel: {
          play_sound: {
            sound: `${sonido}`,
            target: 'self'
          },
          set_block: {
            block_type: `aga:${next}`
          }
        }
      },
      permutations: [
        {
          condition: "(query.block_property('aga:stuff') == 'chisel')",
          components: {
            'minecraft:ticking': {
              looping: false,
              range: [0, 0],
              on_tick: {
                event: 'block_chisel',
                target: 'self'
              }
            }
          }
        }
      ]
    }
  };
  let jsonBlock = JSON.stringify(blocks);
  fs.writeFile(`../blocks/${name}/${id}.json`, jsonBlock, (error) => {
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      console.log(`Archivo block ${id}.json generado correctamente`);
      listo++;
      todoL();
    }
  });
}
function dirt() {
  let blocks = {
    format_version: '1.16.200',
    'minecraft:block': {
      description: {
        identifier: `aga:${id}`,
        register_to_creative_menu: true,
        properties: {
          'aga:stuff': ['none', 'chisel']
        }
      },
      components: {
        'tag:dirt': {},
        'minecraft:destroy_time': 5,
        'minecraft:on_player_placing': {
          event: 'place'
        },
        'minecraft:on_interact': {
          event: 'fill',
          condition: "(query.get_equipped_item_name('main_hand') == 'chisel')"
        },
        'minecraft:creative_category': {
          group: 'ItemGroup.name.Construction',
          category: 'Construction'
        }
      },
      events: {
        place: {
          set_block_property: {
            'aga:stuff': 'none'
          }
        },
        fill: {
          set_block_property: {
            'aga:stuff': "query.get_equipped_item_name('main_hand')"
          }
        },
        block_chisel: {
          play_sound: {
            sound: `${sonido}`,
            target: 'self'
          },
          set_block: {
            block_type: `aga:${next}`
          }
        }
      },
      permutations: [
        {
          condition: "(query.block_property('aga:stuff') == 'chisel')",
          components: {
            'minecraft:ticking': {
              looping: false,
              range: [0, 0],
              on_tick: {
                event: 'block_chisel',
                target: 'self'
              }
            }
          }
        }
      ]
    }
  };
  let jsonBlock = JSON.stringify(blocks);
  fs.writeFile(`../blocks/${name}/${id}.json`, jsonBlock, (error) => {
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      console.log(`Archivo block ${id}.json generado correctamente`);
      listo++;
      todoL();
    }
  });
}
function crafteos() {
  if (num != fin) {
    if (datab == true) {
      let crafting = {
        format_version: '1.12',
        'minecraft:recipe_shapeless': {
          description: {
            identifier: `${id}_crafting`
          },
          tags: ['stonecutter'],
          ingredients: [
            {
              item: `aga:${id}`
            }
          ],
          result: {
            item: `${origen}`,
            data: data,
            count: 1
          }
        }
      };
      let uncrafting = {
        format_version: '1.12',
        'minecraft:recipe_shapeless': {
          description: {
            identifier: `${id}_uncrafting`
          },
          tags: ['stonecutter'],
          ingredients: [
            {
              item: `${origen}`,
              data: data
            }
          ],
          result: {
            item: `aga:${id}`,
            count: 1
          }
        }
      };
      let jsonCrafting = JSON.stringify(crafting);
      let jsonUnCrafting = JSON.stringify(uncrafting);
      fs.writeFile(`../recipes/${name}/crafting/${id}.json`, jsonCrafting, (error) => {
        if (error) {
          console.log(`Error: ${error}`);
        } else {
          console.log(`Archivo crafteo ${id}.json generado correctamente`);
          listo++;
          todoL();
        }
      });
      fs.writeFile(`../recipes/${name}/uncrafting/${id}.json`, jsonUnCrafting, (error) => {
        if (error) {
          console.log(`Error: ${error}`);
        } else {
          console.log(`Archivo descrafteo ${id}.json generado correctamente`);
          listo++;
          todoL();
        }
      });
    } else {
      let crafting = {
        format_version: '1.12',
        'minecraft:recipe_shapeless': {
          description: {
            identifier: `${id}_crafting`
          },
          tags: ['stonecutter'],
          ingredients: [
            {
              item: `aga:${id}`
            }
          ],
          result: {
            item: `${origen}`,
            count: 1
          }
        }
      };
      let uncrafting = {
        format_version: '1.12',
        'minecraft:recipe_shapeless': {
          description: {
            identifier: `${id}_uncrafting`
          },
          tags: ['stonecutter'],
          ingredients: [
            {
              item: `${origen}`
            }
          ],
          result: {
            item: `aga:${id}`,
            count: 1
          }
        }
      };
      let jsonCrafting = JSON.stringify(crafting);
      let jsonUnCrafting = JSON.stringify(uncrafting);
      fs.writeFile(`../recipes/${name}/crafting/${id}.json`, jsonCrafting, (error) => {
        if (error) {
          console.log(`Error: ${error}`);
        } else {
          console.log(`Archivo crafteo ${id}.json generado correctamente`);
          listo++;
          todoL();
        }
      });
      fs.writeFile(`../recipes/${name}/uncrafting/${id}.json`, jsonUnCrafting, (error) => {
        if (error) {
          console.log(`Error: ${error}`);
        } else {
          console.log(`Archivo descrafteo ${id}.json generado correctamente`);
          listo++;
          todoL();
        }
      });
    }
    if (type == 'metal' || type == 'stone') {
      let loot = {
        pools: [
          {
            rolls: 1,
            entries: [
              {
                type: 'item',
                name: `aga:${id}`,
                weight: 1
              }
            ]
          }
        ]
      };
      let jsonLoot = JSON.stringify(loot);
      fs.writeFile(`../loot_tables/blocks/${name}/${id}.json`, jsonLoot, (error) => {
        if (error) {
          console.log(`Error: ${error}`);
        } else {
          console.log(`Archivo loot ${id}.json generado correctamente`);
          listo++;
          todoL();
        }
      });
    }
  }
}
function crafteosArray() {
  if (num != fin) {
    if (datab == true) {
      let crafting = {
        format_version: '1.12',
        'minecraft:recipe_shapeless': {
          description: {
            identifier: `${id}_crafting`
          },
          tags: ['stonecutter'],
          ingredients: [
            {
              item: `aga:${id}`
            }
          ],
          result: {
            item: `${origen}`,
            data: data,
            count: 1
          }
        }
      };
      let uncrafting = {
        format_version: '1.12',
        'minecraft:recipe_shapeless': {
          description: {
            identifier: `${id}_uncrafting`
          },
          tags: ['stonecutter'],
          ingredients: [
            {
              item: `${origen}`,
              data: data
            }
          ],
          result: {
            item: `aga:${id}`,
            count: 1
          }
        }
      };
      let jsonCrafting = JSON.stringify(crafting);
      let jsonUnCrafting = JSON.stringify(uncrafting);
      fs.writeFile(`../recipes/${array}/${name}/crafting/${id}.json`, jsonCrafting, (error) => {
        if (error) {
          console.log(`Error: ${error}`);
        } else {
          console.log(`Archivo crafteo ${id}.json generado correctamente`);
          listo++;
          todoL();
        }
      });
      fs.writeFile(`../recipes/${array}/${name}/uncrafting/${id}.json`, jsonUnCrafting, (error) => {
        if (error) {
          console.log(`Error: ${error}`);
        } else {
          console.log(`Archivo descrafteo ${id}.json generado correctamente`);
          listo++;
          todoL();
        }
      });
    } else {
      let crafting = {
        format_version: '1.12',
        'minecraft:recipe_shapeless': {
          description: {
            identifier: `${id}_crafting`
          },
          tags: ['stonecutter'],
          ingredients: [
            {
              item: `aga:${id}`
            }
          ],
          result: {
            item: `${origen}`,
            count: 1
          }
        }
      };
      let uncrafting = {
        format_version: '1.12',
        'minecraft:recipe_shapeless': {
          description: {
            identifier: `${id}_uncrafting`
          },
          tags: ['stonecutter'],
          ingredients: [
            {
              item: `${origen}`
            }
          ],
          result: {
            item: `aga:${id}`,
            count: 1
          }
        }
      };
      let jsonCrafting = JSON.stringify(crafting);
      let jsonUnCrafting = JSON.stringify(uncrafting);
      fs.writeFile(`../recipes/${array}/${name}/crafting/${id}.json`, jsonCrafting, (error) => {
        if (error) {
          console.log(`Error: ${error}`);
        } else {
          console.log(`Archivo crafteo ${id}.json generado correctamente`);
          listo++;
          todoL();
        }
      });
      fs.writeFile(`../recipes/${array}/${name}/uncrafting/${id}.json`, jsonUnCrafting, (error) => {
        if (error) {
          console.log(`Error: ${error}`);
        } else {
          console.log(`Archivo descrafteo ${id}.json generado correctamente`);
          listo++;
          todoL();
        }
      });
    }
    if (type == 'metal' || type == 'stone') {
      let loot = {
        pools: [
          {
            rolls: 1,
            entries: [
              {
                type: 'item',
                name: `aga:${id}`,
                weight: 1
              }
            ]
          }
        ]
      };
      let jsonLoot = JSON.stringify(loot);
      fs.writeFile(`../loot_tables/blocks/${array}/${name}/${id}.json`, jsonLoot, (error) => {
        if (error) {
          console.log(`Error: ${error}`);
        } else {
          console.log(`Archivo loot ${id}.json generado correctamente`);
          listo++;
          todoL();
        }
      });
    }
  }
}
function traductor() {
  console.log('traductor');
  esp();
  ing();
  function esp() {
    if (num != fin) {
      fs.appendFileSync('../../chisel rp/texts/es_MX.lang', `\ntile.aga:${id}.name=${es[0]} ${esname} ${es[1]}`, (error) => {
        if (error) console.log(`Error: ${error}`);
      });
      fs.appendFileSync('../../chisel rp/texts/es_ES.lang', `\ntile.aga:${id}.name=${es[0]} ${esname} ${es[1]}`, (error) => {
        if (error) console.log(`Error: ${error}`);
      });
    }
    listo++;
    todoL();
  }
  function ing() {
    if (num != fin) {
      fs.appendFileSync('../../chisel rp/texts/en_US.lang', `\ntile.aga:${id}.name=${en} ${enname}`, (error) => {
        if (error) console.log(`Error: ${error}`);
      });
      fs.appendFileSync('../../chisel rp/texts/en_GB.lang', `\ntile.aga:${id}.name=${en} ${enname}`, (error) => {
        if (error) console.log(`Error: ${error}`);
      });
    }
    listo++;
    todoL();
  }
}
function todoL() {
  console.log(listo);
  if (listo == 1) {
    if (blockc.array.usar == true) {
      crafteosArray();
    } else {
      crafteos();
    }
  }
  if (type == 'stone' || type == 'metal') {
    if (listo == 4) {
      traductor();
    } else if (listo == 6) {
      listo = 0;
      num++;
      recuento();
    }
  } else {
    if (listo == 3) {
      traductor();
    } else if (listo == 5) {
      listo = 0;
      num++;
      recuento();
    }
  }
}
function recuento() {
  if (num != fin) {
    if (num > fin) {
      console.log('\nEl proceso a terminado :D');
    } else {
      if (num < fin) {
        re();
        console.log('funciona');
      }
    }
  } else if (num == fin) {
    if (blockc.var.usar == true) {
      next = blockc.var.sig;
    } else {
      next = subid + 1;
      re();
    }
  }
  numnext = num + 1;
  next = subid + numnext;
  id = subid + num;
}
function re() {
  console.log('\n\nRonda: ' + num);
  block();
}
