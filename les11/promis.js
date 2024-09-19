const resArr = [];

fetch(`https://swapi.dev/api/planets/1`)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

//await
const res = await fetch("https://swapi.dev/api/planets/1");
console.log(res);

/*
let promis = new Promise (function(resolve,reject){

    let succes = false;
     if (succes) {
        resolve('Operacia yspishna')
     } else  {
     reject("Operacia ne yspishna")
    }
})

promis.then((result)=> {
    console.log(result)
})
.catch((error)=> {
    console.log(error)
})

*/

/*
let promis = new Promise (function(resolve,reject){

    let url = 'https://swapi.dev/api/planets/1'

    fetch(url) 
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            reject("Pomilka")
        }
    })
    .then(data => resolve(data))
    .catch(error => reject(error))

    });

    promis
    .then((result)=> {
        console.log('Yspih', result)
    })
    .then((error)=> {
        console.log(error)
    }) */
