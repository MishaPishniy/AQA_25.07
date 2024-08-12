const { message } = require("prompt");

function squareRoot (number) {
    if ( number < 0) {
        throw new Error ("НЕ можимо робити обчислення для негативного значення квадратного корення ");
    }
    return Math.sqrt(number);
}
try {
    let result = squareRoot(-9);
    console.log(result);
} catch (error) {

    console.error(error.message);
}