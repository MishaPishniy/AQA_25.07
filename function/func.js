/*function sayHello(name) {
    console.log("Hello, " + name);
}
sayHello("John"); 


const greet = function(name) {
    console.log("Hi, " + name);
};
greet("John"); 


const add = (a, b) => a + b;
console.log(add(3, 4));  


(function() {
    console.log("IIFE викликана!");
})(); 

function greet(name = "Guest") {
    console.log("Hello, " + name);
}
greet("John"); 


function multiply(a, b) {
    return a * b; 
}
console.log(multiply(2, 3)); 


function doSomething(callback) {
    callback();
}

doSomething(() => {
    console.log("Колбек виконаний!");
});

function myCallBack () {
    console.log("Колбек виконаний!");
}

function doSomething(callback) {
    callback();
}

doSomething(myCallBack) 


function Person(name , age) {
    this.name = name 
    this.age = age

    this.sayHello = function() {
        console.log('Hello ' + this.name)
    }
}

const person1 = new Person ('Misha', 20)
console.log(person1.name)

person1.sayHello() */
////////

class Person {

    constructor(name,age){
        this.name = name 
        this.age = age 
    }

    sayHello(){

        console.log(`Hello  ${this.name}   ${this.age}`)
    }
}

const person2 = new Person ('Misha', 20)

person2.sayHello()