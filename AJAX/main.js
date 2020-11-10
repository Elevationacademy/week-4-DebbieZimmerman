//spot check
// $.get("https://jsonplaceholder.typicode.com/users", function(users){

//   let catchphrase = users[users.length - 1].company.catchPhrase

// console.log(`${catchphrase}`) 
// })

//Spot check
// const useData = function (data) {
//     console.log(data)
// }

// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: useData
// })

//exercise 1-3
// const fetch = function (queryType, queryValue) {
//     $.get(`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`, function (result){
//     let books = result.items
//     for (book of books){
//         console.log(`${book.volumeInfo.title} by ${book.volumeInfo.author}, ISBN: ${book.volumeInfo.industryIdentifiers[0].identifier}`)
//     }
// }
//     )}
// fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People")

//exercise 4
// const getGif = function (type) {
//     $.get(`https://api.giphy.com/v1/gifs/search?api_key=JsVQsqXvK1Sc6WnNA6bSuSPaiCqcUYVK&q=${type}&limit=25&offset=0&rating=g&lang=en`, function (result){
//         let gif = result.data[0].embed_url
//         $('#container').append(`<iframe src=${gif}></iframe>`)
//     })
// }
// getGif("happy")

//exercise 5

$('#button').on('click', function() {
    const thing = $('#input').val()
    $('#input').val('')
    $.get(`https://api.giphy.com/v1/gifs/search?api_key=JsVQsqXvK1Sc6WnNA6bSuSPaiCqcUYVK&q=${thing}&limit=25&offset=0&rating=g&lang=en`, function(result){
        let gif = result.data[0].embed_url
        $('#container').append(`<iframe src=${gif}></iframe>`)
    })
})

//exercise 6