const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };

  console.log(person.age)
  person.age = 20

  console.log(person.age)

  person.hobby = 'art'
  //person['hooby'] = 'art'
 
  console.log(person)

  delete person.hobby

  console.log(person)
  console.log(person.hobby)

  const color = 'blue'
  const width = 25 

  /*const banana = {
    color : color,
    width :  width
  } */

  const  banana = {color, width}
  console.log(banana)

const propertyName = 'activity'

  const robot = {
    [propertyName] : 'band'

  }
  console.log(robot)

