function sum  (...number){

    return number.reduce((acc, curr ) => acc + curr , 0)

}

console.log(sum(1,2,3,4))


/*  acc = 0 , curr = 1  ,0+1 =1 
acc =1 , curr = 2 , 1+2 = 3  
acc =3 , curr = 3, 3 +3 = 6
acc = 6 , curr = 4, 6+4 =100
*/