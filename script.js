const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');


let totalPrice = 0;
let quantityInput = 1;

//Updates the displayed total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

//Removes the selected item and subtracts its price from the total
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  const quantity = parseInt(item.dataset.quantity);

  updateTotalPrice(-(price * quantity));
  item.remove();
}

//Add products 
addProductButton.addEventListener('click', function () {
  let productName = productNameInput.value.trim();
  let price = parseFloat(productPriceInput.value);

  //prevent adding empty product names
  if (productName === "") {
    alert("Please enter a product name");
    return;
  }

  //prevent invalid, empty, zero, or nagative prices
  if (isNaN(price) || price <= 0) {
    alert("Please enter valid product price greater than 0.")
    return;
  }

  const list = document.createElement("li");

  //store the price on the list so that it can be used when removing
  list.dataset.price = price;
  list.dataset.quantity = 1;
  list.innerHTML = `${productName} - $${price.toFixed(2)} 
  <input type="number" min="1" value="1" class="quantity" step ="1">
  <button class="remove">Remove</button>`

  cart.appendChild(list);
  updateTotalPrice(price);

  productNameInput.value = "";
  productPriceInput.value = "";

});

//Event delegation for all current and future Remove buttons
cart.addEventListener('click', function (event) {
  if (event.target.classList.contains('remove')) {
    removeItem(event);
  }
})

//Event delegation for quantity change
cart.addEventListener('change', function (event) {
  if (event.target.classList.contains('quantity')) {
    const item = event.target.closest('li');
    
    const price = parseFloat(item.dataset.price);
    const preQuantity = parseInt(item.dataset.quantity);

    const newQuantity = parseInt(event.target.value);

    //Reset Invalid quantity back to 1
    if (isNaN(newQuantity) || newQuantity < 1) {
      newQuantity = 1;
      event.target.value = 1;
    }
    const difference = newQuantity - preQuantity;
    updateTotalPrice(price * difference);
    item.dataset.quantity = newQuantity;

  }

})

