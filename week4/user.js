/*
    1. Create a Class User that has the following attributes:
        a. name
        b. age
        c. location
        d. email
        e. password
        f. about details (starts as an empty string)
        g. relationship (married/single)
        h. friends (array starts empty)
        i. posts (array starts empty)
 */

class User {
  constructor(
    name,
    age,
    location,
    email,
    password,
    about = ``,
    relationship = false,
    friends = [],
    posts = []
  ) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.email = email;
    this.password = password;
    this.about = about;
    this.relationship = relationship;
    this.friends = friends;
    this.posts = posts;
  }

  /*    2. Add the following methods to the Class User
        a. getName - returns the user's name
        b. updateAbout - takes in a str and updates the about info
        c. updateRelationship - switches/toggles relationship
        d. updatePassword - takes in a str and updates the password, also prints new password
        e. addFriend - takes in a user instance and adds it to friends
        f. removeFriend - takes in a user instance and removes it from friends
        g. printFriends - prints all a users friends names, or a message if they have none
        h. printUserInfo - Prints out the basic user info, and their friends
        i. addPost - takes in a post instance and adds it to posts
        j. printAllPosts - prints each post in posts
*/

  getName() {
    return this.name;
  }

  updateAbout(str) {
    this.about = str;
  }

  updateRelationship() {
    this.relationship = !this.relationship;
  }

  updatePassword(str) {
    this.password = str;
    console.log(`Your new password is ${this.password}`);
  }

  addFriend(friend) {
    this.friends.push(friend);
  }

  removeFriend(badFriend) {
    this.friends = this.friends.filter((friend) => friend != badFriend);
  }

  printFriends() {
    if (!this.friends.length) {
      console.log(`You don't have any friends right now 🥺.`);
    } else {
      const viewFriends = this.friends.map((friend) => friend.getName());
      console.log(`Your friends are: ${viewFriends}`);
    }
  }

  printUserInfo() {
    console.log(
      `Hi! My name is ${this.name} and I am ${this.age} years old...`
    );
    console.log(
      `I am currently ${
        this.relationship ? "married" : "single"
      } and living in ${this.location}`
    );
    console.log(`A bit about me: ${this.about}`);
    this.printFriends();
  }

  addPost(post) {
    this.posts.push(post);
  }

  printAllPosts() {
    this.posts.forEach((post) => {
      post.printPost(post);
    });
  }
}

const lucy = new User(
  "Lucy MacLean",
  20,
  "Vault 33",
  "lucy@vtech.io",
  "password",
  "Have you seen my dad?"
);
const maximus = new User(
  "Maximus Squire",
  22,
  "Latrineville",
  "m@bos.io",
  "password",
  "Call me Knight Titus."
);
const coop = new User(
  "Coop Howard",
  200,
  "Wasteland",
  "c@ghoul.io",
  "password",
  "Will work for Rad-X"
);

// test user
console.log("before", lucy); // og class

// * test the methods
console.log(lucy.getName());

// * update her about me
lucy.updateAbout("Gotta find that head.");

// * change her relationship
lucy.updateRelationship();

// * change her password
lucy.updatePassword("newPassWord33");

// * give lucy friends
lucy.addFriend(maximus);
lucy.addFriend(coop);

// * remove a friend
lucy.removeFriend(coop);

// * see her friends
console.log(lucy.printFriends());

// * print her info
console.log(lucy.printUserInfo());

console.log("after ->", lucy);

module.exports = User;
