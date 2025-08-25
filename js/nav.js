// Built by Noemie Baudouin https://github.com/noemirtil
const toggleMenu = () => {
    document.getElementById("nav-mobile").classList.toggle("show-mob");
    document.getElementById("shadow").classList.toggle("show-mob");
    document.getElementById("burger").classList.toggle("burger--open");
    document.getElementById("heading").classList.toggle("heading-hidden");
    document.getElementById("lang-set").classList.toggle("lang-set-hidden");
}

const menuItems = {
    'accueil': ['accueil-mob', 'accueil-desk'],
    'cabinet': ['cabinet-mob'],
    'domaines': ['domaines-mob'],
    'engagement': ['engagement-mob', 'engagement-desk'],
    'honoraires': ['honoraires-mob'],
    'contact': ['contact-mob', 'contact-desk']
};

const updateMenuStatus = (currentPage) => {
    Object.keys(menuItems).forEach(page => {
        menuItems[page].forEach(item => {
            if (page === currentPage) {
                document.getElementById(item).classList.add("current-page");
                document.getElementById(item).classList.remove("current-not");
            } else {
                document.getElementById(item).classList.add("current-not");
                document.getElementById(item).classList.remove("current-page");
            }
        });
    });
}

window.addEventListener("load", (event) => {
    event.preventDefault();
    document.getElementById("burger").addEventListener('click', () => { toggleMenu(); });
    document.getElementById("nav-mobile").addEventListener('click', (e) => {
        let target = e.target;
        switch (target.id) {
            case 'accueil-mob':
                updateMenuStatus('accueil');
                toggleMenu();
                break;
            case 'cabinet-mob':
                updateMenuStatus('cabinet');
                toggleMenu();
                break;
            case 'domaines-mob':
                updateMenuStatus('domaines');
                toggleMenu();
                break;
            case 'engagement-mob':
                updateMenuStatus('engagement');
                toggleMenu();
                break;
            case 'honoraires-mob':
                updateMenuStatus('honoraires');
                toggleMenu();
                break;
            case 'contact-mob':
                updateMenuStatus('contact');
                toggleMenu();
                break;
        }
    });
    document.getElementById("nav-desktop").addEventListener('click', (e) => {
        let target = e.target;
        switch (target.id) {
            case 'accueil-desk':
                updateMenuStatus('accueil');
                break;
            case 'engagement-desk':
                updateMenuStatus('engagement');
                break;
            case 'contact-desk':
                updateMenuStatus('contact');
                break;
        }
    });
});

// updateMenuStatus on scroll
let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

document.addEventListener('DOMContentLoaded', (e) => {
    window.addEventListener('scroll', function () {
        if (viewportWidth < 450) {
            if (window.pageYOffset < 40) {
                updateMenuStatus('accueil');
            }
            if (window.pageYOffset > 300 && window.pageYOffset < 450) {
                updateMenuStatus('cabinet');
            }
            if (window.pageYOffset > 450 && window.pageYOffset < 1900) {
                updateMenuStatus('domaines');
            }
            if (window.pageYOffset > 1900 && window.pageYOffset < 2300) {
                updateMenuStatus('engagement');
            }
            if (window.pageYOffset > 2500 && window.pageYOffset < 2800) {
                updateMenuStatus('honoraires');
            }
            if (window.pageYOffset > 2800) {
                updateMenuStatus('contact');
            }
        }
        if (viewportWidth >= 450 && viewportWidth <= 1000) {
            if (window.pageYOffset < 40) {
                updateMenuStatus('accueil');
            }
            if (window.pageYOffset > 200 && window.pageYOffset < 450) {
                updateMenuStatus('cabinet');
            }
            if (window.pageYOffset > 450 && window.pageYOffset < 1600) {
                updateMenuStatus('domaines');
            }
            if (window.pageYOffset > 1600 && window.pageYOffset < 2100) {
                updateMenuStatus('engagement');
            }
            if (window.pageYOffset > 2100 && window.pageYOffset < 2500) {
                updateMenuStatus('honoraires');
            }
            if (window.pageYOffset > 2500) {
                updateMenuStatus('contact');
            }
        }
        if (viewportWidth > 1000) {
            if (window.pageYOffset < 40) {
                updateMenuStatus('accueil');
            }
            if (window.pageYOffset > 600 && window.pageYOffset < 1000) {
                updateMenuStatus('engagement');
            }
            if (window.pageYOffset > 1300) {
                updateMenuStatus('contact');
            }
        }
    });
});