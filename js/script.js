let productos = [];

const cargarProductos = async () => {
  try {
    const response = await fetch("../js/productos.json");
    productos = await response.json();

    //   console.log(prueba);

    mostrarProductosCaseras();
    mostrarProductosCumple();
    mostrarProductosFondant();
    mostrarProductosGolosinas();
  } catch (error) {
    console.error(error);
  }
};

const mostrarProductosCaseras = () => {
  const artCaseras = document.querySelector(".articleTortasCaseras");

  productos["tortasCaseras"].forEach((prod) => {
    const html = `
            <div class="galleryContainer">
                 <div class="boton-abrir">
                <label for="btn-modal-${prod.id}">
                 <div class="gallery">
                 <img src="${prod.imagen}" alt="${prod.nombre}"/>
                 <div class="desc"><p>${prod.nombre}</p></div>
              </div>
            </label>
      </div>
        `;
    artCaseras.innerHTML += html;
  });

  productos["tortasCaseras"].forEach((prod) => {
    const modal = `
            
      <!-- Ventana modal  -->

<input type="checkbox" id="btn-modal-${prod.id}">
<div class="container-modal-${prod.id} modal">
        <div data-id="${prod.id}" class="content-modal">
            <h3 class="description">${prod.nombre}<h3/>
            <img class="img-modal" src="${prod.imagen}" alt="${prod.nombre}" />
            <p class="details">${prod.descripcion}</p>
            <p class="price">$ ${prod.precio}</p>
            <button type="button" class="btn">Agregar al Carrito</button>
        </div>
        <label for="btn-modal-${prod.id}" class="cerrar-modal"></label>
        <div class="boton-cerrar">
                <label for="btn-modal-${prod.id}">X</label>
          </div>
      </div>
        `;

    artCaseras.innerHTML += modal;
  });
};

const mostrarProductosCumple = () => {
  const artCumple = document.querySelector(".articleTortasCumple");

  productos["tortasCumple"].forEach((prod) => {
    const html = `
            <div class="galleryContainer">
                 <div class="boton-abrir">
                <label for="btn-modal-${prod.id}">
                 <div class="gallery">
                 <img src="${prod.imagen}" alt="${prod.nombre}"/>
                 <div class="desc"><p>${prod.nombre}</p></div>
              </div>
            </label>
      </div>
        `;
    artCumple.innerHTML += html;
  });

  productos["tortasCumple"].forEach((prod) => {
    const modal = `
            
      <!-- Ventana modal  -->

<input type="checkbox" id="btn-modal-${prod.id}">
<div class="container-modal-${prod.id} modal">
        <div data-id="${prod.id}" class="content-modal">
            <h3 class="description">${prod.nombre}<h3/>
            <img class="img-modal" src="${prod.imagen}" alt="${prod.nombre}" />
            <p class="details">${prod.descripcion}</p>
            <p class="price">$ ${prod.precio}</p>
            <button type="button" class="btn">Agregar al Carrito</button>
        </div>
        <label for="btn-modal-${prod.id}" class="cerrar-modal"></label>
        <div class="boton-cerrar">
                <label for="btn-modal-${prod.id}">X</label>
          </div>
      </div>
        `;

    artCumple.innerHTML += modal;
  });
};

const mostrarProductosFondant = () => {
  const artFondant = document.querySelector(".articleTortasFondant");

  productos["tortasFondant"].forEach((prod) => {
    const html = `
            <div class="galleryContainer">
                 <div class="boton-abrir">
                <label for="btn-modal-${prod.id}">
                 <div class="gallery">
                 <img src="${prod.imagen}" alt="${prod.nombre}"/>
                 <div class="desc"><p>${prod.nombre}</p></div>
              </div>
            </label>
      </div>
        `;
    artFondant.innerHTML += html;
  });

  productos["tortasFondant"].forEach((prod) => {
    const modal = `
            
      <!-- Ventana modal  -->

<input type="checkbox" id="btn-modal-${prod.id}">
<div class="container-modal-${prod.id} modal">
        <div data-id="${prod.id}" class="content-modal">
            <h3 class="description">${prod.nombre}<h3/>
            <img class="img-modal" src="${prod.imagen}" alt="${prod.nombre}" />
            <p class="details">${prod.descripcion}</p>
            <p class="price">$ ${prod.precio}</p>
            <button type="button" class="btn">Agregar al Carrito</button>
        </div>
        <label for="btn-modal-${prod.id}" class="cerrar-modal"></label>
        <div class="boton-cerrar">
                <label for="btn-modal-${prod.id}">X</label>
          </div>
      </div>
        `;

    artFondant.innerHTML += modal;
  });
};

const mostrarProductosGolosinas = () => {
  const artGolosinas = document.querySelector(".articleTortasGolosinas");

  productos["tortasGolosinas"].forEach((prod) => {
    const html = `
            <div class="galleryContainer">
                 <div class="boton-abrir">
                <label for="btn-modal-${prod.id}">
                 <div class="gallery">
                 <img src="${prod.imagen}" alt="${prod.nombre}"/>
                 <div class="desc"><p>${prod.nombre}</p></div>
              </div>
            </label>
      </div>
        `;
    artGolosinas.innerHTML += html;
  });

  productos["tortasGolosinas"].forEach((prod) => {
    const modal = `
            
      <!-- Ventana modal  -->

<input type="checkbox" id="btn-modal-${prod.id}">
<div class="container-modal-${prod.id} modal">
        <div data-id="${prod.id}" class="content-modal">
            <h3 class="description">${prod.nombre}<h3/>
            <img class="img-modal" src="${prod.imagen}" alt="${prod.nombre}" />
            <p class="details">${prod.descripcion}</p>
            <p class="price">$ ${prod.precio}</p>
            <button type="button" class="btn">Agregar al Carrito</button>
        </div>
        <label for="btn-modal-${prod.id}" class="cerrar-modal"></label>
        <div class="boton-cerrar">
                <label for="btn-modal-${prod.id}">X</label>
          </div>
      </div>
        `;

    artGolosinas.innerHTML += modal;
  });
};

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


