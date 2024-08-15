// func.call( thisArg , arg1 ,arg 2 , ...)



function greet ( greeting , production) {
    console.log (greeting + ","+ this.name +  production);
}
const person2 = { name : 'Alice'}
greet.call(person2 , "Hello", "!")


