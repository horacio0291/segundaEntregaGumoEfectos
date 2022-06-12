
let carrito =[];

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    carrito.push(JSON.parse(localStorage.getItem(clave)))
}
carrito[0].forEach((producto) =>{
    carrito.push(producto)
})

carrito.shift();
console.log(carrito);

const cartContainer = document.querySelector('#cartContainer')

const imprimirCarrito = () => {
    cartContainer.innerHTML = ''
    carrito.forEach((producto) => {
        const cartRow = document.createElement('div')
        cartRow.setAttribute('data-id', producto.id)
        cartRow.className = 'cartRow'
        cartRow.innerHTML = `
        <div class="cartImg">
        <img src="${producto.imagen}">
        </div>
        <div class="cartTitle"><span> Pedal ${producto.nombre}</span></div>
        <div class="cartPrice"><span> $${producto.precio}</span></div>
        <div class="cartDesc"><span data-id="${producto.id}"class="remover"> X </span></div>
        `
        cartContainer.append(cartRow)
    })
} 

imprimirCarrito();

const eliminarProductoDelCarrito = (e) => {
    const productoIdSelected = e.target.closest('.remover').getAttribute('data-id')
    console.log(productoIdSelected);
    carrito = carrito.filter((producto) => producto.id != productoIdSelected)
    console.log(carrito);
    localStorage.setItem('carrito', JSON.stringify(carrito))
    imprimirCarrito()
}

document.addEventListener("click",e =>{
    if(e.target.classList.contains("remover")){
        eliminarProductoDelCarrito(e)
    }
});

