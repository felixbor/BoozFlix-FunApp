


fetchDrink()
function fetchDrink() {

    var ingredient = "Gin"
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}


fetchMovie()
function fetchMovie() {

    var ingredient = "Gin"
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=85bb4e2df2ca0ae4497039fe74f9a9ba&with_genres=28&page_1&sort_by=popularity.desc")

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}