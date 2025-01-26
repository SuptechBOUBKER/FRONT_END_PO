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


// Configuration de Swiper pour la section des avis
var swiper = new Swiper(".review-slider", {
    spaceBetween: 10, // Espace entre chaque diapositive en pixels
    centeredSlides: false, // Les diapositives ne seront pas centrées
    autoplay: {
        delay: 6500, // Délai entre les défilements automatiques en millisecondes
        disableOnInteraction: false, // Continuer l'autoplay même après interaction
    },
    loop: true, // Permet de faire défiler les diapositives en boucle
    breakpoints: {
        0: {
            slidesPerView: 1, // 1 diapositive vue sur les petits écrans
            spaceBetween: 10 // Moins d'espace pour les petits écrans
        },
        640: {
            slidesPerView: 1, // 2 diapositives vues sur les écrans moyens
            spaceBetween: 10 // Un peu plus d'espace pour les écrans moyens
        },
        1024: {
            slidesPerView: 2, // 3 diapositives vues sur les grands écrans
            spaceBetween: 10 // Plus d'espace pour les grands écrans
        },
        1440: {
            slidesPerView: 4, // 4 diapositives vues sur les très grands écrans
            spaceBetween: 10 // Encore plus d'espace pour les très grands écrans
        }
    }
});

