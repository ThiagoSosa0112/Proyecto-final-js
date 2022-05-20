const dark = "click";
let boton = document.getElementById("moon");
boton.addEventListener(dark, eventoMoon);
function eventoMoon() {
     
        let colorMode = document.getElementById("principal");
        colorMode.className = ("color");
        let footer = document.getElementById("footer");
        footer.className = ("color");
}

let boton2 = document.getElementById("sun");
boton2.addEventListener(dark, eventoSun);
function eventoSun() {
     
        let colorMode2 = document.getElementById("principal");
        colorMode2.className = ("color2");
        let footer2 = document.getElementById("footer");
        footer2.className = ("color2");
} 


let stockProductos = [
        {id: 1, nombre: "Aloe", precio: 800,img: '../media/producto12.jpeg'},
        {id: 2, nombre: "Alegría", precio: 400,img: '../media/producto13.jpeg'},
        {id: 3, nombre: "Maceta", precio: 1900, img: '../media/producto14.jpeg'},
        {id: 4, nombre: "Ficus", precio: 400, img: '../media/producto16.jpeg'},
        {id: 5, nombre: "Palmera", precio: 600, img: '../media/producto15.jpeg'},
        {id: 6, nombre: "Cactus", precio: 200, img: '../media/producto17.jpeg'}
    ] 

 
 

const contenedorProductos = document.getElementById('contenedor-productos');

const contenedorCarrito = document.getElementById('tablaCarrito')

let carrito = [];

 stockProductos.forEach((producto) => {
         const div = document.createElement('div');
         div.classList.add('producto')
         div.innerHTML = 
         `
         <img src= ${producto.img} alt= "">
         <h3> ${producto.nombre}</h3>
         <p class= "precioProducto">Precio: $ ${producto.precio} </p>
         <button id="agregar${producto.id}" class= "boton-agregar"> Agregar al carrito <i class"fas fa-shopping-cart"></button>
         `
         contenedorProductos.appendChild(div);

         const boton = document.getElementById(`agregar${producto.id}`)
         boton.addEventListener ('click', () => {
                let agregarCarrito = document.getElementById("tablaCarrito");
        agregarCarrito.innerHTML +=  
                `
                <tr>
                <th scope="row">${producto.id}</th>
                <td>${producto.nombre}</td>
                <td>$ ${producto.precio}</td>
                </tr>
                `

         })
        
        })
        
        let ponerStorage = (clave, valor) =>{
                localStorage.setItem(clave, valor)
         }
         for (const producto of stockProductos){
                ponerStorage(producto.id, JSON.stringify(producto))
         }
 
 
//formulario 
let formulario = document.getElementById("formulario");
formulario.addEventListener ('submit', (e) => {
    e.preventDefault();
    let miForm = e.target;
    console.log(formulario.children[0].value);
    console.log(formulario.children[2].value);
    console.log(formulario.children[4].value);
    console.log(formulario.children[8].value);
}); 
 