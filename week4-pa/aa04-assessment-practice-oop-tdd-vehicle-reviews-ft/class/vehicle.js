class Vehicle {
    constructor(modelName,year,price){
        this.modelName = modelName
        this.year = year
        this.price = price
        this.reviews = [];
    }
}


let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
console.log(vehicle1);

module.exports = Vehicle;
