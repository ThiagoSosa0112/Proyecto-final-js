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

const helecho = new Producto("Helecho", "Planta de interior", 1250, "../media/producto2.jpeg", 1);
const bromelia = new Producto("Bromelia", "Planta de exterior", 250, "../media/producto2.jpeg", 2);
const bonsai = new Producto("Bonsai", "Planta de interior", 350, "../media/producto2.jpeg", 3);
const acebo = new Producto("Acebo", "Planta de exterior", 1700, "../media/producto2.jpeg", 4);
const aralia = new Producto("Aralia", "Artículo" , 600, "../media/producto2.jpeg", 5);
const boniato = new Producto("Boniato", "Planta de exterior", 700, "../media/producto2.jpeg", 6);
 
const baseDeDatosRopa = [helecho, bromelia, bonsai, acebo, aralia, boniato];
 

 
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

     
    if (e.target.classList.contains("agregar-carrito")) {

        const productoSeleccionado = e.target.parentNode;
        console.log(productoSeleccionado);
        obtenerDatos(productoSeleccionado);
    }
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500
    })
}
function obtenerDatos(productoCard) {
    const datosProducto = {
        nombre: productoCard.querySelector(".titleProd").textContent,
        modelo: productoCard.querySelector(".descriptionProd").textContent,
        precio: productoCard.querySelector(".priceProd").textContent,
        
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
        msgInicial.innerHTML = "No hay productos en el carrito"
        contenedorCarrito.appendChild(msgInicial);
    } else {
        renderizarCarrito()
    }
}




function renderizarCarrito() {
    limpiarCarrito()
    carrito.forEach(producto => {
        const row = document.createElement('tr');
        row.classList.add("col")

        row.innerHTML += `
        <td><img src="${producto.img}" style = "width: 10rem;"></img></td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        `
        contenedorCarrito.appendChild(row)
    })
}

function limpiarCarrito() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

 