// for show and hide password:
const pasInput = document.getElementById("password");
const eye = document.getElementById("eye");
eye.addEventListener('click', function () {
    if (pasInput.type === "password") {
        pasInput.type = "text";
    }
    else {
        pasInput.type = "password";
        pasInput.classList.add("visible");
    }
});

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("hideSignBtn", "true");
    window.opener.postMessage("submitClicked", "*");
    window.close();
})

