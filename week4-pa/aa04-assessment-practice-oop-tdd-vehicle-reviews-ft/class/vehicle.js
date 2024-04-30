// const Tester = require("./tester")
// const Review = require("./review")

class Vehicle {
    constructor(modelName, year, price) {
        this.modelName = modelName;
        this.year = year;
        this.price = price;
        this.reviews = [];
    }

    validate(){
        if (!this.modelName || !this.year|| !this.price || !this.reviews || this.year > 2100 || this.year < 1950) return false;
        return true;
    }

    update(newName, newYear, newPrice){
        if (newName) this.modelName = newName

        if(newYear >= 1950 && newYear <= 2100) this.year = newYear
        else throw new Error('Year must be between 1950 and 2100')
        if(newPrice > 0) this.price = newPrice
        else throw new Error('Price must be greater than 0')
    }

    getDetails(){
        return `The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`
    }

    findReviewByTester(testerName){

        // console.log(this.reviews)
        
        return this.reviews.find(review => {
            console.log(review.tester.name === testerName)
            return review.tester.name === testerName
        })


        return this.reviews.find(review => review.tester.name === testerName)
    }
}

// let tester1 = new Tester("Bob Jones");
// let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
// let review1 = new Review(vehicle1, tester1, 1, "Great car, excellent gas mileage!");

// let tester2 = new Tester("Desiree Smith");
// let vehicle2 = new Vehicle("Dodge Ram", 1985, 300);
// let review2 = new Review(vehicle2, tester2, 3, "Lots of rust, but still reliable.");

// let review3 = new Review(vehicle1, tester2, 5, "Good ride, but wish it charged faster.");
// let review4 = new Review(vehicle2, tester1, 5, "Best car I've ever driven!");

// review1.addReview();
// review2.addReview();
// review3.addReview();
// review4.addReview();

// let filtered1 = vehicle1.findReviewByTester("Bob Jones");
// console.log(filtered1)

// let vehicle = new Vehicle("Toyota Prius", 2005, 23000);
// // vehicle.update("test", 1949, 1000000)
// console.log(vehicle.getDetails())


// let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
// console.log(vehicle1)

// let validVehicle = new Vehicle("Toyota Prius", 2005, 23000);
// let invalidVehicle = new Vehicle(5);

// console.log(validVehicle.validate())
// console.log(invalidVehicle.validate())

module.exports = Vehicle;
