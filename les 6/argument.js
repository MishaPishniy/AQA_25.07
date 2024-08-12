function processData ( data , callback) {
    let result = data * 2 ;
    callback(result)
}

processData(5 , function(result) {

    console.log("Результат обробки " , result)
})

