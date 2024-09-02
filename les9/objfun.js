const car = {
    model: 'Porsche',
    color: 'Blue',
    gearNumber : 1 ,
    seitchGea : function(isUp){
        isUp ? this.gearNumber++ : this.gearNumber--
        console.log(this.gearNumber)

    }
}

car.seitchGea(true)

car.seitchGea(true)

car.seitchGea(true)

car.seitchGea(false)

car.seitchGea(true)

car.seitchGea(true)