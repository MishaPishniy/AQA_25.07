function multiply(x, y) {
    return x * y;
  }
  

  function multiply(x) {
    return function(y) {
      return x * y;
    };
  }
  

  const multiply = x => y => x*y;
  const multiply