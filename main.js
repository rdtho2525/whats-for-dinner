var meal = document.getElementsByName('meal');
var randomMeal = document.querySelector('.show-meal');
var inputSide = document.querySelector('#side');
var inputMain = document.querySelector('#main-dish');
var inputDessert = document.querySelector('#dessert');
var pickMeal = document.querySelector('.lets-cook');
var showMeal = document.querySelector('.show-meal');
var cookpot = document.querySelector('img');
var suggestion = document.querySelector('#suggestion');
var chosenMeal = document.querySelector('#chosen-meal');
var clearButton = document.querySelector('#clear')

pickMeal.addEventListener('click', suggestRecipe);
// clearButton.addEventListener('click', clearDisplayPanel)

function hide(element) {
  element.classList.add('hidden')
}

function unhide(element) {
  element.classList.remove('hidden');
}

function randomizeItem(array) {
  return array[getRandomIndex(array)];
}

function suggestRecipe(event) {
  event.preventDefault();
  hide(cookpot)
  unhide(chosenMeal)
  var mealKey = { sides: sides, mains: mains, desserts: desserts }
  for (i = 0; i < meal.length-1; i++) {
    if (meal[i].checked) {
      unhide(suggestion)
      chosenMeal.innerText = randomizeItem(mealKey[meal[i].value])
      return
    } else if (meal[3].checked) {
      unhide(suggestion)
      chosenMeal.innerText = `${randomizeItem(mains)} with a side of ${randomizeItem(sides)}
      and ${randomizeItem(desserts)} for dessert!`
    } else {
      hide(suggestion)
      chosenMeal.innerText = 'Please make a selection'
    }
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
