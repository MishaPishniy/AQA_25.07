function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log(`Helo! MY name ${this.name}, ${this.age}`)
    }
  }
  
  const person1 = new Person("Misha ",30)
  person1.sayHello();