/**
 * @returns {Promise<{ route: String, name: String, type: String[], private: Boolean, image: Boolean }[]>}
 */
async function getApi() {
  return await fetch('https://aga-db.herokuapp.com/api')
    .then(v => v.text())
    .then(JSON.parse);
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

const vue = {
  nav: [
    ['/', 'Inicio'],
    ['/addons', 'Addons'],
    ['/texturas', 'Texturas'],
    ['/JunMC13', 'JunMC13'],
  ],
  footer: [
    ['Discord', 'https://discord.gg/9BqzsNpvpS', 'AgaCraft'],
    ['Correo electronico', 'mailto:agacraft.addons@gmail.com', 'agacraft.addons@gmail.com'],
    ['YouTube', 'https://youtube.com/c/Adriancraft07', 'AdrianCraft'],
  ],
};
