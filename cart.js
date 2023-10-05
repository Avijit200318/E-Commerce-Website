let cartArray = JSON.parse(localStorage.getItem('cartItem')) || [];

function createCard(productName, productImage, productPrice, index) {
    return `
    <div class="card">
        <div class="image">
            <img src="${productImage}" alt="">
            <h3>${productName}</h3>
        </div>
        <div class="btn">
            <button id="sub" data-index="${index}">-</button>
            <p class="count" id="count  count-${index}">1</p>
            <button id="add" data-index="${index}">+</button>
            <p id="price">Price : ${productPrice}</p>
            <button class="delete" id="delete" data-index="${index}">Delete</button>
        </div>
    </div>
    `;
}

function totalPriceFun() {
    return `
    <h3 id="showPrice">Total Price: ₹${cartPrice}</h3>
    <div class="btn">
        <button id="order">Place Order</button>
    </div>
    `;
}

const cardContainer = document.getElementById("cardContainer");

function updateCardContainer() {
    cardContainer.innerHTML = ""; // Clear the container
    cartArray.forEach((product, index) => {
        const cardHtml = createCard(product.name, product.image, product.price, index);
        cardContainer.innerHTML += cardHtml;
    });
}

// code for delete button
cardContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        const index = parseInt(e.target.getAttribute("data-index"));
        if (!isNaN(index) && index >= 0 && index < cartArray.length) {
            // Remove the item from cartArray
            cartArray.splice(index, 1);
            // Update the local storage
            localStorage.setItem('cartItem', JSON.stringify(cartArray));
            // Update the card container
            updateCardContainer();
            // Recalculate the total price
            totalPriceItem();
            // Update the total price displayed on the page
            updateTotalPrice();
            location.reload();
            // this line help to refresh the page.
            // for this above line we dont need to update the card container(which we use to fix the index).
        }
    }
});

// function to update the cart price when a cart item is deleted.
function updateTotalPrice() {
    const totalPriceElement = document.getElementById("showPrice");
    totalPriceElement.textContent = `Total Price: ₹${cartPrice}`;
}

// *******************
// total price
let cartPrice;
function totalPriceItem() {
    const totalPrice = cartArray.reduce((accumulator, product) => {
        const numericPrice = parseFloat(product.price.replace(/[^\d.]/g, ''));
        return accumulator + numericPrice;
    }, 0);
    console.log(totalPrice);
    cartPrice = totalPrice;
}

totalPriceItem();

// code for cart page total price button
const totalButton = document.getElementById("totalLast");
const priceHtml = totalPriceFun();
totalButton.innerHTML = priceHtml;

// Initialize the card container
updateCardContainer();

// code for add and sub
let cartCountNo = {};
const addBtn = document.querySelectorAll("#add");
addBtn.forEach((add,index) => {
    let i = 1;
    
    add.addEventListener('click', function() {
        // i = Object.keys(cartCountNo).length === 0 ? 1: cartCountNo[index];
        i = cartCountNo[index] === undefined ? 1 : cartCountNo[index];
        // console.log("the value of i is "+ i + " "+cartCountNo[index]);
        // console.log("+ button is clicked");
        // var addBtnPrice = document.querySelector("#price").textContent;
        var addBtnPrice = cartArray[index].price;
        // var index = add.target.getAttribute("data-index");
        // console.log("the index "+index);
        var cartCount = document.getElementsByClassName("count")[index]
        cartCount.textContent = i + 1;
        // console.log("i is "+i);
        cartCountNo[index] = i + 1;
        i++;
        console.log("i is "+ i);
        addBtnPrice = parseFloat(addBtnPrice.replace(/[^\d.]/g, ''))
        console.log("the price is "+ addBtnPrice)
        cartPrice += addBtnPrice
        updateTotalPrice();
    })
})

const subBtn = document.querySelectorAll("#sub");
subBtn.forEach((sub, index) => {
    sub.addEventListener('click', function() {

        // console.log("+ button is clicked");
        // var subBtnPrice = document.querySelector("#price").textContent;
        var subBtnPrice = cartArray[index].price;
        var cartCount = document.getElementsByClassName("count")[index]
        subBtnPrice = parseFloat(subBtnPrice.replace(/[^\d.]/g, ''))
        if (cartPrice === 0){
            console.log("cart price is already 0");
            // cartCountNo[index] = 0 bug when all are 0 then if we press the + button then it show +2 insted of 1.
        }else{
            let crrentCart = cartCountNo[index] || 1;
            crrentCart --;
            cartCountNo[index] = crrentCart;
            cartCount.textContent = crrentCart;
            cartPrice -= subBtnPrice
            updateTotalPrice();
        }
    })
})
// code for order
const orderBtn = document.getElementById("order");
orderBtn.addEventListener('click',function() {
    if(cartPrice === 0){
        alert("Your cart is Empty!");
    }
    else{
        console.log("order is click");
        cartArray.length = 0;
        localStorage.setItem('cartItem', JSON.stringify(cartArray));
        alert("Your Order placed successfully!");
        location.reload();
    }
})
