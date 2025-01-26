let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('#search-form');
let closeSearch = document.querySelector('#close');

// Gestion du menu mobile
menu?.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// Gestion de l'affichage du formulaire de recherche
searchIcon?.addEventListener('click', () => {
    searchForm.classList.toggle('active');
});

// Gestion de la fermeture du formulaire de recherche
closeSearch?.addEventListener('click', () => {
    searchForm.classList.remove('active');
});

// Gestion de la mise à jour des liens actifs
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    menu?.classList.remove('fa-times');
    navbar?.classList.remove('active');

    sections.forEach((sec) => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
};