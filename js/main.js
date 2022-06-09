//Defino mi modelo de pedales

class Pedales{
  constructor(nombre, imagen, precio, efecto, seccion){
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
    this.efecto = efecto;
    this.seccion = seccion;
  }
}

//Genero los pedales

const nautilus = new Pedales("Nautilus", "../assets/nautilus.webp", 18000, "Delay y Chorus","./nautilus.html");
const lighthouse = new Pedales("Lighthouse", "../assets/lighthouse.webp", 18000, "Phaser analógico","./lighthouse.html");
const andromeda = new Pedales("Andromeda", "../assets/andromeda.webp", 20000, "Reverb digital","./andromeda.html");
const apocalipsis = new Pedales("Apocalipsis", "../assets/apocalipsis.webp", 20000, "Overdrive","./apocalipsis.html");
const fuzzilla = new Pedales("Fuzzilla", "../assets/fuzzilla.webp", 20000, "Distorsion","./fuzzila.html");

//Armo un array con todos los productos dentro

const productos = [nautilus, lighthouse, andromeda, apocalipsis, fuzzilla];

//Armo un array vacio que va a ser nuestro carrito de compras

const carrito = [];

//Guardamos la referencia de nuestro div donde se renderizaran nuestros productos
const tarjetas = document.querySelector('#tarjetas');

//Por cada producto creo una nueva card
productos.forEach((producto)=>{
  const card = document.createElement('div');
  card.className = "card mt-5 mb-5 me-5 ms-5 hvr-grow";
  card.innerHTML = `
          <a href="${producto.seccion}"><img src="${producto.imagen}" class="card-img-top" alt="Pedal Nautilus"/></a>
          <div class="card-body">
            <p class="card-text fw-bold">${producto.nombre}</p>
            <button data-id="${producto.nombre}" class="buttonCTA btn btn-secondary"> Agregar al Carrito </button>
          </div>`;
  tarjetas.appendChild(card);
})


const agregarProducto = (e) => {
  const productoElegido = e.target.getAttribute('data-id')
  const producto = productos.find((producto) => producto.nombre == productoElegido)
  carrito.push(producto)
  localStorage.setItem('carrito', JSON.stringify(carrito))
  pintarTotal(getTotal(carrito))
  pintarCuenta(carrito)
}

//get total carrito
const getTotal = (arr) => {
  let total = 0
  arr.forEach((producto) => {
      total += producto.precio
  })
  return total
}
//pintar total carrito
const pintarTotal = (total) => {
  const divTotal = document.querySelector('#total-carrito')
  divTotal.innerHTML = total.toLocaleString()
}
//pintar cuenta carrito
const pintarCuenta = (arr) => {
  const divCuenta = document.querySelector('.cuenta-carrito')
  divCuenta.innerHTML = arr.length
}

const botonesCompra = document.querySelectorAll('.buttonCTA')
botonesCompra.forEach((botonCompra) => {
    botonCompra.addEventListener('click', agregarProducto)
})