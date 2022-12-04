
var ingredient = ""
$(".search").on("click", function (event) {
    event.preventDefault()
    var ingredient = $(".selectDrink").val()
    console.log(ingredient)
    $(".result").empty();

    fetchDrink()



    function fetchDrink() {

        console.log(ingredient)
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)

            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                displayDrinks(data.drinks)
            })
    }
})

function displayDrinks(data) {
    if (data.length >10){
        data.length=10
    }
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        $(".result").append(`<button>${element.strDrink}</button>`);
        
    }
   

  
    
}
$(".result").on("click", selectDrink)
function selectDrink(event) {
    var name = event.target.textContent
    fetchRecipe(name)
    $(".ingrMes").empty();
    $(".ingr").empty();
    $(".measure").empty();


}

function fetchRecipe(name) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
   
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayRecipe(data)
        })

}
function displayRecipe(data) {
   
    var recipe = data.drinks[0].strInstructions
    var DrinkImage = data.drinks[0].strDrinkThumb
    for (const [key, value] of Object.entries(data.drinks[0])) {
      if(key.includes('strIngredient')){
        if (value!=null){$(".ingr").append(`<p>${value}</p>`)
    }
         console.log(value)
 }
    }
    for (const [key, value] of Object.entries(data.drinks[0])) {
       

        if(key.includes('strMeasure')){
            
          if (value!=null){$(".measure").append(`<p>${value}</p>`)
      }
           console.log(value)
   }
      }

    console.log(DrinkImage)
   var picture ="https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg"
    $(".ingrMes").append(`<p>${recipe}</p>`+`<img src=${DrinkImage}>`);
 
    }    

/*let codes = {
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

//Image slide show
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
*/