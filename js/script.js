fetch("../js/productos.json")
  .then((response) => response.json())
  .then((productos) => {
    const artCaseras = document.querySelector(".articleTortasCaseras");

    productos["tortasCaseras"].forEach((prod) => {
      const html = `

    <div class="galleryContainer">
      <div class="boton-abrir">
          <label for="btn-modal">
              <div class="gallery">
                <img src="${prod.imagen}" alt="${prod.nombre}"/>
                <div class="desc"><p>${prod.nombre}</p></div>
              </div>
          </label>
      </div>

      <!-- Ventana modal  -->

<input type="checkbox" id="btn-modal">
<div class="container-modal modal">
        <div class="content-modal">
            <div>
            <h3 class="description">${prod.nombre}<h3/>
            </div>
            <img class="img-modal" src="${prod.imagen}" alt="${prod.nombre}" />
            <p class="details">${prod.descripcion}</p>
            <p class="price">$ ${prod.precio}</p>
            <button class="btn">Agregar al Carrito</button>
        </div>
        <label for="btn-modal" class="cerrar-modal"></label>
        <div class="boton-cerrar">
                <label for="btn-modal">X</label>
          </div>
      </div>
`;

      artCaseras.innerHTML += html;
    });

    const artCumple = document.querySelector(".articleTortasCumple");

    productos["tortasCumple"].forEach((prod) => {
      const html = `

    <div class="galleryContainer">
      <div class="boton-abrir">
          <label for="btn-modal">
              <div class="gallery">
                <img src="${prod.imagen}" alt="${prod.nombre}"/>
                 <div class="desc"><p>${prod.nombre}</p></div>
              </div>
          </label>
      </div>

      <!-- Ventana modal  -->

<input type="checkbox" id="btn-modal">
<div class="container-modal modal">
        <div class="content-modal">
            <div>
            <h3 class="description">${prod.nombre}<h3/>
            </div>
            <img class="img-modal" src="${prod.imagen}" alt="${prod.nombre}" />
            <p class="details">${prod.descripcion}</p>
            <p class="price">$ ${prod.precio}</p>
            <button class="btn">Agregar al Carrito</button>
        </div>
        <label for="btn-modal" class="cerrar-modal"></label>
        <div class="boton-cerrar">
                <label for="btn-modal">X</label>
          </div>
      </div>
`;

      artCumple.innerHTML += html;
    });

    const artFondant = document.querySelector(".articleTortasFondant");

    productos["tortasFondant"].forEach((prod) => {
      const html = `

    <div class="galleryContainer">
      <div class="boton-abrir">
          <label for="btn-modal">
              <div class="gallery">
                <img src="${prod.imagen}" alt="${prod.nombre}"/>
                <div class="desc"><p>${prod.nombre}</p></div>
              </div>
          </label>
      </div>

      <!-- Ventana modal  -->

<input type="checkbox" id="btn-modal">
<div class="container-modal modal">
        <div class="content-modal">
            <div>
            <h3 class="description">${prod.nombre}<h3/>
            </div>
            <img class="img-modal" src="${prod.imagen}" alt="${prod.nombre}" />
            <p class="details">${prod.descripcion}</p>
            <p class="price">$ ${prod.precio}</p>
            <button class="btn">Agregar al Carrito</button>
        </div>
        <label for="btn-modal" class="cerrar-modal"></label>
        <div class="boton-cerrar">
                <label for="btn-modal">X</label>
          </div>
      </div>
`;

      artFondant.innerHTML += html;
    });

    const artGolosinas = document.querySelector(".articleTortasGolosinas");

    productos["tortasGolosinas"].forEach((prod) => {
      const html = `

    <div class="galleryContainer">
      <div class="boton-abrir">
          <label for="btn-modal">
              <div class="gallery">
                <img src="${prod.imagen}" alt="${prod.nombre}"/>
                <div class="desc"><p>${prod.nombre}</p></div>
              </div>
          </label>
      </div>

      <!-- Ventana modal  -->

<input type="checkbox" id="btn-modal">
<div class="container-modal modal">
        <div class="content-modal">
            <div>
            <h3 class="description">${prod.nombre}<h3/>
            </div>
            <img class="img-modal" src="${prod.imagen}" alt="${prod.nombre}" />
            <p class="details">${prod.descripcion}</p>
            <p class="price">$ ${prod.precio}</p>
            <button class="btn">Agregar al Carrito</button>
        </div>
        <label for="btn-modal" class="cerrar-modal"></label>
        <div class="boton-cerrar">
                <label for="btn-modal">X</label>
          </div>
      </div>
`;

      artGolosinas.innerHTML += html;
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Se agrega subtítulos a cada article

const tituloCaseras = document.querySelector(".articleTortasCaseras");
const subtituloCaseras = document.createElement("h2");
subtituloCaseras.classList.add("subtitle");
subtituloCaseras.textContent = "TORTAS CASERAS";
document
  .getElementById("productTortas")
  .insertBefore(subtituloCaseras, tituloCaseras);

const tituloCumple = document.querySelector(".articleTortasCumple");
const subtituloCumple = document.createElement("h2");
subtituloCumple.classList.add("subtitle");
subtituloCumple.textContent = "TORTAS DE CUMPLEAÑOS";
document
  .getElementById("productTortas")
  .insertBefore(subtituloCumple, tituloCumple);

const tituloFondant = document.querySelector(".articleTortasFondant");
const subtituloFondant = document.createElement("h2");
subtituloFondant.classList.add("subtitle");
subtituloFondant.textContent = "TORTAS DE FONDANT";
document
  .getElementById("productTortas")
  .insertBefore(subtituloFondant, tituloFondant);

const tituloGolosinas = document.querySelector(".articleTortasGolosinas");
const subtituloGolosinas = document.createElement("h2");
subtituloGolosinas.classList.add("subtitle");
subtituloGolosinas.textContent = "TORTAS CON GOLOSINAS";
document
  .getElementById("productTortas")
  .insertBefore(subtituloGolosinas, tituloGolosinas);
