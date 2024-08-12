function creaateDiscount (procent){
    return function (price) {
        return price*(1 - procent/100);
    };
}

let tenProcentDiscount = creaateDiscount(10);
console.log(tenProcentDiscount(100));


function creaateDiscount2 (procent,price)
{
    return price*(1 - procent/100);
}
console.log(creaateDiscount2(100,10));