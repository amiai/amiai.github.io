var count = 0;

function menu(x) {
    x.classList.toggle("change");
}

function toggleMenu() {
    var menu = document.getElementById('menu');
    var x = window.matchMedia("(max-width: 600px)");

    if (menu.style.display == "block" && x.matches) {
        menu.style.display = "none";
    }
    else if (menu.style.display == "none" && x.matches) {
    }
    else if (menu.style.display == "none" && !x.matches) {
        menu.style.display = "block";
    }
    // else {
    //     menu.style.display = "block";
    // }
    count += 1;
}

function openMenu() {
    document.getElementById('menu').style.width = "100%";

    if (count % 2 == 1) {
        closeMenu();
    }
}

function closeMenu() {
    document.getElementById("menu").style.width = "0";
}