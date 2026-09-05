let x = 5;
let y = 3;

console.log("=== Operator AND (&&) ===");
let isBothTrue = (x > 0) && (y < 10);
console.log("isBothTrue:", isBothTrue);

let isAnyFalse = (x > 0) && (y > 10);
console.log("isAnyFalse:", isAnyFalse);

console.log("\n=== Operator OR (||) ===");
let isEitherTrue = (x > 0) || (y > 10);
console.log("isEitherTrue:", isEitherTrue);

let areBothFalse = (x < 0) || (y < 0);
console.log("areBothFalse:", areBothFalse);

console.log("\n=== Operator NOT (!) ===");
let isXNotZero = !(x === 0);
console.log("isXNotZero:", isXNotZero);

let isYNotPositive = !(y > 0);
console.log("isYNotPositive", isYNotPositive);

if (x > 0 && y < 20) {
    console.log("x lebih besar dari 0 dan y lebih kecil dari 20");
}