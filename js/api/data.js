/**
 * @returns {{ route: String, name: String, type: String[], private: Boolean, image: Boolean }[]}
 */
function getApi() {
  return [
    {
      route: 'JunMC13/Texturas',
      name: 'Texturas',
      type: ['JunMC13', 'texture'],
      private: true,
    },
    { route: 'addons/Iron-Chest', name: 'Iron Chest', type: ['addon'],
      image: true, },
    { route: 'addons/Waila', name: 'Waila', type: ['addon'],
      image: true, },
    { route: 'JunMC13/Home', name: 'Home Jun', type: ['JunMC13', 'addon'], private: true,
      image: true, },
    { route: 'addons/Home', name: 'Home', type: ['addon'],
      image: true, },
    {
      route: 'texturas/Escudo-secundario',
      name: 'Escudo secundario',
      type: ['texture'],
      image: true,
    },
    {
      route: 'addons/Fundas-de-equipamiento',
      name: 'Fundas de equipamiento',
      type: ['addon'],
      image: true,
    },
    { route: 'addons/Chisel', name: 'Chisel', type: ['addon'],
      image: true, },
    {
      route: 'JunMC13/ChoesinCraft',
      name: 'ChoesinCraft',
      type: ['JunMC13', 'addon'],
      private: true,
      image: true,
    },
    {
      route: 'addons/Variantes-de-madera',
      name: 'Variantes de madera',
      type: ['addon'],
      image: true,
    },
  ];
}

const nav = `
<a href="/">Inicio</a>
<a href="/addons">Addons</a>
<a href="/texturas">Texturas</a>
<a href="/JunMC13">JunMC13</a>`;
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
<h2 class="titulo-final">&copy; AdrianCraft</h2>`;
const wave = `
<div class="wave">
  <svg viewBox="0 0 500 150" preserveAspectRatio="none">
    <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
  </svg>
</div>`;
