// const Tester = require("./tester");
// const Vehicle = require("./vehicle");

class Review {
  constructor(vehicle, tester, starRating, text) {
    this.vehicle = vehicle;
    this.tester = tester;
    this.starRating = starRating;
    this.text = text;
  }

  addReview(){
    this.vehicle.reviews.push(this)
    this.tester.reviews.push(this)
    // console.log('reviews',this.tester.reviews)
  }


  static filterByStars(star, ...reviews){
    // * how are we calling this?
    // * what are our inputs?
    // console.log('star ->',star)
    // console.log('reviews', reviews)
    let res = reviews.filter(review => review.starRating === star)
    // console.log(res)
    return res
  }


}



// // *  filterByStars
// let tester1 = new Tester("Bob Jones");
// let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
// let review1 = new Review(vehicle1, tester1, 1, "Great car, excellent gas mileage!");

// let tester2 = new Tester("Desiree Smith");
// let vehicle2 = new Vehicle("Dodge Ram", 1985, 300);
// let review2 = new Review(vehicle2, tester2, 3, "Lots of rust, but still reliable.");

// let review3 = new Review(vehicle1, tester2, 5, "Good ride, but wish it charged faster.");
// let review4 = new Review(vehicle2, tester1, 5, "Best car I've ever driven!");

// let filtered = Review.filterByStars(3, review1, review2, review3);

// console.log('->',filtered[0].starRating)
// expect(filtered).to.be.an("array");
// expect(filtered).to.have.length(1);
// expect(filtered[0].starRating).to.equal(3);
// expect(filtered[0]).to.deep.equal(review2);

// let tester1 = new Tester("Bob Jones");
// let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
// let review1 = new Review(vehicle1, tester1, 5, "Great car, excellent gas mileage!")

// console.log(review1)

// let tester1 = new Tester("Bob Jones");
// let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
// let review1 = new Review(vehicle1, tester1, 1, "Great car, excellent gas mileage!");

// let tester2 = new Tester("Desiree Smith");
// let vehicle2 = new Vehicle("Dodge Ram", 1985, 300);
// let review2 = new Review(vehicle2, tester2, 3, "Lots of rust, but still reliable.");

// let review3 = new Review(vehicle1, tester2, 5, "Good ride, but wish it charged faster.");
// let review4 = new Review(vehicle2, tester1, 5, "Best car I've ever driven!");

// console.log(review1.addReview())


module.exports = Review;
