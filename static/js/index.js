/* Gestion Erreurs Form Start*/

let form = document.querySelector('form');

// On selectionne les différents input du form
let email = form1.email;
let userName = form1.username;
let password = form1.password;


function validateForm() {

    if (userName.value == null || userName.value == "") {
        return false;
    } else if (password.value == null || password.value == "") {
        return false;
    } else {
        return true
    }
}

function validateEmail() {
    var emailValue = document.form1.email.value; // on récupère la valeur entrée dans l'input email
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Chaine de caractère de la forme suivante : "example@.fr"
    if (emailValue.match(mailformat)) {
        return true;
    } else {
        return false;
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateEmail()) {
        alertBox('Veuillez entrer une adresse mail valide');
    } 
    else if (!validatePasswordLength()) {
        alertBox('Votre mot de passe doit contenir au moins 8 caractères')
    }
    else if (validateForm() && validateEmail()) {
        email.value = "";
        userName.value = "";
        password.value = "";
        document.querySelector('.errors-container').textContent = '';
    }
})






// Création de la fonction alertBox

function alertBox(string) {
    let container = document.querySelector('main .errors-container');
    let error = document.createElement('div');
    error.classList.add('errors');
    error.innerHTML = `<p>${string}<p>
    <i class="fas fa-times"></i>`;
    container.appendChild(error)
}



// vérifier la longueur du mdp
function validatePasswordLength() {
    var passwordValueLength = document.form1.password.value.length;

    if (passwordValueLength < 8) {
        return false
    }
    else {
        return true
    }
}

let cross = document.querySelectorAll('.errors-container .fa-times');

cross.forEach((e) => {
    e.addEventListener('click', () => {
        e.parentElement.parentElement.remove() 
     })
})


/* Gestion Erreurs Form End*/