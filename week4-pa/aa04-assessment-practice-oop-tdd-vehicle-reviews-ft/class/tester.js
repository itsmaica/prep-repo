const Bicycle = require("./bicycle");
const ElectricBicycle = require("./electric-bicycle");
const Review = require("./review");

class Tester {
  constructor(name) {
    this.name = name;
    this.reviews = [];
  }

  submitReview(vehicle, star, text) {
    if (vehicle.validate()) {
      const review = new Review(vehicle, this, star, text);
      this.reviews.push(review);
      vehicle.reviews.push(review);

      if (vehicle instanceof Bicycle) this.bikeTester = true;
      if (vehicle instanceof ElectricBicycle) this.eBikeTester = true;

      return review;
    }

    throw new Error("Cannot submit review for invalid vehicle.");
  }
}

// let tester1 = new Tester("Bob Jones");
// console.log(tester1)

module.exports = Tester;
