var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function () {

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});


var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var card = document.getElementById("card");
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");

// Close Popup Event
closePopup.onclick = function () {
    overlay.style.display = 'none';
    popup.style.display = 'none';
    document.getElementById("card1-content").style.display = 'none';
    document.getElementById("card2-content").style.display = 'none';
    document.getElementById("card3-content").style.display = 'none';
    document.getElementById("card4-content").style.display = 'none';
    document.getElementById("card5-content").style.display = 'none';
    document.getElementById("card6-content").style.display = 'none';
};
// Show Overlay and Popup
card1.onclick = function () {
    overlay.style.display = 'block';
    popup.style.display = 'block';
    document.getElementById("card1-content").style.display = 'block';
}

card2.onclick = function () {
    overlay.style.display = 'block';
    popup.style.display = 'block';
    document.getElementById("card2-content").style.display = 'block';
}

card3.onclick = function () {
    overlay.style.display = 'block';
    popup.style.display = 'block';
    document.getElementById("card3-content").style.display = 'block';
}

card4.onclick = function () {
    overlay.style.display = 'block';
    popup.style.display = 'block';
    document.getElementById("card4-content").style.display = 'block';
}

card5.onclick = function () {
    overlay.style.display = 'block';
    popup.style.display = 'block';
    document.getElementById("card5-content").style.display = 'block';
}

card6.onclick = function () {
    overlay.style.display = 'block';
    popup.style.display = 'block';
    document.getElementById("card6-content").style.display = 'block';
}


