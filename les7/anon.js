let sum = function(a, b) {
    return a + b;
};
console.log(sum(5, 3));

let numbers = [1, 2, 3, 4];
let squares = numbers.map(function(number) {
    return number * number;
});
console.log(squares);

document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});

let multiply = (a, b) => a * b;
console.log(multiply(4, 3));

(function() {
    console.log("This function is called immediately!");
})();


(function() {
    console.log("Це теж IIFE!");
}());
