const Person = {
  
    name : " Alice",
    greet : function(){
     setTimeout(()  => {
        console.log(`Helo! MY name ${this.name}`)
    },1000)
  }
};
  Person.greet();