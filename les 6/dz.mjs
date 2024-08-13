import promptSync from 'prompt-sync';
import chalk from 'chalk';
const prompt = promptSync({ sigint: true });

function area_of_rec(width, height){
    return console.log("Area of the selected rectangle is: " + width*height);
};

const area_of_recv2 = function(width, height) {
    console.log("Calculations V2: " + width*height);
};

const area_of_recv3 = (width, height) => console.log("Calculations V3: " + width*height);;

console.log(chalk.italic.bold.bgBlueBright("Let's calculate area of the rectange!"));

let height = prompt("Enter height of your rectangle: ");
let width = prompt("Enter width of your rectangle: ");

area_of_rec(height, width);

console.log(chalk.italic.bold.bgYellowBright("Sorry, I'll duplicate it a few times to make sure it all works :')"));

area_of_recv2(height, width);
area_of_recv3(height, width);