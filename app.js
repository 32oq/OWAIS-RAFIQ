var d2 = document.querySelector(".d2");
var p = document.querySelector(".pdiv");
d2.onclick = function() {
    d2.classList.toggle("actived2");
    darkmode();
    if (p.innerHTML == "ON") {
        p.innerHTML = "OFF";
    } else {
        p.innerHTML = "ON";
    }
}

function darkmode() {



    var heading = document.querySelector(".navbar-brand");
    var navbar = document.querySelector(".navbar");
    var doc = document.body;
    doc.classList.toggle("darkmode");
    heading.classList.toggle("myname");
    navbar.classList.toggle("navbar-dark");


    p.classList.toggle("pdivactive");
}
