const clickedCardData = JSON.parse(localStorage.getItem('clickedCardData'));
// the above line give us the array value of the card that is clicked.

function createCard(productName, productPrice, productImage, productPrePrice, productOff, productInfo1, productInfo2, productInfo3, productInfo4, productImage2, productImage3) {
    return `
    <div class="imgContainer">
    <div class="image">
        <img id="main" src="${productImage}" alt="${productName}">
    </div>
    <div id="btn">
        <button id="addToCart">ADD TO CART</button>
        <button id="buyNow">BUY NOW</button>
    </div>
</div>
<div class="content">
    <h2>${productName}</h2>
    <p id="ratting">&#9733; &#9733; &#9733; &#9733; &#9734; <span>4.6 ratings</span></p>
    <p id="review">1,20,000 ratings & 9,975 reviews</p>
    <p class="firstPrice" id="price">${productPrice} <span id="prePrice">${productPrePrice}</span><span id="off">${productOff}</span></p>
    <p class="secondPrice" id="price">₹0 <span id="prePrice">${productPrePrice}</span><span id="off">100% off</span></p>
    <p>+ &#8377;29 Secured Packaging Free</p>
    <p id="offerBank">Available Offers</p>
    <p><span id="offerBank">Bank Offer</span> 10% off IDFC Bank Credit Card <a id="tc" href="">T&C</a></p>
    <p><span id="offerBank">Bank Offer</span> Flat &#8377;1,250 off on OneCard Credit Card EMI Transaction on
        orders &#8377;12,500 or above <a id="tc" href="">T&C</a></p>
    <p><span id="offerBank">Bank Offer</span> Get extra &#8377;3500 off (price inclusive of Cashback/ Coupons)
        <a id="tc" href="">T&C</a></p>
    <p><a id="tc" href="">view 7 more offers</a></p>
    <div class="coupons">
        
        <label for="inputCoupon">Apply Coupon: <p id="invalid">Invalid Coupon code</p></label>
        <input id="inputCoupon" type="text" placeholder="Coupon Code">
        <button id="apply">Apply</button>
    </div>
    <div class="colors">
        <div id="item1" class="item on"><img id="sImage1" src="${productImage}" alt="${productName}"></div>
        <div id="item2" class="item" style="display: ${productImage2 ? 'block' : 'none'};"><img id="sImage2" src="${productImage2}" alt="${productName}"></div>
        <div id="item3" class="item" style="display: ${productImage3 ? 'block' : 'none'};"><img id="sImage3" src="${productImage3}" alt="${productName}"></div>
    </div>

    <h3 id="details">Product Details</h3>
    <ul>
        <li>${productInfo1}</li>
        <li>${productInfo2}</li>
        <li>${productInfo3}</li>
        <li>${productInfo4}</li>
        <li>7 Days Service Center Replacement/Repair.</li>
        <li>1 Year Warrenty from date of purchase</li>
    </ul>
</div>

`;
}
// if we have only two product picture then we use style="display: ${productImage3 ? 'block' : 'none'}; to remove one of the sImage3 id components.
const cardContainer = document.getElementById("conta");

clickedCardData.forEach(product => {
    const cardHTML = createCard(product.name, product.price, product.image, product.prePrice, product.off, product.info1, product.info2, product.info3, product.info4,product.image2, product.image3);
    cardContainer.innerHTML += cardHTML;
});


// theree small image 
const item1 = document.getElementById("item1");
        const item2 = document.getElementById("item2");
        const item3 = document.getElementById("item3");
        const image = document.querySelector(".image img");

        item1.addEventListener('click', function () {
            image.src = item1.querySelector("#sImage1").src;
            item1.classList.add("on");
            item2.classList.remove("on");
            item3.classList.remove("on");
        });

        item2.addEventListener('click', function () {
            image.src = item2.querySelector("#sImage2").src;
            item2.classList.add("on");
            item1.classList.remove("on");
            item3.classList.remove("on");
        });

        item3.addEventListener('click', function () {
            image.src = item3.querySelector("#sImage3").src;
            item3.classList.add("on");
            item1.classList.remove("on");
            item2.classList.remove("on");
        });

// // code for add to cart
const cartArrayString = localStorage.getItem('cartItem');
const cartArray = cartArrayString ? JSON.parse(cartArrayString) : [];
// let cartArray = JSON.parse(localStorage.getItem('cartItem')) || [];
// let cartArray = [];
// this line "localStorage.getItem('cartItem')" check if there is an previous value is present or not. if present then add it to the new item using JSON.parse().

const addToCart = document.querySelector("#addToCart");
addToCart.addEventListener('click', function() {
    const productName = document.querySelector('h2').textContent;
    const productPrice = document.querySelector('#price').textContent;
    const productImage = document.querySelector('#main').src;

    const cardData = {
        name: productName,
        price: productPrice.split(" ")[0],
        image: productImage,
    }
    
    // Add the new item to the existing cartArray
    cartArray.push(cardData);
    
    // Store the updated cartArray back in localStorage
    localStorage.setItem('cartItem', JSON.stringify(cartArray));
    // use to empty the cartItem.
    // localStorage.setItem('cartItem', JSON.stringify([]));
    alert("Product is added to the cart");
})

// code for coupons :
const applyBtn = document.getElementById("apply");
    const input = document.getElementById("inputCoupon");
    let text = "";
    const firstPrice = document.querySelector(".firstPrice");
    const secondPrice = document.querySelector(".secondPrice");
    const invalidText = document.querySelector("#invalid");
    invalidText.style.display = "none";
    secondPrice.style.display = "none";
    applyBtn.addEventListener('click', function () {
        text = input.value;
        if(text === "avi2003")
        {
            firstPrice.style.display = "none";
            secondPrice.style.display = "block";
            invalidText.style.display = "none";
            input.value = "";
            // console.log(text);
        }
        else{
            invalidText.style.display = "block";
        }
    })

// code for buy now button
const buyNow = document.getElementById("buyNow");
buyNow.addEventListener('click', function() {
    alert("Your Order placed successfully!");
    window.location.reload();
})
