//#MARK: Translations
const translations = {
    esp: {
        // "subtitle": "Abogada en París y Barcelona",
        // "accueil-mob": "Inicio",
        // "cabinet-mob": "El despacho",
        // "domaines-mob": "Servivios",
        // "engagement-mob": "Mi compromiso",
        // "honoraires-mob": "Honorarios",
        // "contact-mob": "Contacto",
        "submit": `Enviar&nbsp;&nbsp;&nbsp;<img class="arrow" src="img/arrow.svg" class= "reverse" alt="Icono enviar" >`,
        "result1": "<p>Enviando tu mensaje...</p>",
        "result2": `<p>¡Gracias por tu mensaje!\n\nTe responderé en cuanto pueda</p>`,
        "result3": `<p>Algo no ha salido bien, lo siento</p>`,
    },
    fra: {
        // "subtitle": "Avocate à Paris et Barcelone",
        // "accueil-mob": "Accueil",
        // "cabinet-mob": "Le cabinet",
        // "domaines-mob": "Domaines<br>d'intervention",
        // "engagement-mob": "Mon engagement",
        // "honoraires-mob": "Honoraires",
        // "contact-mob": "Contact",
        // "submit": `Envoyer&nbsp;&nbsp;&nbsp;<img class="arrow" src="img/arrow.svg" class= "reverse" alt="Icono enviar" >`,
        "result1": "<p>Envoi du message en cours...</p>",
        "result2": `<p>Merci pour ton message!\n\nJe te répondrai\ndès que possible</p>`,
        "result3": "<p>Quelque chose n'a pas fonctionné, désolée...</p>",
    },
    eng: {
        // "subtitle": "Lawyer in Paris and Barcelona",
        // "accueil-mob": "Home",
        // "cabinet-mob": "The firm",
        // "domaines-mob": "Services",
        // "engagement-mob": "My commitment",
        // "honoraires-mob": "Fees",
        // "contact-mob": "Contact",
        // "submit": `Send&nbsp;&nbsp;&nbsp;<img class="arrow" src="img/arrow.svg" class= "reverse" alt="Icono enviar" >`,
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
    // t9n("subtitle");
    // t9n("accueil-mob");
    // t9n("cabinet-mob");
    // t9n("domaines-mob");
    // t9n("engagement-mob");
    // t9n("honoraires-mob");
    // t9n("contact-mob");
    // t9n("submit");
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
                localStorage.setItem('langPref', 'esp');
                break;
            case 'fra-mob':
                language = "fra";
                translate();
                updateLangStatus('fra');
                localStorage.setItem('langPref', 'fra');
                break;
            case 'eng-mob':
                language = "eng";
                translate();
                updateLangStatus('eng');
                localStorage.setItem('langPref', 'eng');
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

