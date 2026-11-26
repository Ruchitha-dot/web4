
// Hamburger Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});

// Team Filter

const teamFilter = document.getElementById("teamFilter");
const matchCards = document.querySelectorAll(".match-card");

teamFilter.addEventListener("change", function() {

    const selectedTeam = teamFilter.value;

    matchCards.forEach(function(card) {

        const teams = card.dataset.teams.split(" ");

        if (selectedTeam === "all" || teams.includes(selectedTeam)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

// Grid View

const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");
const matchContainer = document.getElementById("matchContainer");

gridBtn.addEventListener("click", function() {
    matchContainer.classList.remove("list-view");
});

// List View

listBtn.addEventListener("click", function() {
    matchContainer.classList.add("list-view");
});
