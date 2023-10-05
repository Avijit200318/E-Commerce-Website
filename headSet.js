function createCard(productName, productPrice, productPrePrice,productImage, productOff,productInfo1, productInfo2, productInfo3, productInfo4) {
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
    { name: "Super Buds Pro GT99, ENC Gaming", price: "1,199", prePrice: "4,999", image: "./picture/headset3.webp", off: " 76% off", info1: "Battery life : Upto 50 hrs, Charging time: 2 hrs", info2: "LED Gaming Light: For a gaming TWS case...", info3: "Quad MEMS Mic width ENC for Clear calls Bluetooth 5.3", info4: "35MS LOWER LATENCY", image2: "./picture/headset3 1.webp", image3: "./picture/headset3 2.webp" },

    { name: "Truke BTG1 Earbuds with Game Mode", price: "1,099", prePrice: "3,499", image: "./picture/headset2.webp", off: " 68% off", info1: "Battery life : Upto 48 hrs, Charging time: 21.6 hrs", info2: "LED Gaming Light : For a gaming TWS case...", info3: "Quad MEMS Mic width ENC for Clear calls Bluetooth 5.1", info4: "Game Mode : 69MS LOWER LATENCY", image2: "", image3: "" },

    { name: "Tunifi M28 Tws Ecouteur Wireless Earbuds", price: "749", prePrice: "2,499", image: "./picture/headset4.webp", off: " 60% off", info1: "Battery life : Upto 1000 hrs, Charging time: 2 hrs", info2: "LED Gaming Light : For a gaming TWS case...", info3: " MEMS Mic width ENC for Clear calls Bluetooth 5.1", info4: "Wireless range: 10 m", image2: "", image3: ""  },

    { name: "Kreo Beluga Wireless Gaming Headset", price: "3,590", prePrice: "4,600", image: "./picture/headset5.webp", off: " 25% off", info1: "Battery life : Upto 50 hrs, Charging time: 2hrs", info2: "LED Gaming Light : For a gaming TWS case...", info3: "Quad MEMS Mic width ENC for Clear calls Bluetooth 5.3", info4: "35MS LOWER LATENCY", image2: "", image3: ""  },

    { name: "Noise Buds VS102 width 50 Hrs Playtime", price: "999", prePrice: "2,999", image: "./picture/headset.webp", off: " 66% off", info1: "Battery life: Upto 50 hrs, Charging time: 2hrs", info2: "Wireless range: 10m", info3: "C type Chargin Port | Upto 50 Hrs Playtime", info4: "Bluetooth version V5.1", image2: "./picture/headset white.webp", image3: "./picture/headset black.webp"  },

    { name: "boAt Airdopes 161 Pro with 50 Hrs...", price: "1,099", prePrice: "3,499", image: "./picture/boat1.webp", off: " 68% off", info1: "Battery life: Upto 50 hrs,   ASAP Charging : 10 Mins", info2: "IPX5 : Sweat Resistant ", info3: "Quad MEMS Mic width ENC for Clear calls Bluetooth 5", info4: "Multi Point Connectivity", image2: "./picture/boat2.webp", image3: "./picture/boat3.webp"  },
]


const cardContainer = document.getElementById("card");
products.forEach((product) =>{
    const cardHtml = createCard(product.name, product.price, product.prePrice, product.image, product.off, product.info1, product.info2, product.info3, product.info4);
    cardContainer.innerHTML += cardHtml;
});
// js for picture for click

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
        }
        clickedCardData = [];
        clickedCardData.push(cardData);
        localStorage.setItem('clickedCardData', JSON.stringify(clickedCardData));
        window.location.href = "./order.html";
    })
})
