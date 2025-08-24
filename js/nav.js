// Mobile navigation
const toggleMenu = () => {
    document.getElementById("nav-mobile").classList.toggle("show-mob");
    document.getElementById("shadow").classList.toggle("show-mob");
    document.getElementById("burger").classList.toggle("burger--open");
    document.getElementById("heading").classList.toggle("heading-hidden");
    document.getElementById("lang-mobile").classList.toggle("lang-mobile-hidden");
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
    document.getElementById("menu-desktop").addEventListener('click', (e) => {
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

