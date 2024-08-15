function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  

const person1 = new Person('Alice', 30)
console.log(person1.name)
console.log(person1.age)


const person2 = new Person('Alice2', 30)
console.log(person2.name)
console.log(person2.age)


class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
const person3 = new Person('Alice', 30)
console.log(person3.name)
console.log(person3.age)


