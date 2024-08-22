function outerFunction() {
    let outerVariable = "Я ззовні!";

    function innerFunction() {
        console.log(outerVariable);
    }

    console.log(outerVariable);
    
    return innerFunction;

}

console.log(outerFunction());



function outerFunction() {
    let outerVariable = "Я ззовні!";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;

}
const myClosure = outerFunction(); // Это вызовет console.log(outerVariable) внутри outerFunction
myClosure(); 