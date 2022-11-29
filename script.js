fetchDrink()
function fetchDrink() {
    
    var ingredient= "Gin"
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
    
    var ingredient= "Gin"
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=7f9c672a")

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
    }