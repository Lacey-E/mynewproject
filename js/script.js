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









// // get meal list that matches with the ingredients
// function getMealList(){
//     let searchInputTxt = document.getElementById('search-input').value.trim();
//     fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchInputTxt}&apiKey=27b464b658c445bc9a29ecebb5acd964`)
//     .then(response => response.json())
//     .then(data => {
//         let html = "";
//         if(data.results){
//             data.results.forEach(result => {
//                 html += `
//                     <div class = "meal-item" data-id = "${result.id}">
//                         <div class = "meal-img">
//                             <img src = "${result.image}" alt = "food">
//                         </div>
//                         <div class = "meal-name">
//                             <h3>${result.title}</h3>
//                             <a href = "#" class = "recipe-btn">Get Recipe</a>
//                         </div>
//                     </div>
//                 `;
//             });
           
//         } else{
//             html = "Sorry, we didn't find any meal!";
            
//         }

     
//     });
// }


// // get recipe of the meal
// function getMealRecipe(e){
//     e.preventDefault();
//     if(e.target.classList.contains('recipe-btn')){
//         let resultItem = e.target.parentElement.parentElement;
//         fetch(`https://api.spoonacular.com/recipes/${resultItem.dataset.id}/tasteWidget.json`)
//         .then(response => response.json())
//         .then(data => resultRecipeModal(data.meals));
//     }
// }

// // create a modal
// function resultRecipeModal(result){
//     console.log(result);
//     result = result[0];
//     let html = `
//         <h2 class = "recipe-title">${meal.strMeal}</h2>
//         <p class = "recipe-category">${meal.strCategory}</p>
//         <div class = "recipe-instruct">
//             <h3>Instructions:</h3>
//             <p>${meal.strInstructions}</p>
//         </div>
//         <div class = "recipe-meal-img">
//             <img src = "${meal.strMealThumb}" alt = "">
//         </div>
//         <div class = "recipe-link">
//             <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
//         </div>
//     `;
//     mealDetailsContent.innerHTML = html;
//     mealDetailsContent.parentElement.classList.add('showRecipe');
// }