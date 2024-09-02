const arr = ['red', 'red','red','red','red','red','blue','blue','blue','blue','blue']

const colors = {}

for ( const color of arr) {
    colors[color] = (colors[color] || 0) + 1;
}
console.log(colors)