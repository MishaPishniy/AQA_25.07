let globalvar = "Hello"

function globalFunction () {

console.log(globalvar);
}
globalFunction();



function myFunction () {

    let localVar = "Hello world"

    console.log(localVar);
    }
    myFunction();
    console.log(localVar);