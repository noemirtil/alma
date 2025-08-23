//#MARK: Translations
const translations = {
    esp: {
        // "drop-lang-btn": "Español",
        // "home-mob": "Inicio",
        // "contact-mob": "Contacto",
        // "home-desk": "Inicio",
        // "contact-desk": "Contacto",
        // "contact-title": "Contacto",
        // "nombre-label": "Nombre",
        // "pronombre-label": "Apellido",
        // "email-label": "Email",
        // "mensaje-label": "Mensaje",
        "submit": `Enviar&nbsp;&nbsp;&nbsp;<img class="arrow" src="img/arrow.svg" class= "reverse" alt="Icono enviar" >`,
        "result1": "<p>Enviando tu mensaje...</p>",
        "result2": `<p>¡Gracias por tu mensaje!\n\nTe responderé en cuanto pueda</p>`,
        "result3": `<p>Algo no ha salido bien, lo siento</p>`,
    },
    fra: {
        // "drop-lang-btn": "Français",
        // "home-mob": "Accueil",
        // "contact-mob": "Contact",
        // "home-desk": "Accueil",
        // "contact-desk": "Contact",
        // "contact-title": "Contact",
        // "nombre-label": "Prénom",
        // "pronombre-label": "Nom",
        // "email-label": "E-mail",
        // "mensaje-label": "Message",
        "submit": `Envoyer&nbsp;&nbsp;&nbsp;<img class="arrow" src="img/arrow.svg" class= "reverse" alt="Icono enviar" >`,
        "result1": "<p>Envoi du message en cours...</p>",
        "result2": `<p>Merci pour ton message!\n\nJe te répondrai\ndès que possible</p>`,
        "result3": "<p>Quelque chose n'a pas fonctionné, désolée...</p>",
    },
    eng: {
        // "drop-lang-btn": "English",
        // "home-mob": "Home",
        // "contact-mob": "Contact",
        // "home-desk": "Home",
        // "contact-desk": "Contact",
        // "contact-title": "Contact",
        // "nombre-label": "First name",
        // "pronombre-label": "Last name",
        // "email-label": "E-mail",
        // "mensaje-label": "Message",
        "submit": `Send&nbsp;&nbsp;&nbsp;<img class="arrow" src="img/arrow.svg" class= "reverse" alt="Icono enviar" >`,
        "result1": "<p>Sending your message...</p>",
        "result2": `<p>Thanks for your message!\n\nI'll get in touch asap</p>`,
        "result3": "<p>Something went wrong, sorry...</p>",
    },
};

//MARK: Elements
const translate = () => {
    const t9n = (value) => {
        document.getElementById(value).innerHTML = translations[language][value];
    }
    // elements to translate
    // t9n("drop-lang-btn");
    // t9n("home-mob");
    // t9n("contact-mob");
    // t9n("home-desk");
    // t9n("contact-title");
    // t9n("nombre-label");
    // t9n("pronombre-label");
    // t9n("email-label");
    // t9n("mensaje-label");
    t9n("submit");
}


// set language
let language = "fra";
if (localStorage.getItem('langPref')) {
    language = localStorage.getItem('langPref');
    translate();
}
window.addEventListener("load", (event) => {
    event.preventDefault();
    document.getElementById("lang-mobile").addEventListener('click', (e) => {
        let target = e.target;
        switch (target.id) {
            case 'esp-mob':
                language = "esp";
                translate();
                updateLangStatus('esp');
                // toggleMenu();
                break;
            case 'fra-mob':
                language = "fra";
                translate();
                updateLangStatus('fra');
                // toggleMenu();
                break;
            case 'eng-mob':
                language = "eng";
                translate();
                updateLangStatus('eng');
                // toggleMenu();
                break;
        }
    });
    // document.getElementById("lang-desktop").addEventListener('click', (e) => {
    //     let target = e.target;
    //     switch (target.id) {
    //         case 'esp-desk':
    //             language = "esp";
    //             translate();
    //             updateLangStatus('esp');
    //             localStorage.setItem('langPref', 'esp');
    //             break;
    //         case 'fra-desk':
    //             language = "fra";
    //             translate();
    //             updateLangStatus('fra');
    //             localStorage.setItem('langPref', 'fra');
    //             break;
    //         case 'eng-desk':
    //             language = "eng";
    //             translate();
    //             updateLangStatus('eng');
    //             localStorage.setItem('langPref', 'eng');
    //             break;
    //     }
    // });
});

//#region Language status
const langItems = {
    'esp': ['esp-mob', 'esp-desk'],
    'fra': ['fra-mob', 'fra-desk'],
    'eng': ['eng-mob', 'eng-desk']
};

const updateLangStatus = (currentLang) => {
    Object.keys(langItems).forEach(lang => {
        langItems[lang].forEach(item => {
            if (lang === currentLang) {
                document.getElementById(item).classList.add("current-page");
                document.getElementById(item).classList.remove("current-not");
            } else {
                document.getElementById(item).classList.add("current-not");
                document.getElementById(item).classList.remove("current-page");
            }
        });
    });
}
//#endregion

