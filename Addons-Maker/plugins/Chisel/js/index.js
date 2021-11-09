//Librerias
const fs = require('fs'),
  { tag, block, carpetas} = require('./blocks/var');

const { bloque, pico, lang } = require('../config/config.json');

const Pico = require(pico),
  { id, name } = Bloque = require(bloque);

var Block = block('aga', 'ice', 1);

if (Bloque.is_stone) {
  Block['minecraft:block'].components['minecraft:on_player_destroyed'].condition += Pico.wood;
}
if (Bloque.data != false) {
}

//console.log(carpetas(`${id}:${name}`, Bloque.is_stone, Bloque.array));

/*
n++
return carpetas();
*/
function On(text = false) {
  if(text!=false)console.log(text)
  return true
}
module.exports = { On };