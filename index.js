var loader = document.getElementById("preloader");
window.addEventListener('load', function () {
    loader.style.display = "none";
})

let searchBtn = document.querySelector('#searchBtn');
let closeBtn = document.querySelector('#closeBtn');
let searchBox = document.querySelector('.searchBox');
let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('#menuToggle');
let header = document.querySelector('header');


searchBtn.onclick = function () {
    searchBox.classList.add('active');
    // add a class to the class
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
    menuToggle.classList.add('hide');
    header.classList.remove('open');
}
closeBtn.onclick = function () {
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
    menuToggle.classList.remove('hide');
}
//for the menue
menuToggle.onclick = function () {
    header.classList.toggle('open');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
    menuToggle.classList.remove('active');
}

// js for the slider
// let counter = 1;
// setInterval(function () {
//     document.getElementById('radio' + counter).checked = true;
//     counter++;
//     if (counter > 4) {
//         counter = 1;
//     }
// }, 5000);

// new script for the loginBox.
var user = document.getElementById("user");
// console.log(user);
var loginBox = document.getElementById("loginBox");
// console.log(loginBox);
var timer;

if (window.innerWidth > 1000) {
    user.addEventListener('mouseenter', function () {
        loginBox.style.display = "block";
        clearTimeout(timer);
    });

    loginBox.addEventListener('mouseenter', function () {
        clearTimeout(timer);
    })

    loginBox.addEventListener('mouseleave', function () {
        timer = setTimeout(function () {
            loginBox.style.display = "none";
        }, 500);
    })

    user.addEventListener('mouseleave', function () {
        timer = setTimeout(function () {
            loginBox.style.display = "none";
        }, 500);
    });
}
else {
    console.log("this is an mobile device");
    user.addEventListener('click', function () {
        if (loginBox.style.display === "block") {
            loginBox.style.display = "none";
        }
        else {
            loginBox.style.display = "block";
        }
    })
}

// start of the login button
// code for cartLogo
const cartLogoLi = document.getElementById("cartLogoLi");
cartLogoLi.style.display = "none";

document.getElementById("login").addEventListener('click', function () {
    window.open('signIn.html', '_blank');
})

document.addEventListener("DOMContentLoaded", function () {
    let loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus === "loggedIn") {
        // If logged in, hide the login button and show the user info
        document.getElementById("login").style.display = "none";
        document.getElementById("user").style.display = "block";
        cartLogoLi.style.display = "block";
    }
});

// Listen for the "submitClicked" event and update login state
window.addEventListener("message", function (event) {
    if (event.data === 'submitClicked') {
        // Store the login state in localStorage
        localStorage.setItem("loginStatus", "loggedIn");

        // Hide the login button and show the user info
        document.getElementById("login").style.display = "none";
        document.getElementById("user").style.display = "block";
        cartLogoLi.style.display = "block";

    }
});

// window.addEventListener("message", function (event) {
//     if (event.data === 'submitClicked') {
//         this.document.getElementById("login").style.display = "none";
//         this.document.getElementById("user").style.display = "block";
//     }
// })



document.getElementById("logOut").addEventListener('click', function () {
    document.getElementById("login").style.display = "block";
    document.getElementById("user").style.display = "none";
    cartLogoLi.style.display = "none";
    loginBox.style.display = "none";
    // new
    localStorage.setItem("loginStatus", "logOut");
    alert("Logout successfull");
})

// for the click function
const card1 = document.querySelectorAll("#firstRow");
const card2 = document.querySelectorAll("#secondRow");
const card3 = document.querySelectorAll("#thirdRow");
const card4 = document.querySelectorAll("#fourthRow");

card1.forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = "./phone.html";
    });
});

card2.forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = "./headSet.html";
    });
});

card3.forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = "./boot.html";
    });
});

card4.forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = "./bag.html";
    });
});


