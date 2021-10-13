const assertEquals = require('./test-framework')
const basket = require('../src/basket.js')
const bagelInBasket = require('../src/basket.js')

console.log('Test 1:')
//Arrange
let basket = 0
let expectedOutput = 1

//Act 
let actualOutput = bagelInBasket

//Assert
let result = assertEquals(actualOutput, expectedOutput)
console.log(result);


console.log('Test 2')
//Arrange
basket = ['cheese', 'butter', 'nutella']
expectedOutput = ['cheese', 'butter']

//Act 
actualOutput = bagelsInBasket

//Assert
result = assertEquals(actualOutput, expectedOutput)
console.log(result);

