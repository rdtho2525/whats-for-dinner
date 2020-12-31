var meal = document.getElementsByName('meal');
var pickMeal = document.querySelector('.lets-cook');
var showMeal = document.querySelector('.show-meal');
var cookpot = document.querySelector('img');
var suggestion = document.querySelector('#suggestion');
var chosenMeal = document.querySelector('#chosen-meal');
var clearButton = document.querySelector('#clear')

pickMeal.addEventListener('click', suggestRecipe);
clearButton.addEventListener('click', clearDisplayPanel)

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
      unhide(clearButton)
      unhide(suggestion)
      showMeal.classList.remove('entire-meal');
      chosenMeal.innerText = randomizeItem(mealKey[meal[i].value])
      return
    } else if (meal[3].checked) {
      unhide(clearButton)
      unhide(suggestion)
      showMeal.classList.add('entire-meal');
      chosenMeal.innerText = `${randomizeItem(mains)} with a side of ${randomizeItem(sides)}
      and ${randomizeItem(desserts)} for dessert!`
    } else {
      hide(suggestion)
      unhide(clearButton)
      chosenMeal.innerText = 'Please make a selection'
    }
  }
}

function clearDisplayPanel() {
  location.reload();
  return
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
