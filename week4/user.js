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
*/

  getName(){
    return this.name
  }

  updateAbout(str){
    this.about = str;
  }

  updateRelationship() {
    this.relationship = !this.relationship
  }

  updatePassword(str){
    this.password = str;
    console.log(`Your new password is ${this.password}`)
  }

  addFriend(friend){
    this.friends.push(friend)
  }

  removeFriend(badFriend){
    this.friends = this.friends.filter(friend => friend != badFriend)
  }

  printFriends(){
    if (!this.friends.length) {
        console.log(`You don't have any friends right now 🥺.`)
    } else {
        const viewFriends = this.friends.map(friend => friend.getName())
        console.log(`Your friends are: ${viewFriends}`)
    }
  }


  printUserInfo(){
    console.log(`Hi! My name is ${this.name} and I am ${this.age} years old...`);
    console.log(`I am currently ${this.relationship ? "married" : "single"} and living in ${this.location}`)
    console.log(`A bit about me: ${this.about}`)
    this.printFriends()
  }


}

const maica = new User("Maica", 100, "CA", "msantos@aa.io", "password", "yay coding :D")
const brandon = new User("Brandon")
const mark = new User("Mark")
const lucy = new User("Lucy")
const coop = new User("Coop")

// maica.updateAbout("Omg I'm a spazz")
maica.addFriend(brandon)
maica.addFriend(mark)
maica.addFriend(lucy)
maica.addFriend(coop)

// console.log('before',maica)

// maica.removeFriend(mark)


console.log('after',maica.printUserInfo())

// console.log(maica.getName()) // Maica


module.exports = User; 
