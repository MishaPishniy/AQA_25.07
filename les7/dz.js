const prompt=require("prompt-sync")({sigint:true}); 

let handleEven = () => {
    console.log("Number is even");
};

let handleOdd = () => {
    console.log("Number is odd");
};

let handleNum = (num, callbackEven, callbackOdd) => {
   if (Number(num) % 2 === 0) {
       callbackEven();
   } else {
       callbackOdd();
   }
};

let userNumber = prompt("Please enter your number: ");

handleNum(userNumber, handleEven, handleOdd);