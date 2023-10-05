function createCard(productName, productPrice, productImage, productPrePrice, productOff, productInfo1, productInfo2, productInfo3, productInfo4) {
    return `
    <div class="card">
    <img src="${productImage}" alt="${productName}" />
    <div class="content">
        <h3>${productName}</h3>
        <p id="ratting">&#9733; &#9733; &#9733; &#9733; &#9734; <span>4.6 ratings</span></p>
        <p id="review">1,20,000 ratings & 9,975 reviews</p>
        <p id="price">&#8377;${productPrice} <span id="prePrice">&#8377;${productPrePrice} </span><span id="off">${productOff}</span>
            <ul>
                <li>${productInfo1}</li>
                <li>${productInfo2}</li>
                <li>${productInfo3}</li>
                <li>${productInfo4}</li>
                <li>1 Year Warrenty from date of purchase</li>
            </ul>
    </div>
</div>
    `
}

const products = [
    { name: "SKYBAGS Medium 27 L Backpack (Black)", price: "819", prePrice: "2000", image: "./picture/bag2.webp", off: " 59% off", info1: "Ideal For : Men & Women", info2: "Laptop Sleeve : No", info3: "With Rain Cover : No", info4: "Material : Polyester, Waterproof : Yes", image2:"./picture/bag2 1.webp", image3: "./picture/bag2 2.webp" },

    { name: "SAFARI Medium 26 L Backpack Brute (Black)", price: "719", prePrice: "2,599", image: "./picture/bag3.webp", off: " 72% off", info1: "Ideal For : Men & Women", info2: "Laptop Sleeve : No", info3: "With Rain Cover : No", info4: "Material : Polyester, Waterproof : No", image2:"./picture/bag3 1.webp", image3: "" },

    { name: "WROGN 55 L Laptop Backpack unisex (Black)", price: "799", prePrice: "3000", image: "./picture/bag6.webp", off: " 80% off", info1: "Ideal For : Men & Women", info2: "Laptop Sleeve : Yes", info3: "With Rain Cover : No", info4: "Material : Polyester, Waterproof : Yes", image2: "./picture/bag6 1.webp", image3: "./picture/bag6 2.webp" },

    { name: "SAFARI Large 35 L Backpack Clan (Blue)", price: "939", prePrice: "3,299", image: "./picture/new bag4.webp", off: " 72% off", info1: "Ideal For : Men & Women", info2: "Laptop Sleeve : No", info3: "With Rain Cover : Yes", info4: "Material : Polyester, Waterproof : Yes", image2: "./picture/new bag safari.webp", image3: "" },

    { name: "SKYBAGS Medium 27 L Backpack Fuse Deep Water ", price: "839", prePrice: "2,000", image: "./picture/bag new 5.webp", off: " 58% off", info1: "Ideal For : Men & Women", info2: "Laptop Sleeve : No", info3: "With Rain Cover : Yes", info4: "Material : Polyester, Waterproof : Yes", image2: "./picture/new bagsky.jpg", image3: "" },

    { name: "Pro Life Small 20 L Backpack Poliyester ", price: "411", prePrice: "1,799", image: "./picture/bag new.webp", off: " 77% off", info1: "Ideal For : Men & Women", info2: "Laptop Sleeve : No", info3: "With Rain Cover : No", info4: "Material : Polyester, Waterproof : No", image2: "./picture/bag new1.webp", image3: "" },
]

const cardContainer = document.getElementById("card");

products.forEach((product) => {
    const cardHtml = createCard(product.name, product.price, product.image, product.prePrice, product.off, product.info1, product.info2, product.info3, product.info4);
    cardContainer.innerHTML += cardHtml;
})

// for card click function
let clickedCardData = [];
const image = document.querySelectorAll(".card");
image.forEach(item => {
    item.addEventListener('click', function() {
      

        // Get the product data from the clicked card
        const productName = item.querySelector('h3').textContent;
        const productPrice = item.querySelector('#price').textContent;
        const productImage = item.querySelector('img').src;
        const productPrePrice = item.querySelector('#prePrice').textContent;
        const productOff = item.querySelector('#off').textContent;
        const productInfo1 = item.querySelector('ul li:nth-child(1)').textContent;
        const productInfo2 = item.querySelector('ul li:nth-child(2)').textContent;
        const productInfo3 = item.querySelector('ul li:nth-child(3)').textContent;
        const productInfo4 = item.querySelector('ul li:nth-child(4)').textContent;
        // const prdocutImage2 = item.querySelector('image2').src;
        // const productImage3 = item.querySelector('image3').src;
        // Construct an object with the card data
        
        const cardData = {
            name: productName,
            price: productPrice.split(" ")[0],
            image: productImage,
            prePrice: productPrePrice,
            off: productOff,
            info1: productInfo1,
            info2: productInfo2,
            info3: productInfo3,
            info4: productInfo4,
            image2: products[products.findIndex(element => element.name === productName)].image2,
            image3: products[products.findIndex(element => element.name === productName)].image3,
        };

        // Push the card data to the clickedCardData array
        clickedCardData = [];
        clickedCardData.push(cardData);
        localStorage.setItem('clickedCardData', JSON.stringify(clickedCardData));
        // You can also do additional actions here, like redirecting to another page
        window.location.href = "./order.html";
    
    })
})
