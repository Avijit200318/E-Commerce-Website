function heading() {
    return `
    
    <img id="logoPic" src="picture/logo.png" alt="">
    <a href="#" class="logo">ShopNest</a>
    <div class="group">
        <ul class="navigation">
            <li><a id="home" class="active" href="./index.html">Home</a></li>
            <li><a id="about" class ="" href="./about.html">About</a></li>
            <li><a id="contact" class ="" href="./contact.html">Contact</a></li>
            <li id="cartLogoLi"><a id="cart" href="./cart.html"><i id="cartLogo" class="fa-solid fa-cart-arrow-down"></i></a></li>
            <li><button id="login">Login</button></li>
            <li><i id="user" class="fa-solid fa-circle-user"></i>
                <div id="loginBox" class="loginBox">
                    <div class="loginBoxItem"><i id="loginIcon" class="fa-solid fa-circle-user"></i> My Profile</div>
                    <div class="loginBoxItem"><i id="loginIcon" class="fa-solid fa-truck-moving"></i> Order</div>
                    <div class="loginBoxItem"><i id="loginIcon" class="fa-solid fa-heart"></i> Wiselist</div>
                    <div class="loginBoxItem"><i id="loginIcon" class="fa-solid fa-gift"></i> Gift Card</div>
                    <!-- <div class="loginBoxItem"><button id="logOut">Logout</button></div> -->
                    <button id="logOut">Logout</button>
                </div>
            </li>
        </ul>
        <div class="search">
            <span class="icon">
                <i id="searchBtn" class="fa-solid fa-magnifying-glass"></i>
                <i id="closeBtn" class="fa fa-times" aria-hidden="true"></i>
            </span>
        </div>
        <i id="menuToggle" class="fa-solid fa-bars"></i>
        <div class="searchBox">
            <input type="text" placeholder="Search for products, brands and more..">
        </div>
        <!-- this position -->
    </div>
    `
}

function footerAll() {
    return `<div class="box">
    <h3>Get Know Us</h3>
    <ul>
        <li>About Us</li>
        <li>Careers</li>
        <li>Press Releases</li>
    </ul>
</div>
<div class="box">
    <h3>Let us Help You</h3>
    <ul>
        <li>Your Account</li>
        <li>Returns Center</li>
        <li>100% Purchase Protection</li>
        <li>Help</li>
    </ul>
</div>
<div class="box">
    <h3>Make Money With Us</h3>
    <ul>
        <li>Sell on ShopNest</li>
        <li>Sell under ShopNest Accelerator</li>
        <li>ShopNest Gobal Selling</li>
        <li>Become an Affiliate</li>
    </ul>
</div>
<div class="box">
    <h3>Social Media</h3>
    <ul id="icons">
        <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
        <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
        <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href=""><i class="fa-brands fa-whatsapp"></i></a></li>
    </ul>
</div>`
}


const navbar = document.getElementById("headerTop");
navbar.innerHTML += heading();

const footer = document.getElementById("foot")
footer.innerHTML += footerAll();
