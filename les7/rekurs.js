function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));


// factorial(5) викликати 5 * factorial(5 -1 = 4)
// factorial(4) викликати 4 * factorial(3)
// factorial(3) викликати 3 * factorial(2)
// factorial(2) викликати 2 * factorial(1)
// factorial(1) викликати 1 * factorial(0)
// factorial(0) викликає n === 0 тобто  return 1


function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 120
