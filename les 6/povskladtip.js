function createMultiplear(x) {
    return function(y) {
        return x*y
    }
}
let double = createMultiplear(3);
console.log(double(5));