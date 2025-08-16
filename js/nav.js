// Mobile navigation
const toggleMenu = () => {
    document.getElementById("nav-mobile").classList.toggle("show-mob");
    document.getElementById("shadow").classList.toggle("show-mob");
    document.getElementById("burger").classList.toggle("burger--open");
    document.getElementById("header-nav").classList.toggle("header-nav");
    document.getElementById("lang-mobile").classList.toggle("header-nav");
}

const menuItems = {
    'hero': ['hero-mob', 'hero-desk'],
    'cabinet': ['cabinet-mob', 'cabinet-desk'],
    'domaines': ['domaines-mob', 'domaines-desk'],
    'honoraires': ['honoraires-mob', 'honoraires-desk'],
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
            case 'hero-mob':
                updateMenuStatus('hero');
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
    // document.getElementById("menu-section").addEventListener('click', (e) => {
    //     let target = e.target;
    //     switch (target.id) {
    //         case 'home-desk':
    //             document.getElementById("homegrid").style.display = "grid";
    //             document.getElementById("pro-page").style.display = "none";
    //             window.scrollTo({ top: 0, behavior: "smooth" });
    //             updateMenuStatus('home');
    //             break;
    //         case 'pro-desk':
    //             document.getElementById("homegrid").style.display = "none";
    //             document.getElementById("pro-page").style.display = "flex";
    //             window.scrollTo({ top: 0, behavior: "smooth" });
    //             updateMenuStatus('pro');
    //             break;
    //         case 'contact-desk':
    //             window.scrollTo({
    //                 top: document.body.scrollHeight,
    //                 behavior: 'smooth'
    //             });
    //             updateMenuStatus('contact');
    //             break;
    //     }
    // });
});

