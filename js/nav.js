// Built by Noemie Baudouin https://github.com/noemirtil

// Cookies modal:
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById("cookies").style.bottom = "-8rem";
    }, 2000);
});

// Navigation:
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
let targets = [];
if (window.innerWidth < 1000) {
    targets = [
        { element: document.getElementById('accueil-section'), arg: 'accueil' },
        { element: document.getElementById('cabinet-section'), arg: 'cabinet' },
        { element: document.getElementById('domaines-section'), arg: 'domaines' },
        { element: document.getElementById('engagement-section'), arg: 'engagement' },
        { element: document.getElementById('honoraires-section'), arg: 'honoraires' },
        { element: document.getElementById('contact'), arg: 'contact' },
    ];
}
else {
    targets = [
        { element: document.getElementById('accueil-section'), arg: 'accueil' },
        { element: document.getElementById('engagement-section'), arg: 'engagement' },
        { element: document.getElementById('contact'), arg: 'contact' },
    ];
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const target = targets.find((t) => t.element === entry.target);
            if (target) {
                updateMenuStatus(target.arg);
            }
        }
    });
}, {
    threshold: 0.2, // Updates when this fraction of the element is visible
    rootMargin: '-300px 0px', // Offset for the header
});

targets.forEach((target) => observer.observe(target.element));