
/* Signin redirection start */
function changePage() {
    let link = document.querySelector('div.form-links > a:not(.active)');

    link.addEventListener('click', () => {
        document.location.href = "../../index.html"
    })
}
changePage()

/* Signin redirection end */