const assertEquals = require('./test-framework');
const Basket = require('../src/Basket');
const Item = require('../src/Item');
// Test 1
let basket, item, expectedOutput, result;
basket = new Basket();
item = new Item();
expected0utput = 1
basket.addItem(item);
result = assertEquals(basket.items.length,expectedOutput);
console.log(result);
result = assertEquals(basket.items.includes(item),true);
console.log(result);

// Test 2
fullBasket = new FullBasket
expectedOutput = true
result = assertEquals(basket.items.length(10), expectedOutput)
console.log(result)