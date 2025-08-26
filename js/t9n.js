// Built by Noemie Baudouin https://github.com/noemirtil
//#MARK: Translations
const translations = {
    es: {
        // "submit": `Enviar&nbsp;&nbsp;&nbsp;<img class="arrow" src="img/arrow.svg" class= "reverse" alt="Icono enviar" >`,
        "tel": "Teléfono",
        "rightTel": "Teléfono ✓",
        "wrongTel": "Ingrese un número válido por favor",
        "rightEmail": "Correo electrónico ✓",
        "wrongEmail": "El correo de confirmación debe coincidir",
        "result1": "<p>Enviando su mensaje...</p>",
        "result2": `<p>¡Gracias por su mensaje!\n\nLe responderé cuanto antes</p>`,
        "result3": `<p>Algo no ha salido bien, lo siento</p>`,
    },
    fr: {
        // "submit": `Envoyer&nbsp;&nbsp;&nbsp;<img class="arrow" src="img/arrow.svg" class= "reverse" alt="Icono enviar" >`,
        "tel": "Téléphone",
        "rightTel": "Téléphone ✓",
        "wrongTel": "Insérer un numéro valide SVP",
        "rightEmail": "Adresse email ✓",
        "wrongEmail": "L'email de confirmation doit correspondre",
        "result1": "<p>Envoi du message en cours...</p>",
        "result2": `<p>Merci pour votre message!\n\nJe vous répondrai\ndès que possible</p>`,
        "result3": "<p>Quelque chose n'a pas fonctionné, désolée</p>",
    },
    en: {
        // "submit": `Send&nbsp;&nbsp;&nbsp;<img class="arrow" src="img/arrow.svg" class= "reverse" alt="Icono enviar" >`,
        "tel": "Phone",
        "rightTel": "Phone ✓",
        "wrongTel": "Please enter a valid phone number",
        "rightEmail": "Email ✓",
        "wrongEmail": "The confirmation email has to match",
        "result1": "<p>Sending your message...</p>",
        "result2": `<p>Thanks for your message!\n\nI'll get in touch as soon as possible</p>`,
        "result3": "<p>Something went wrong, sorry</p>",
    },
};

//MARK: Elements
// const translate = () => {
//     const t9n = (value) => {
//         document.getElementById(value).innerHTML = translations[language][value];
//     }
//     // elements to translate
//     // t9n("submit");
// }

// set language
let language = document.getElementsByTagName("html")[0].getAttribute("lang");
// window.addEventListener("load", (event) => {
//     event.preventDefault();
//     document.getElementById("lang-set").addEventListener('click', (e) => {
//         let target = e.target;
//         switch (target.id) {
//             case 'espanol':
//                 // language = "es";
//                 translate();
//                 updateLangStatus('espanol');
//                 console.log(language);
//                 break;
//             case 'francais':
//                 // language = "fr";
//                 translate();
//                 updateLangStatus('francais');
//                 console.log(language);
//                 break;
//             case 'english':
//                 // language = "en";
//                 translate();
//                 updateLangStatus('english');
//                 console.log(language);
//                 break;
//         }
//     });
// });

// const langItems = ['espanol', 'francais', 'english'];
// const updateLangStatus = (currentLang) => {
//     document.getElementById(currentLang).classList.add("current-page");
//     document.getElementById(currentLang).classList.remove("current-not");
//     langItems.forEach(lang => {
//         if (lang != currentLang) {
//             document.getElementById(lang).classList.add("current-not");
//             document.getElementById(lang).classList.remove("current-page");
//         }
//     })
// }

