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

http://www.omdbapi.com/?i=tt3896198&apikey=7f9c672a
fetchMovie()
function fetchMovie() {

    var ingredient = "Gin"
    fetch("https://api.themoviedb.org/3/movie/550?api_key=85bb4e2df2ca0ae4497039fe74f9a9ba")

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}