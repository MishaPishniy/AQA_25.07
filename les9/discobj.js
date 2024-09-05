/*const people = 
    { name: 'John', age: 30, city: 'New York' };

    const { name , age , city } = people;

    console.log(name);
    console.log(age);
    console.log(city); */

    const person = {
        name: "John",
        address: {
          city: "New York",
          zip: 10001
        }
      };
const { name ,  address:  {city , zip}} = person

console.log(city)
console.log(zip)

