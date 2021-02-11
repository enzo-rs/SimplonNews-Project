
/* Get token */
let key = sessionStorage.getItem("token");
console.log(key);


class ArticleObject {
    constructor(products) {
        this.products = products;
    }


    

    createHtmlStruct() {
        let box = document.querySelectorAll('div.art')
        let structure;
        // box.forEach((e) => {
        //     structure = `<div class="box-content">
        //     <h3>${this.products[0].title}</h3>
        //     <p>${this.products[0].resume}</p>
        //     </div>`
        

        //     e.innerHTML = structure;
        // })
         for (let i=0; i<box.length; i++) {

            structure = `<div class="box-content">
            <h3>${this.products[i].title}</h3>
            <p>${this.products[i].resume}</p>
            </div>`
        

            box[i].innerHTML = structure;

         }
            

    }
}


function getArticles(token) {
    let config = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    fetch("https://simplonews.brianboudrioux.fr/articles", config)
    .then(function (response) {
        response.json()
        .then(function (articles) {
            let arr = articles.articles;
            console.log(arr);
            let articl = new ArticleObject(arr)
            articl.createHtmlStruct()
            // redirection vers la page home
        })
        .catch(function (error) {
            console.log(error);
        })
    })
    .catch(function (error) {
        console.log(error);     // Erreur 500
    })
}

getArticles(key);