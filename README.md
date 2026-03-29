# Dynamic Shopping cart
A simple dynamic shopping cart applicaiton built with HTML, Javascript and CSS.
Users can add products with a name and price, update quantity, and remove items from the cart

## Features
- Add products dynamically to the cart
- Validate product name and price
- Display product name, product price, quantity input, and remove button
- Update Total price when products are added
- Update total price when quantity changes
- remove items from the cart and adjust the total accordingly

## Technologies used
 - HTML5
 - CSS
 - Javascript

 ## How it works
 1. enter product name and price
 2. click "Add Product" to add the item to the cart
 3. Adjust the quantity using the number input
 4. click "remove" to delete the item from the cart
 5. The total updates accordingly 

 ## Reflection
1. How did you dynamically create and append new elements to the DOM?
I used 'document.createElement("li")' to create a new list item whenever the user clicks on 'Add Product' button. Then added the product name, product price, quantity, and remove button using 'innerHtml'. Finally I used 'appendChild()' to add new list item to the cart in the DOM

2. What steps did you take to ensure accurate updates to the total price?
I created an 'updateTotalPrice()' function to handle all total price changes in one place. When price was added its price was added to the total. when the quantity changed, calculated the difference between the new quantity and the previous quantity then updated the total

3. How did you handle invalid input for product name or price?
I validated the inputs before adding a product. 
I checked whether the product name was empty using 'trim()' and I checked whether the price was invalid, empty, zero, or negative using 'parseFloat()' and 'isNaN'

4. What challenges did you face when implementing the remove functionality?
One challenge was removing the correct list item because remove button was created dynamically and another challenge is to make sure that total price updated corectly 