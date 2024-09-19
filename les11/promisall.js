/*const promis1 = Promise.resolve(3)
const promos2 =  new Promise((resolve)=> setTimeout(resolve, 1000, "Hello"))
const promis3 = fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json())


Promise.all([promis1, promos2, promis3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log('error', error);
  });


const promis1 =  new Promise((resolve)=> setTimeout(resolve, 10000, "Hello1"))
const promis2 =  new Promise((resolve)=> setTimeout(resolve, 500, "Hello2"))

Promise.race([promis1, promis2])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log('error', error);
  }); */
  

  fetch('https://swapi.dev/api/planets/1/31')
  .then(response => response.json())
  .then(data => {
    console.log('Дані:', data);
  })
  .catch(error => {
    console.error('Помилка:', error);
  })
  .finally(() => {
    console.log('Запит завершено'); // Виконається в будь-якому випадку
  });
