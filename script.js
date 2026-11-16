
// 1. WELCOME MESSAGE

function welcome() {

    alert("Hello! Welcome to Stacy's Portfolio! Thank you for visiting my website.");

}

// 2. DARK MODE

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "Light Mode";

    } else {

        themeButton.textContent = "Dark Mode";

    }

});

// 3. MOBILE NAVIGATION MENU

const menuButton = document.getElementById("menuButton");

const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function() {

    navLinks.classList.toggle("show");

});

// Close the menu after clicking a link

const links = navLinks.querySelectorAll("a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");

    });

});