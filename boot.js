function createCard(productName, productPrice, productImage, productPrePrice, productOff, productInfo1, productInfo2, productInfo3, productInfo4){
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
                <li>1 Year Warrenty Provided by Manufacture from date of purchase</li>
            </ul>
    </div>
</div>
    `
}

const products = [
    { name: "addi Synthetic Leather Sneakers", price: "399", prePrice: "1,999", image: "./picture/boot2.webp", off: " 80% off", info1: "Outer Material : Synthetic Leather", info2: "Inner Material : Cloth", info3: "Pattern : Solid", info4: "Type : Sneakers", image2: "./picture/boot 21.webp", image3: "" },

    { name: "RED TAPE Casual For Women (Black)", price: "1,099", prePrice: "5,499", image: "./picture/boot3.webp", off: " 80% off", info1: "Outer Material : Mesh", info2: "Inner Material : Cloth", info3: "Pattern : Solid", info4: "Sole Material : EVA", image2: "./picture/boot 3 1.webp", image3: ""},

    { name: "BRUTON Sports Shoes For Men", price: "499", prePrice: "2,499", image: "./picture/boot4.webp", off: " 80% off", info1: "Outer Material : Mesh", info2: "Color : Black, Green", info3: "Sole Material : PVC", info4: "Ocation : Sports", image2: "", image3: "" },

    { name: "Mesh |Lightweight |Casual For Men", price: "482", prePrice: "999", image: "./picture/boot5.webp", off: " 51% off", info1: "Outer Material : Mesh", info2: "Inner Material : Comfort Foum", info3: "Sole Material : Airmix", info4: "Color : Navy", image2: "./picture/boot4 1.webp", image3: "" },

    { name: "HOTSTYLE FAST Loafers For Men", price: "399", prePrice: "14,999", image: "./picture/boot1.webp", off: " 73% off", info1: "Outer Material : Canvas", info2: "Inner Material : Canvas", info3: "1.5 inch Heel Height", info4: "Pattern : Solid", image2: "./picture/boot1 1.webp", image3: "./picture/boot1 2.webp" },

    { name: "Overstar Stylish Sneakers For Men", price: "619", prePrice: "999", image: "./picture/boot6.webp", off: " 38% off", info1: "Outer Material : Synthetic Leather", info2: "Inner Material : Lace-Ups", info3: "Pattern : Striped", info4: "weight : 800g (per single Shoe)" , image2: "./picture/boot6 1.webp", image3: "./picture/boot6 2.webp"},
]

const cardContainer = document.getElementById("card");

products.forEach((product) => {
    const cardHtml = createCard(product.name, product.price, product.image, product.prePrice, product.off, product.info1, product.info2, product.info3, product.info4);
    cardContainer.innerHTML += cardHtml;
})

// js for when picture is clicked

let clickedCardData = [];
const image = document.querySelectorAll(".card");
image.forEach(item => {
    item.addEventListener('click', function() {
        const productName = item.querySelector('h3').textContent;
        const productPrice = item.querySelector('#price').textContent;
        const productImage = item.querySelector('img').src;
        const productPrePrice = item.querySelector('#prePrice').textContent;
        const productOff = item.querySelector('#off').textContent;
        const productInfo1 = item.querySelector('ul li:nth-child(1)').textContent;
        const productInfo2 = item.querySelector('ul li:nth-child(2)').textContent;
        const productInfo3 = item.querySelector('ul li:nth-child(3)').textContent;
        const productInfo4 = item.querySelector('ul li:nth-child(4)').textContent;

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
        clickedCardData = [];
        clickedCardData.push(cardData);
        localStorage.setItem('clickedCardData', JSON.stringify(clickedCardData));
        window.location.href = "./order.html";
    })
})
