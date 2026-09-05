numbers.forEach(function(number) {
    console.log(number);
});

let squaredNumbers = numbers.map(function (number) {
    return number * number;
});

console.log(squaredNumbers);

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers);

let foundNumber = numbers.find(function(number) {
    return number > 3;
});