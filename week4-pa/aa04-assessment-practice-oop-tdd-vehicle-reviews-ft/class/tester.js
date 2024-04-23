// const Vehicle = require("./vehicle")
const Review = require("./review")
const Bicycle = require("./bicycle")
const ElectricBicycle = require("./electric-bicycle")

class Tester {
    constructor(name, reviews=[]){
        this.name = name
        this.reviews = reviews
    }

    submitReview(vehicle,star,reviewText){
        // console.log('submitReview->',vehicle)
        if (vehicle.validate()) {

            let review = new Review(vehicle,this,star,reviewText)
            // console.log(review)
            // return review
            review.addReview(review)

            // AFTER successful creation
            if(vehicle instanceof Bicycle) {
                // console.log(`🚵‍♀️`)
                this.bikeTester = true;
            }

            if(vehicle instanceof ElectricBicycle){
                this.eBikeTester = true;
            }

            return review
        } else {
            // throw new Error(`Cannot submit review for invalid vehicle.`)
            throw new Error(`Cannot submit review for invalid vehicle.`)
            // console.log(`Cannot submit review for invalid vehicle.`)
            // throw new Error(`Cannot submit review for invalid vehicle.`)
        }
    }
}

// let tester = new Tester("Bob Jones");
// let validVehicle = new Vehicle("Toyota Prius", 2005, 23000);

// tester.submitReview(validVehicle, 3, "Very cozy.");
// expect(tester.bikeTester).to.be.oneOf([undefined, false]);
// expect(tester.eBikeTester).to.be.oneOf([undefined, false]);

// let validBicycle = new Bicycle("Trek 520", 2023, 1829);

// tester.submitReview(validBicycle, 5, "Great for touring and gravel");
// console.log((tester.bikeTester)) //.to.be.true;
// console.log((tester.eBikeTester)) //.to.be.oneOf([undefined, false]);

// let validEBike = new ElectricBicycle("Specialized", 2010, 600, "Touring", 18, 26, 30, 45);
// tester.submitReview(validEBike, 1, "Terrible range");
// console.log((tester.bikeTester))//.to.be.true;
// console.log((tester.eBikeTester))//.to.be.true;

// let tester = new Tester("Bob Jones");
// let validVehicle = new Vehicle("Toyota Prius", 2005, 23000);

// let submittedReview = tester.submitReview(validVehicle, 3, "Very cozy.");
// // check review is an instance of the review class
// // expect(submittedReview instanceof Review).to.be.true;
// console.log(submittedReview instanceof Review) // true!

// //lets check
// console.log(validVehicle.reviews[0].vehicle)

// cannot submit for invalid vehicle
// let tester = new Tester("Bob Jones")
// let invalidVehicle = new Vehicle(5);

// // expect(tester.submitReview.bind(tester, invalidVehicle, 5, "This vehicle is not valid")).to.throw(Error, "Cannot submit review for invalid vehicle.");
// tester.submitReview(invalidVehicle, 5, "This vehicle is not valid")
// // check review is not in tester's reviews
// expect(tester.reviews).to.have.length(0);
// check review is not in vehicle's reviews
// expect(invalidVehicle.reviews).to.have.length(0);

module.exports = Tester;
