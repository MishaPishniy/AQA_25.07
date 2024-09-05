const person = { name: "John", age: 30, city: "New York" };

const {name , ...rest} = person

console.log(name)
console.log(rest)