const listaProductos = document.getElementById("ecommerce");

class Producto {
    constructor(title, description, price, img, id) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.img = img;
        this.id = id;
    }
}

const aloe = new Producto("Aloe", "Planta de interior", 450, "../media/producto12.jpeg", 1);
const palmera = new Producto("Palmera", "Planta de exterior", 450, "../media/producto12.jpeg", 2);
const cactus = new Producto("Catus", "Planta de interior", 450, "../media/producto12.jpeg", 3);
const alegria = new Producto("Alegria", "Planta de exterior", 900, "../media/producto12.jpeg", 4);
const maceta = new Producto("Maceta", "Artículo" , 900, "../media/producto12.jpeg", 5);
const tulipan = new Producto("Tulipan", "Planta de exterior", 900, "../media/producto12.jpeg", 6);
 
const baseDeDatosRopa = [aloe, palmera, cactus, alegria, maceta, tulipan];
 
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

 
let acumulador = ``;
baseDeDatosRopa.forEach((producto) => {
    acumulador += `
  <div class="col">
    <div class="card" style="width: 20rem;">
    <img src="${producto.img}" class="card-img-top imgProd" style="height: 16rem;" alt="...">
      <div class="card-body text-center">
        <h3 class="card-title titleProd" id="">${producto.title}</h3>
        <h4 class="card-text descriptionProd" id="">${producto.description}</h4>
        <h4 class="card-text priceProd" id="">$${producto.price}</h4>
        <button data-id="${producto.id}" class="btn btn-primary agregar-carrito">Agregar</button>
      </div>
    </div>
  </div>`;
});


listaProductos.innerHTML = acumulador;


if (listaProductos) { listaProductos.addEventListener("click", agregarAlCarrito); }



function agregarAlCarrito(e) {
    e.preventDefault();

    // Se localiza el click:
    if (e.target.classList.contains("agregar-carrito")) {

        const productoSeleccionado = e.target.parentNode;
        console.log(productoSeleccionado);
        obtenerDatos(productoSeleccionado);
    }
}
function obtenerDatos(productoCard) {
    const datosProducto = {
        nombre: productoCard.querySelector(".titleProd").textContent,
        modelo: productoCard.querySelector(".descriptionProd").textContent,
        precio: productoCard.querySelector(".priceProd").textContent,
        //Si tiene imagen sería accediento al atributo '.src':
        img: productoCard.parentNode.querySelector(".imgProd").src
    };

    console.log(datosProducto);
    carrito.push(datosProducto);
    console.log(carrito);
    guardarStorage();
}

function guardarStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

const contenedorCarrito = document.querySelector("#carrito")
const mostrarCarrito = document.querySelector("#mostrar-carrito")


if (mostrarCarrito) {
    mostrarCarrito.addEventListener('click', mostrarElCarrito)

}
function mostrarElCarrito() {
    if (localStorage.length == 0) {
        const msgInicial = document.createElement("h2")
        msgInicial.innerHTML = "No hay productos en el carrito :("
        contenedorCarrito.appendChild(msgInicial);
    } else {
        renderizarCarrito()
    }
}

function renderizarCarrito() {
    limpiarCarrito()
    carrito.forEach(producto => {
        const row = document.createElement('div');
        row.classList.add("row")

        row.innerHTML += `
            <div class="col">
                <img class="w-50" src="${producto.img}"/>
            </div>
            <div class="col">
                <h2 class="">${producto.nombre}</h2>
                <h4>${producto.precio}</h4>
            </div>
            <hr/>
        `
        contenedorCarrito.appendChild(row)
    })
}

function limpiarCarrito() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}