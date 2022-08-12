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

function addApiTA(page) {
  let interval;
  let Api = () => {
    document.querySelector(".galeria-port").innerHTML += page == 'JunMC13' ? getApi(page)
    .map(
      ({name, mode}) =>
        `<div class="imagen-port">
      <img src="${name=='Texturas'? '/src/img/proximamente.png': `/src/img/${page}/${name}/icono.png`}" alt="" />
      <a href="/${page}/${name}">
        <div class="hover-galeria">
          <img src="/src/img/click.png" alt="" />
          <p>${name.replace("-", " ")} (${mode})</p>
        </div>
      </a>
    </div>`
    )
    .join('')
     :document.querySelector(".galeria-port").innerHTML += getApi(page)
      .map(
        (name) =>
          `<div class="imagen-port">
        <img src="${`/src/img/${page}/${name}/icono.png`}" alt="" />
        <a href="/${page}/${name}">
          <div class="hover-galeria">
            <img src="/src/img/click.png" alt="" />
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
        if(page=='JunMC13')name=name.name
        let section = 2;
        if (Math.round(i / 2) * 2 == i) section = 1;
        return `<section class="section-${section}">
            <div class="contenedor">
              <h2 class="titulo">${title}</h2>
              <div class="galeria-port">
                <div class="imagen-port">
                  <img src="${name=='Texturas'? '/src/img/proximamente.png': `/src/img/${page}/${name}/icono.png`}" alt="">
                  <a href="/${page}/${name}">
                    <div class="hover-galeria">
                      <img src="/src/img/click.png" alt="">
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
