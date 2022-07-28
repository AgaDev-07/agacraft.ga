getDefault();
function getDefault() {
  const $ = (e) => document.querySelector(e);
  let interval;
  let fn = () => FN();
  let FN = () => {
    $("nav").innerHTML += nav;
    $("footer").innerHTML += footer;
    $("header").innerHTML += wave;
    FN = () => {
      clearInterval(interval);
      interval = null;
    };
  };
  interval = setInterval(fn, 100);
}

/**
 * @param {'addons'|'seo'|'texturas'} page
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
    JunMC13: ["Texturas", "Home", "ChoesinCraft"],
  }[page];
}
function addApiTA(page) {
  let interval;
  let Api = () => {
    document.querySelector(".galeria-port").innerHTML += getApi(page)
      .map(
        (name) =>
          `<div class="imagen-port">
        <img src="${name=='Texturas'? '/img/proximamente.png': `/img/${page}/${name}/icono.png`}" alt="" />
        <a href="/${page}/${name}">
          <div class="hover-galeria">
            <img src="/img/click.png" alt="" />
            <p>${name.replace("-", " ")}</p>
          </div>
        </a>
      </div>`
      )
      .join("");
    Api = () => {
      clearInterval(interval);
      interval = null;
    };
  };
  function fn() {
    return Api();
  }

  interval = setInterval(fn, 100);
}

function addApiIndex() {
  let interval;
  let Api = () => {
    document.querySelector("main").innerHTML += [
      { title: "Addon mas reciente", page: "addons" },
      { title: "Textura mas reciente", page: "texturas" },
      { title: "Contenido mas reciente para JunMC13", page: "JunMC13" },
    ]
      .map(({ title, page }, i) => {
        let name = getApi(page)[0];
        let section = 2;
        if (Math.round(i / 2) * 2 == i) section = 1;
        return `<section class="section-${section}">
            <div class="contenedor">
              <h2 class="titulo">${title}</h2>
              <div class="galeria-port">
                <div class="imagen-port">
                  <img src="${name=='Texturas'? '/img/proximamente.png': `/img/${page}/${name}/icono.png`}" alt="">
                  <a href="/${page}/${name}">
                    <div class="hover-galeria">
                      <img src="/img/click.png" alt="">
                      <p>${name.replace("-", " ")}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>`;
      })
      .join("");
    Api = () => {
      clearInterval(interval);
      interval = null;
    };
  };
  function fn() {
    return Api();
  }

  interval = setInterval(fn, 100);
}
