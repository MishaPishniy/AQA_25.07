const prompt=require("prompt-sync")({sigint:true}); 

let first_name = "Hannah";
let second_name = "John";
let hello = "Hello, ";

console.log("Hello, " + first_name + "!");
console.log(hello.concat(second_name, "!"));
let third_name = prompt("And what's your name? ");

let greeting = "It's getting crowded here!" + '\n' + 
                `Welcome, ${first_name}, ${second_name} and ${third_name}!`

console.log(greeting);