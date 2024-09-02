
const arr = ['white','red', 'red','red','red','red','red','blue','blue','blue','blue','blue']

const colors = {}

for ( const color of arr) {
  if(!colors[color]) {
      colors[color] = 1 
  } else 
  {
      colors[color] = colors[color]  + 1 
  }
}
console.log(colors);



/* const arr = ['red', 'red','red','red','red','red','blue','blue','blue','blue','blue']

const colors = {}

for ( const color of arr) {
  if(colors[color]) {
      colors[color] = colors[color]  + 1 
  } else 
  {
      colors[color] = 1 
  }
}
console.log(colors); */