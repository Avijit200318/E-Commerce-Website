function createCard(productName, productPrice, productImage, productPrePrice, productOff, productInfo1, productInfo2, productInfo3, productInfo4,productImage2, productImage3) {
    return `
        <div class="card">
        <img id="image" src="${productImage}" alt="${productName}" />
        <div class="content">
            <h3>${productName}</h3>
            <p id="ratting">&#9733; &#9733; &#9733; &#9733; &#9734; <span>4.6 ratings</span></p>
            <p id="review">1,20,000 ratings & 9,975 reviews</p>
            <p id="price">&#8377;${productPrice} <span id="prePrice">&#8377;${productPrePrice} </span><span id="off">${productOff}</span></p>
                <ul>
                    <li>${productInfo1}</li>
                    <li>${productInfo2}</li>
                    <li>${productInfo3}</li>
                    <li>${productInfo4}</li>
                    <li> 6 core Processor</li>
                    <li>1 Year Warrenty Provided by Manufacture from date of purchase</li>
                </ul>
        </div>
    </div>
`;
}

// Example data for products
const products = [
    {name: "Apple Iphone 14 (Blue, 128 GB)", price: "67,999", prePrice: "79,999", image: "./picture/iphone 14.webp", off: " 14% off", info1: "8GB RAM | 128 GB ROM | Expandable upto 1 TB", info2: "15.49cm (6.1 inch) Full HD+ Display", info3: "12MP + 12MP | 12MP Front Camera", info4: "6000 mAh Lithium Ion Battery", image2: "./picture/iphone 14one.webp", image3: "./picture/iphone 14second.webp" },

    {name: "OnePlus Nord CE 2 Lite 5G (128 GB)", price: "17,556", prePrice: "21,999", image: "./picture/phone one.webp", off: " 12% off", info1: "8GB RAM | 128 GB ROM | Expandable upto 1 TB", info2: "17.22cm (6.78 inch) Full HD+ Display", info3: "108MP Rear Camera | 8MP Front Camera", info4: "5000 mAh Lithium Ion Battery", image2: "./picture/phone one2.webp", image3: "" },

    {name: "Vivo V29e 5G (Artistic Red, 256 GB)", price: "26,999", prePrice: "31,999", image: "./picture/phone vivo.webp", off: " 10% off", info1: "8GB RAM | 256 GB ROM | Expandable upto 1 TB", info2: "17.22cm (6.78 inch) Full HD+ Display", info3: "64MP + 8MP | 50MP Front Camera", info4: "5000 mAh Lithium Ion Battery", image2: "./picture/phone vivo2.webp", image3: "" },

    { name: "POCO C51 (Royal Black, 128GB)", price: "8,399", prePrice: "10,999", image: "./picture/phone1.webp", off: " 22% off", info1: "6GB RAM | 128 GB ROM | Expandable upto 1 TB", info2: "17.22cm (6.78 inch) Full HD+ Display", info3: "8MP Rear Camera | 5MP Front Camera", info4: "5000 mAh Lithium Ion Battery", image2: "./picture/phone 2.webp", image3: "" },

    { name: "Infinix Note 30 5G (Blue, 256 GB)", price: "15,999", prePrice: "19,999", image: "./picture/realme phone.webp", off: " 16% off", info1: "8GB RAM | 256 GB ROM | Expandable upto 1 TB", info2: "17.22cm (6.78 inch) Full HD+ Display", info3: "108MP + 2MP AI Lens | 16MP Front Camera", info4: "5000 mAh Lithium Ion Battery", image2: "./picture/realme phone1.webp", image3: "./picture/realme phone3.webp" },

    { name: "Redmi Note 12 Pro 5G (Blue, 256 GB)", price: "26,999", prePrice: "31,999", image: "./picture/readmi 12pro.webp", off: " 15% off", info1: "8GB RAM | 256 GB ROM | Expandable upto 1 TB", info2: "17.22cm (6.78 inch) Full HD+ Display", info3: "50MP + 8MP + 2MP | 16MP Front Camera", info4: "5000 mAh Lithium Ion Battery", image2: "./picture/readmi 12pro 1.webp", image3: "./picture/readmi 12pro 2.webp" },
    // Add more product data here
];

// Get the card container element
const cardContainer = document.getElementById("card");

// Generate and add cards to the container
products.forEach(product => {
    const cardHTML = createCard(product.name, product.price, product.image, product.prePrice, product.off, product.info1, product.info2, product.info3, product.info4, product.image2, product.image3);
    cardContainer.innerHTML += cardHTML;
});


// for image click
const clickedCardData = [];
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
        clickedCardData.push(cardData);
        localStorage.setItem('clickedCardData', JSON.stringify(clickedCardData));
        // You can also do additional actions here, like redirecting to another page
        window.location.href = "./order.html";
    
    })
})


