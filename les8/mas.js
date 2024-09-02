/*const numbers4 = [1, 2, 3, 4, 5];
for ( let i=0 ; i < numbers4.length ; i++ )
{
  console.log(numbers4[i]);
}


//for (let element of iterable) { kod} 


let fruits = ['Apple', 'Banana', 'Cherry'];
for ( let fruit of fruits)  {
    console.log(fruit)
}

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(numbers) {
console.log(numbers)

}) */


let arr = [1, 2, 3];
arr.forEach(function(value, index, array) {
    console.log(value);
    if (index === 0) {
        array.push(4);
    }
});
