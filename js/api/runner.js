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
function addApi(page) {
  let interval;
  let Api = async() => {
    let HTML = (await getApi()).filter(v=> page ? v.type.includes(page) : v).map(value =>
      `<div class="imagen-port">
      <img src="${value.image ? `/src/img/${value.route}/icono.png` : '/src/img/proximamente.png'}" alt="" />
      <a href="/${value.route}">
        <div class="hover-galeria">
          <img src="/src/img/click.png" alt="" />
          <p>${value.name} (${value.private ? 'Privado' : 'Publico'})</p>
        </div>
      </a>
    </div>`
    ).join("");
    document.querySelector(".galeria-port").innerHTML += HTML
    if(HTML)
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

