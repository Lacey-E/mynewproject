const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// event listeners
searchBtn.addEventListener('click', getMealList);

function getMealList(){
 let searchInputTxt = document.getElementById('search-input').value.trim();
const apiURL = `https://api.spoonacular.com/recipes/complexSearch?query=${searchInputTxt}&apiKey=27b464b658c445bc9a29ecebb5acd964`;
  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
 
  
    
    const results = jsObject['results'];
    for (let i = 0; i < results.length; i++ ) {

      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      
      let image = document.createElement("img");

      card.setAttribute("class", `order${results[i].order}`)
      h2.textContent = `${results[i].title}`;
 
      
      image.setAttribute("src", results[i].image);
      image.setAttribute("alt", `${results[i].title}`);
      card.appendChild(h2);
     
      card.appendChild(image);

      document.querySelector("div.cards").appendChild(card);
      
    }  })}
  ;



