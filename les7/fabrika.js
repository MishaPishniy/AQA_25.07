function createGreeting(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");

console.log(sayHello("John"));
console.log(sayHi("Misha"));

function createMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));



console.log(outerFunction());



function outerFunction() {
    let outerVariable = "Я ззовні!";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;

}
const myClosure = outerFunction(); 
myClosure(); 