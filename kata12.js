//The Great Codeville Bake-off

function ingredientCheck(bakeryArray, recipeIngredientArray) {
  let possess = false;
  for (let i = 0; i < bakeryArray.length; i++) {
    if (bakeryArray[i] === recipeIngredientArray[0] || bakeryArray[i] === recipeIngredientArray[1]) {
      possess = true;
    }
  }
  return possess;
}

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let possessA = false;
  let possessB = false;

  for (let i = 0; i < recipes.length; i++) {
    possessA = ingredientCheck(bakeryA, recipes[i].ingredients);
    possessB = ingredientCheck(bakeryB, recipes[i].ingredients);
    if (possessA && possessB) {
      return recipes[i].name;
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
