//Drinks section
var Dname = "";
var ingredient = "";
$(".search").on("click", function (event) {
  event.preventDefault();
  var ingredient = $(".selectDrink").val();
  if(ingredient!=""){
  console.log(ingredient);
  $("#placeholderImg").hide();
  $(".result").empty();
  $(".ingrMes").empty();
  $(".ingr").empty();
  $(".measure").empty();
  $("#email").hide()
  fetchDrink();
}
  function fetchDrink() {
    console.log(ingredient);
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        displayDrinks(data.drinks);
      });
  }
});

function displayDrinks(data) {
  if (data.length > 10) {
    data.length = 10;
  }
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    $(".result").append(`<button>${element.strDrink}</button>`);
  }
}
$(".result").on("click", selectDrink);
function selectDrink(event) {
  Dname = event.target.textContent;
  fetchRecipe(Dname);
  $(".ingrMes").empty();
  $(".ingr").empty();
  $(".measure").empty();
  $("#email").show();
}

function fetchRecipe(name) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displayRecipe(data);
    });
}

function displayRecipe(data) {
  var recipe = data.drinks[0].strInstructions;
  var DrinkImage = data.drinks[0].strDrinkThumb;
  for (const [key, value] of Object.entries(data.drinks[0])) {
    if (key.includes("strIngredient")) {
      if (value != null) {
        $(".ingr").append(`<p>${value}</p>`);
      }
      console.log(value);
    }
  }
  for (const [key, value] of Object.entries(data.drinks[0])) {
    if (key.includes("strMeasure")) {
      if (value != null) {
        $(".measure").append(`<p>${value}</p>`);
      }
      console.log(value);
    }
  }

  $(".ingrMes").append(`<p>${recipe}</p>` + `<img src=${DrinkImage}>`);

  console.log($(".ingrMes").text());
  saveLocalstorage();
}

function saveLocalstorage() {
  var Drinkrecipe =
    $(".ingrMes").text() + $(".measure").text() + $(".ingr").text();

  var object = {
    Drikname: Dname,
    instruction: Drinkrecipe,
  };
  localStorage.setItem("SaveDrink", JSON.stringify(object));
}

getLocalstorage();
function getLocalstorage() {
  $(".getRecipe").on("click", function (event) {
    event.preventDefault();
    console.log("works");
    var LocalDAta = localStorage.getItem("SaveDrink");
    console.log(LocalDAta);
  });
}

//Movies Section

var movieAPITest =
  "https://api.themoviedb.org/3/discover/movie?api_key=85bb4e2df2ca0ae4497039fe74f9a9ba&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
var posterPic = "https://image.tmdb.org/t/p/w500/";
var searchMovieParam =
  "https://api.themoviedb.org/3/search/movie?api_key=85bb4e2df2ca0ae4497039fe74f9a9ba&query=";
var movieSuggestionsView = document.getElementById("movieSuggestionsView");
var movieSearch = document.getElementById("movieSearch");
var movieInput = document.getElementById("movieInput");

getSuggestions(movieAPITest);

function getSuggestions(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);

      showSuggestions(data.results);
    });
}

function showSuggestions(data) {
  movieSuggestionsView.innerHTML = "";
  data.forEach((movie) => {
    var movieInformation = document.createElement("div");
    var { title, poster_path, overview } = movie;
    movieInformation.classList.add("movieSuggestionsView");
    movieInformation.innerHTML = `
        <div id="titlePoster">
            <h4>${title}</h4>
            <img src="${posterPic + poster_path}" alt="${title}">
        </div>

        <div id="movieInfo">
            <h5>Synposis</h5>
            <p>${overview}</p>
        </div>
        `;
    movieSuggestionsView.appendChild(movieInformation);
  });
}

movieSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  var searchMovie = movieInput.value;
  if (searchMovie) {
    getSuggestions(searchMovieParam + searchMovie);
  }
});