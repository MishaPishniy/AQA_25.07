const addOne = (x) => x + 1;
const double = (x) => x * 2;

const compose = (f, g) => (x) => f(g(x));

const addOneThenDouble = compose(double, addOne);
console.log(addOneThenDouble(5));


// g = addOne 
//f = double 


const addOne1 = (y) => y + 1;
const double1 = (y) => y * 2;
const addOneThenDouble1 = (y) => double1(addOne1(y))
console.log( addOneThenDouble1(5))