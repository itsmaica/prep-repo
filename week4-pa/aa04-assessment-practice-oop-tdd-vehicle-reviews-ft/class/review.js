// const Tester = require("./tester");
// const Vehicle = require("./vehicle");

class Review {
  constructor(vehicle, tester, starRating, text) {
    this.vehicle = vehicle;
    this.tester = tester;
    this.starRating = starRating;
    this.text = text;
  }

  addReview() {
    // console.log(this)
    this.vehicle.reviews.push(this);
    this.tester.reviews.push(this);
  }

  static filterByStars(star, ...reviews) {
    // const test = reviews.filter((review) => {
    //   // console.log('->',review)
    //   if (review.starRating === star) return true;
    // });
    // return test;

    return reviews.filter(review => review.starRating === star)
  }


}

// let tester1 = new Tester("Bob Jones");
// let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
// let review1 = new Review(
//   vehicle1,
//   tester1,
//   1,
//   "Great car, excellent gas mileage!"
// );

// let tester2 = new Tester("Desiree Smith");
// let vehicle2 = new Vehicle("Dodge Ram", 1985, 300);
// let review2 = new Review(
//   vehicle2,
//   tester2,
//   3,
//   "Lots of rust, but still reliable."
// );

// let review3 = new Review(
//   vehicle1,
//   tester2,
//   5,
//   "Good ride, but wish it charged faster."
// );
// let review4 = new Review(vehicle2, tester1, 5, "Best car I've ever driven!");

// let filtered = Review.filterByStars(3, review1, review2, review3);

// console.log(filtered);

// let tester1 = new Tester("Bob Jones");
// let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
// let review1 = new Review(vehicle1, tester1, 5, "Great car, excellent gas mileage!")
// review1.addReview()
// console.log(review1.addReview())

module.exports = Review;
