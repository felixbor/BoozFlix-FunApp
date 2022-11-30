let codes = {
    "action": 28,
    "adventure": 12,
    "animation": 16,
    "comedy": 35,
    "crime": 80,
    "documentary": 99,
    "drama": 18,
    "family": 10751,
    "fantasy": 14,
    "history": 36,
    "horror": 27,
    "music": 10402,
    "mystery": 9648,
    "romance": 10749,
    "science": 878,
    "tv": 10770,
    "thriller": 53,
    "war": 10752,
    "western": 37
};

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
    
    var ingredient= "Gin"
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=85bb4e2df2ca0ae4497039fe74f9a9ba&with_genres=28&page_1&sort_by=popularity.desc")

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}