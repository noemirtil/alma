// Contact form
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