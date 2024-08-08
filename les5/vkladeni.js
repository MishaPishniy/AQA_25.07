/*for ( let i=1; i<5 ; i++) {
    for ( let j=1 ; j<5; j++){
        console.log(`${i}*${j} = ${i*j}`);
    }
    console.log("-------");
} */

let i = 3;
let j = 3;

let n = 0;

while (n < i) {
  let m = 0;
  while (m < j) {
    console.log(`n = ${n} , m = ${m}`);
    m++;
  }
  n++;
}
