function changePage() {
    let link = document.querySelector('div.form-links > a:not(.active)');

    link.addEventListener('click', () => {
        document.location.href = "static/views/login.html"
    })
}


export {changePage};