
/**
 * @param {'addons'|'JunMC13'|'texturas'} page
 * @returns {String[]}
 */
function getApi(page) {
  return {
    addons: [
      "Iron-Chest",
      "Waila",
      "Home",
      "Fundas-de-equipamiento",
      "Chisel",
      "Variantes-de-madera",
    ],
    texturas: ["Escudo-secundario"],
    JunMC13: [{name:"Texturas", mode:'privado', image:false}, {name:"Home", mode:'privado', image:true}, {name:"ChoesinCraft", mode:'privado', image:true}],
  }[page];
}


const nav = `
<a href="/">Inicio</a>
<a href="/addons">Addons</a>
<a href="/texturas">Texturas</a>
<a href="/JunMC13">JunMC13</a>`
const footer = `
<div class="contenedor-footer">
  <div class="content-foo">
    <h4>Discord</h4>
    <a class="link-s"  target="_blank" href="https://discord.gg/9BqzsNpvpS">AgaCraft</a>
  </div>
  <div class="content-foo">
    <h4>Correo electronico</h4>
    <a
      target="_blank"
      class="link-s"
      href="mailto:agacraft.addons@gmail.com?body=Hola AdrianCraft,
    Me comunico contigo para decirte"
      >agacraft.addons@gmail.com</a
    >
  </div>
  <div class="content-foo">
    <h4>YouTube</h4>
    <a class="link-s" target="_blank" href="https://youtube.com/c/Adriancraft07">AdrianCraft</a>
  </div>
</div>
<h2 class="titulo-final">&copy; AdrianCraft</h2>`
const wave = `
<div class="wave">
  <svg viewBox="0 0 500 150" preserveAspectRatio="none">
    <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
  </svg>
</div>`
