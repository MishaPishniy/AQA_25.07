/*function назва функції (назву аргументів) {
    пишемо код функції
} */

    function add(a,b){
        return a + b;
    }
    let sum = add(3,4)
    console.log(sum)

    function greet(name = "Alice2") {
        console.log('Hello '+ name + ' !')
    }
    greet()


    function factorial(n) {
        let result  = 1;
        for ( let i =1 ; i <=n ; i++){
            result *= i;
        }
        return result;
    }


    let n = 5; 
    console.log(factorial(n));
