fetchWeather()
function fetchWeather() {
    
    var ingredient= "Gin"
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
    }