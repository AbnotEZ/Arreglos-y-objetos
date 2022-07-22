const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mansion_Front_2010.JPG/1600px-Mansion_Front_2010.JPG",
    rooms: 5,
    m: 500,
  },
];


let templete = (prop) => {
return `
<div class="propiedad">
<div class="img" style="background-image: url(${prop.src})"></div>
<section>
<h5>${prop.name}</h5>
<div class="d-flex justify-content-between">
<p>Cuartos: ${prop.rooms}</p>
<p>Metros: ${prop.m}</p>
</div>
<p class="my-3">${prop.description}</p>
<button class="btn btn-info">Ver más</button>
</section>
</div>
`;
}

let contenido = document.querySelector(".propiedades");
carga = function () {
  let html = "";
  for (const prop of propiedadesJSON) {
    html += templete(prop);
  contenido.innerHTML = html;
};
}

const buscarBtn = document.querySelector("#buscarBtn");

buscarBtn.onclick = function () {
  let total = [];
  let desde = Number(document.querySelector("#desde").value);
  let hasta = Number(document.querySelector("#hasta").value);
  let cuartos = Number(document.querySelector("#cuartos").value);
  let html = "";
  for (const prop of propiedadesJSON) {
    if ((cuartos == prop.rooms) && (desde <= prop.m <= hasta)) {
      html += templete(prop);
      total.push(prop);
    } else if ((desde, hasta, cuartos == 0)) {
      alert("Ingresa los datos solicitados");
      return; 
    } 
  }
  contenido.innerHTML = html;
  span.innerHTML = total.length;
};
window.onload = function () {
  carga();
};

const span = document.querySelector ('#Propiedades span');
const resultadoTotal = propiedadesJSON.length;
span.innerHTML = resultadoTotal; 
