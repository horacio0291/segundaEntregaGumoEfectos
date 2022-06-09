
const carrito =[];

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    carrito.push(JSON.parse(localStorage.getItem(clave)))
}


const cartContainer = document.querySelector('#cartContainer')

const imprimirCarrito = () => {
    cartContainer.innerHTML = ''
    carrito[0].forEach((producto) => {
        const cartRow = document.createElement('div')
        cartRow.className = 'cartRow'
        cartRow.innerHTML = `
        <div class="cartImg">
        <img src="${producto.imagen}">
        </div>
        <div class="cartTitle"><span> Pedal ${producto.nombre}</span></div>
        <div class="cartPrice"><span> $${producto.precio}</span></div>
        <div class="cartDesc"><span class="remover"> X </span></div>
        `
        cartContainer.append(cartRow)
    })
} 

imprimirCarrito();

document.addEventListener("click",(e)=>{
    if(e.target.matches(".remover")){
        console.log("click en x");
    }
})
