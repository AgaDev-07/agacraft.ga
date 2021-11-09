
function carpetas(name, array, n=0) {
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
          n++
          return carpetas();
        }
      });
    }
  }
  console.log(carp);
}