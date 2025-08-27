// Built by Noemie Baudouin https://github.com/noemirtil
// Contact form

const checkPrenom = () => {
    let prenomLabel = document.getElementById("prenom-label");
    if (document.getElementById("prenom").value !== "") {
        prenomLabel.innerHTML = prenomLabel.innerHTML.replace("*", "✓");
    }
    else {
        prenomLabel.innerHTML = prenomLabel.innerHTML.replace("✓", "*");
    }
}

const checkNom = () => {
    let nomLabel = document.getElementById("nom-label");
    if (document.getElementById("nom").value !== "") {
        nomLabel.innerHTML = nomLabel.innerHTML.replace("*", "✓");
    }
    else {
        nomLabel.innerHTML = nomLabel.innerHTML.replace("✓", "*");
    }
}

// Prevent pasting email confirmation
document.getElementById("email-confirm").addEventListener('paste', e => e.preventDefault());

const confirmEmail = () => {
    let email = document.getElementById("email").value;
    let confemail = document.getElementById("email-confirm").value;

    let emailLabel = document.getElementById("email-label");
    if (email == confemail && (confemail.length > 5) && (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(confemail)) {
        emailLabel.style.color = "black";
        emailLabel.innerHTML = translations[language]["rightEmail"];
    }
    else if (email == confemail) {
        emailLabel.style.color = "red";
        emailLabel.innerHTML = translations[language]["wrongEmail"];
    }
    else {
        emailLabel.style.color = "red";
        emailLabel.innerHTML = translations[language]["matchEmail"];
    }
}

const checkTel = () => {
    let telephone = document.getElementById("telephone").value;

    let telLabel = document.getElementById("tel-label");
    if (telephone == "") {
        telLabel.style.color = "black";
        telLabel.innerHTML = translations[language]["tel"];
    }
    else if ((/^[+.,):(0-9\s\-]{3,40}$/).test(telephone)) {
        // allows numbers, plus, parenthesis, spaces, hyphens, colons, dots, commas
        telLabel.style.color = "black";
        telLabel.innerHTML = translations[language]["rightTel"];
    }
    else {
        telLabel.style.color = "red";
        telLabel.innerHTML = translations[language]["wrongTel"];
    }
}

const checkMessage = () => {
    let messageLabel = document.getElementById("message-label");
    if (document.getElementById("message").value.length > 10) {
        messageLabel.innerHTML = messageLabel.innerHTML.replace("*", "✓");
    }
    else {
        messageLabel.innerHTML = messageLabel.innerHTML.replace("✓", "*");
    }
}

const checkConsent = () => {
    let consentLabel = document.getElementById("consent-label");
    if (document.getElementById("consent").checked) {
        consentLabel.innerHTML = consentLabel.innerHTML.replace("*", "✓");
    }
    else {
        consentLabel.innerHTML = consentLabel.innerHTML.replace("✓", "*");
    }
}

const form = document.getElementById('form');
const resultId = document.getElementById('result');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    resultId.innerHTML = translations[language]["result1"];
    document.getElementById("form-shadow").classList.add("show-form");

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })

        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                resultId.innerHTML = translations[language]["result2"];
            } else {
                console.log(response);
                resultId.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            resultId.innerHTML = translations[language]["result3"];
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                resultId.style.display = "none";
                document.getElementById("form-shadow").classList.remove("show-form");
            }, 2500);
        });
});