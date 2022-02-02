// const originalPrice = 120;
// const discount = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const percentPriceWithDiscount = 100 - descuento;
    const priceWithDiscount = (precio * percentPriceWithDiscount) / 100;
    return priceWithDiscount;
}

// console.log({
//     originalPrice,
//     discount,
//     percentPriceWithDiscount,
//     priceWithDiscount
// })

function precioTotal() {
    const inputPrice = document.getElementById("InputPrice");
    const price = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discount = inputDiscount.value;

    const precioTotal = calcularPrecioConDescuento(price, discount);
    
    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = `El valor con descuento es de $${precioTotal} pesos`
}