const greet = function(name) {
    return `Hello, ${name}`;
  };
  console.log(greet('Alice'))

  
  function processUser(callback) {
    const user = "Alice";
    console.log(callback(user));
  }
  
  processUser(greet); // Передаємо функцію greet як аргумент
  

  function createGreeter(greeting) {
    return function(name) {
      return `${greeting}, ${name}`;
    };
  }
  
  const greetEnglish = createGreeter("Hello");
  console.log(greetEnglish("Bob")); // "Hello, Bob"

  
  const functions = [
    function() { return "Function 1"; },
    function() { return "Function 2"; }
  ];
  
  console.log(functions[0]()); // "Function 1"
  