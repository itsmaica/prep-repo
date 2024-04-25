// import in the use and post classes
const User = require("./user")
const Post = require("./post")

// console.log(User,Post)
const post1 = new Post("The Surface is crazy...",
"Everything tries to kill you up here! I hope that I find my dad soon. ",
"04/10/24",
5
)

const post2 = new Post("The Ghoul",
"Currently accepting bounties. Want 2 months of worth Rad-X.",
"04/11/24",
100
)

const post3 = new Post("Have you seen this dog?",
"Seeking scientist and his dog companion. Any information appreciated.",
"04/13/24"
)

const post4 = new Post("Vault 32",
"What happened there?",
"04/12/24",
57,
)

// create users
const lucy = new User("Lucy MacLean", 20, "Vault 33", "lucy@vtech.io", "password", "Have you seen my dad?")
const maximus = new User("Maximus Squire", 22, "Latrineville", "m@bos.io", "password", "Call me Knight Titus.")
const coop = new User("Coop Howard", 200, "Wasteland", "c@ghoul.io", "password", "Will work for Rad-X")

// test user
console.log("before", lucy); // og class

// test the methods
console.log(lucy.getName());

// update her about me
lucy.updateAbout("Gotta find that head.");

// change her relationship
lucy.updateRelationship();

// change her password
lucy.updatePassword("newPassWord33");

// give lucy friends
lucy.addFriend(maximus)
lucy.addFriend(coop)

// remove a friend
lucy.removeFriend(coop);

//print her info
console.log(lucy.printUserInfo())

// give lucy posts -> make a method
lucy.addPost(post1)
lucy.addPost(post4)

// print all of lucy's posts
lucy.printAllPosts()

// like one of her posts
post1.likePost()

// lucy after
console.log(lucy)
const test = true;

// test("maica")

console.log(maica)
