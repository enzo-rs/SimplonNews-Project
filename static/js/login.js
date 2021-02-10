/* Signin redirection start */
function changePage() {
    let link = document.querySelector('div.form-links > a:not(.active)');

    link.addEventListener('click', () => {
        document.location.href = "../../index.html"
    })
}
changePage()

/* Signin redirection end */


/* API : login start */

let formElement = document.form1;
let emailInput = formElement.email;
let passwordInput = formElement.password;
let submit = formElement.signin;


function accessUser(email, password) {
    let fetch_config = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
        })
    }

    fetch("https://simplonews.brianboudrioux.fr/users/login", fetch_config)
        .then(function (response) {

            if (response.status == 400) {
                alertBox(`Email ou mot de passe incorrect.`);
                let cross = document.querySelectorAll('.errors-container .fa-times');

                cross.forEach((e) => {
                    e.addEventListener('click', () => {
                        e.parentElement.parentElement.remove()
                    })
                })
            } else
                response.json()
                .then(function (data) {
                    export let token = data.token;
                    document.location.href = '../views/home.html'

                })
                
        })
}

function validateForm() {

    if (passwordInput.value == null || passwordInput.value == "") {
        return false;
    } else if (emailInput.value == null || emailInput.value == "") {
        return false;
    } else {
        return true
    }
}


function alertBox(string) {
    let container = document.querySelector('main .errors-container');
    let error = document.createElement('div');
    error.classList.add('errors');
    error.innerHTML = `<p>${string}<p>
    <i class="fas fa-times"></i>`;
    container.appendChild(error)
}

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;


    let cross = document.querySelectorAll('.errors-container .fa-times');

    cross.forEach((e) => {
        e.addEventListener('click', () => {
            e.parentElement.parentElement.remove()
        })
    })


    if (validateForm()) {
        accessUser(emailValue, passwordValue);
        emailInput.value = "";
        passwordInput.value = "";
        document.querySelector('.errors-container').textContent = '';
    } else {

    }
})



/* API : login end */