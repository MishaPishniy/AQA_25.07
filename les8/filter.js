//let newArray = array.filter (function (element, index, array) {
    //умова для відбору елементів
    
//}, thisArg);

let number = [5, 120, 10 , 8 , 44 , 138]
let numberFilter = number.filter(function(number){
    return number > 10;
});

console.log(numberFilter);