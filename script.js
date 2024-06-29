// Sélection des éléments du DOM pour le menu et la barre de navigation
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

// Gestion de l'événement 'onclick' pour le menu
menu.onclick = () => {
    menu.classList.toggle('fa-times'); // Ajoute ou retire la classe 'fa-times' pour l'icône
    navbar.classList.toggle('active'); // Ajoute ou retire la classe 'active' pour le menu
}

// Gestion de l'affichage du formulaire de recherche
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

// Gestion de la fermeture du formulaire de recherche
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

// Sélection des sections et des liens de navigation
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

// Gestion de l'événement 'onscroll' pour la fenêtre
window.onscroll = () => {
    menu.classList.remove('fa-times'); // Retire la classe 'fa-times' pour l'icône
    navbar.classList.remove('active'); // Retire la classe 'active' pour le menu

    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        // Correction de la condition de détection de la section visible
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                // Sélection de l'élément correspondant et ajout de la classe 'active'
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

// Configuration de Swiper pour la section des avis
var swiper = new Swiper(".review-slider", {
    spaceBetween: 10, // Espace entre chaque diapositive en pixels
    centeredSlides: false, // Les diapositives ne seront pas centrées
    autoplay: {
        delay: 5500, // Délai entre les défilements automatiques en millisecondes
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
            spaceBetween: 15 // Un peu plus d'espace pour les écrans moyens
        },
        1024: {
            slidesPerView: 2, // 3 diapositives vues sur les grands écrans
            spaceBetween: 20 // Plus d'espace pour les grands écrans
        },
        1440: {
            slidesPerView: 4, // 4 diapositives vues sur les très grands écrans
            spaceBetween: 25 // Encore plus d'espace pour les très grands écrans
        }
    }
});

