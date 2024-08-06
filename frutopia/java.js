
function increaseQuantity(fruit) {
    let quantityInput = document.getElementById('quantity-' + fruit);
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity(fruit) {
    let quantityInput = document.getElementById('quantity-' + fruit);
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

function comprar(fruit, price) {
    let quantity = document.getElementById('quantity-' + fruit).value;
    let order = {
        fruit: fruit,
        quantity: parseInt(quantity),
        price: parseFloat(price)
    };
    localStorage.setItem('order-' + fruit, JSON.stringify(order));
    alert('Compra realizada: ' + fruit + ', Quantidade: ' + quantity + ', Preço: R$' + (quantity * price).toFixed(2));
}
