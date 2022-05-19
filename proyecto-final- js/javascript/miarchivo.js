// Modo día/noche 
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


/*productos*/
class Producto{ 
    constructor (id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
  
}
const productos = [
new Producto (1, "Aloe", 800),
new Producto (2, "Palmera", 1800),
new Producto (3, "Cactus", 900),
new Producto (4, "Maceta", 8000),
new Producto (5, "Ficus", 2000),
new Producto (6, "Helecho", 300),
new Producto (7, "Maranta", 600),
new Producto (8, "Crotón", 1200),
new Producto (9, "Cinta", 850),
new Producto (10, "Potus", 800),
]
 
let ponerStorage = (clave, valor) =>{
        localStorage.setItem(clave, valor)
}
for (const producto of productos){
        ponerStorage(producto.id, JSON.stringify(producto))
}

 
//carrito

     let aloe = document.getElementById("Aloe");
    aloe.onclick = () => {
        let productoAloe = document.getElementById("tablaCarrito");
        productoAloe.innerHTML += "<tr>" + "<td>" + productos[0].nombre + "</td>" + "<td>" + "$" + productos[0].precio + "</td>" + "</tr>";
        
}

 
    let palmera = document.getElementById("Palmera");
    palmera.onclick = () =>{
            let productoPalmera = document.getElementById("tablaCarrito");
            productoPalmera.innerHTML += "<tr>" + "<td>" + productos[1].nombre + "</td>" + "<td>" + "$" + productos[1].precio + "</td>" + "</tr>"
    }
    let cactus = document.getElementById("Cactus");
    cactus.onclick = () =>{
            let productoCactus = document.getElementById("tablaCarrito");
            productoCactus.innerHTML += "<tr>" + "<td>" + productos[2].nombre + "</td>" + "<td>" + "$" + productos[2].precio + "</td>" + "</tr>";
    }
    let maceta = document.getElementById("Maceta");
    maceta.onclick = () => {
            let productoMaceta = document.getElementById("tablaCarrito");
            productoMaceta.innerHTML += "<tr>" + "<td>" + productos[3].nombre + "</td>" + "<td>" + "$" + productos[3].precio + "</td>" + "</tr>";
    }
    let ficus = document.getElementById("Ficus");
    ficus.onclick = () => {
             let productoFicus = document.getElementById("tablaCarrito");
             productoFicus.innerHTML += "<tr>" + "<td>" + productos[4].nombre + "</td>" + "<td>" + "$" + productos[4].precio + "</td>" + "</tr>";
     }
     let helecho = document.getElementById("Helecho");
    helecho.onclick = () => {
            let productoHelecho = document.getElementById("tablaCarrito");
            productoHelecho.innerHTML += "<tr>" + "<td>" + productos[5].nombre + "</td>" + "<td>" + "$" + productos[5].precio + "</td>" + "</tr>";
        }


//formulario 
let formulario = document.getElementById("formulario");
formulario.addEventListener ("submit", (e) => {
    e.preventDefault();
    let miForm = e.target;
    console.log(formulario.children[0].value);
    console.log(formulario.children[2].value);
    console.log(formulario.children[4].value);
    console.log(formulario.children[8].value);
}); 
 