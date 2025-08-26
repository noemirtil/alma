// Built by Noemie Baudouin https://github.com/noemirtil
// Contact form
const form = document.getElementById('form');
const resultId = document.getElementById('result');

const confirmEmail = () => {
    let email = document.getElementById("email").value;
    let confemail = document.getElementById("email-confirm").value;
    if (email != confemail) {
        document.getElementById("email-label").style.color = "red";
        document.getElementById("email-label").innerHTML = translations[language]["wrongEmail"];
        console.log("wrong");
    }
    else {
        document.getElementById("email-label").style.color = "black";
        document.getElementById("email-label").innerHTML = translations[language]["rightEmail"];
    }
}

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