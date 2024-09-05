/* function Person (name ,age) {
    this.name =name  ,
    this.age = age ,
    this.sayHi = function (){
        console.log('Hi!')
    }
} */

    class Person {
        city = 'Dnipro'
    constructor(name ,age){
            this.name =name  ,
            this.age = age

        } 
        sayHi(){
            console.log('Hi! My name is ' + this.name)
        }
    }

const person = new Person ( 'Alice', 20 )
const person1 = new Person ( 'Bob', 22 )

console.log(person)
console.log(person.name)
person.sayHi()
person1.sayHi()