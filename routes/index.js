var express = require('express');
var router = express.Router();
let recipes= {
  1: {
    name: 'green salad',
    ingredients: ['lettuce','tomatoes']
  },
  2: {
    name:'burger',
    ingredients: ['bun', 'patty', 'tomatoes']
  },
  3: {
    name: 'banana bread',
    ingredients: ['bananas', 'flour', 'sugar', 'baking soda', 'eggs', 'buttermilk']
  },
  4: {
    name: 'bolognese pasta',
    ingredients: ['pasta', 'tomato sauce','carrots','oignon','celeri', 'grounded beef']
  },
  5: {
    name: 'persian rice',
    ingredients: ['basmati rice', 'pistacchios', 'almonds', 'oignons', 'apricots', 'saffron', 'butter']
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Laure', food:'banane', recipes:recipes });
});

/* GET recipe page. */
router.get('/recipe/:recipe_id', function(req, res, next) {
  let recipe_id = req.params.recipe_id;
  console.log(recipes[recipe_id]);
  res.render('recipe', { title: 'salade verte', recipe_name: 'burger', recipe:recipes[recipe_id]});
});

module.exports = router;
