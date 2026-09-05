let buahPush = ['Apel', 'Pisang', 'Jeruk'];
buahPush.push('Mangga');
console.log(buahPush);

let fruitsPop = ['Apple', 'Banana', 'Orange'];
let lastFruit = fruitsPop.pop();
console.log(lastFruit);
console.log(fruitsPop);

let fruitsUnshift = ['Apple', 'Banana', 'Orange'];
fruitsUnshift.unshift('Mango');
console.log(fruitsUnshift);

let fruitShift = ['Apple', 'Banana', 'Orange'];
let firstFruit = fruitsUnshift.shift();
console.log(firstFruit);
console.log(fruitsShift);

let fruitsSplice = ['Apple', 'Banana', 'Orange'];
fruitsSplice.splice(2, 1);
console.log(fruitsSplice);
fruitsSplice.splice(0, 1, 'Strawberry');
console.log(fruitsSplice);
fruitsSplice.splice(2, 1, 'Pineapple');
console.log(fruitsSplice);

let fruitsSlice = ['Apple', 'Banana', 'Orange', 'Mango'];
let slicedFruits = fruitsSlice.slice(1, 3);
console.log(slicedFruits);

let fruits1 = ['Apple', 'Banana'];
let fruits2 = ['Orange', 'Mango'];
let combinedFruits = fruits1.concat(fruits2);
console.log(combinedFruits);

let fruitsReverse = ['Apple', 'Banana', 'Orange', 'Mango'];
fruitsReverse.reverse();
console.log(fruitsReverse);

let fruitsSort = ['Banana', 'Apple', 'Orange', 'Mango'];
fruitsSort.sort();
console.log(fruitsSort);

let fruitsJoin = ['Apple', 'Banana', 'Orange', 'Mango'];
let joinedString = fruitsJoin.join(', ');
console.log(joinedString);

let fruitsLength = ['Apple', 'Banana', 'Orange', 'Mango'];
console.log(fruitsLength.length);