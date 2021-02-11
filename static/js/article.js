const theArticle = sessionStorage.getItem('token')
    console.log(theArticle);
       

// fetch ('https://api.thecatapi.com/v1/images/search')
// //.then(res => console.log(res))
// //fetch ("https://simplonews.brianboudrioux.fr")
// .then(res => {
//     console.log(res);

//     if(res.ok){
//         res.json().then(data => {
//             img.src = data[0].url

//         })

//     }else{
//         console.log( "error");
//         document.gitElementById('Error').innerHTML = "Error"
//     }
// })