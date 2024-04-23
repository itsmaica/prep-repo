const Bicycle = require("./bicycle");
// const Vehicle = require("./vehicle");

class ElectricBicycle extends Bicycle{
    constructor(modelName, year, price, style, frameSize, tireSize, range, maxSpeed){
        super(modelName, year, price, style, frameSize, tireSize)
        this.range = range;
        this.maxSpeed = maxSpeed;
    }
}

// let eBike = new ElectricBicycle("Trek 520", 2023, 1829);
// console.log(eBike instanceof Vehicle)

module.exports = ElectricBicycle;
