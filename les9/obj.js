const person = {

    'full name' : 'Sam',
    age : 18,
   job : {
    position : 'QA',
    workYear : 'work from'
   },
   skills : ['js', 'postman']
}

function Person (name, age ){
    this.name = name,
    this.age = age
}

const parm = new Person ('Sam' , '18')

console.log(person)
console.log(parm)


console.log(person.age)
console.log(person.job.position)
console.log(person['full name'])
console.log(person.job['work year'])