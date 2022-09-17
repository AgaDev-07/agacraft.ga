/**
 * @returns {Promise<{ route: String, name: String, type: String[], private: Boolean, image: Boolean }[]>}
 */
async function getApi() {
  return await fetch('https://aga-db.herokuapp.com/api')
    .then(v => v.text())
    .then(JSON.parse);
}
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
