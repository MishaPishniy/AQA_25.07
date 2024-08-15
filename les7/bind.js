// const boundFunc = func.bind(thisArg, Arg2, Arg3, ....)

function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Charlie' };
const greetCharlie = greet.bind(person, 'Hey');
greetCharlie('!'); 