// const Tester = require("./tester");
// const Review = require("./review")
// const Vehicle = require("./vehicle");

class Vehicle {
  constructor(modelName, year, price, reviews = []) {
    this.modelName = modelName;
    this.year = year;
    this.price = price;
    this.reviews = reviews;
  }

  validate() {
    if (
      !this.modelName ||
      !this.price ||
      !this.year ||
      this.year < 1950 ||
      this.year > 2100
    )
      return false;
    // if (this.year > 1950 || this.year > 2100) return false
    return true;
  }

  update(newName, newYear, newPrice) {
    if (newName) this.modelName = newName;
    else this.modelName = modelName;

    if (newYear < 1950 || newYear > 2100)
      throw new Error(`Year must be between 1950 and 2100`);
    else this.year = newYear;

    if (newPrice > 0) this.price = newPrice;
    else throw new Error(`Price must be greater than 0`);
  }

  getDetails() {
    return `The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`;
  }

  findReviewByTester(name){
    // console.log(name)
    // console.log('this.vehicle -->', this.reviews[0].tester.name) // "Bob Jones"


    // filter will return an array lol
    let res = this.reviews.filter(review => {
        // console.log('weee',review.tester.name)
        return review.tester.name === name
    })

    // console.log('res',)
    return res[0]

   }
}

// const test = new Vehicle("Trek 520", 2023, 1829);
// console.log(test.getDetails());
// test.update("New modelName", 2000, 100);
// console.log(test);

// * findReviewByTester

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
// expect(filtered1).to.deep.equal(review1);
// console.log(filtered1)

module.exports = Vehicle;
