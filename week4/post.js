class Post {
    constructor(title, body, date, likes=0){
        this.title = title;
        this.body = body;
        this.date = date;
        this.likes = likes
    }

    likePost(){
        this.likes++
    }

    dislikePost(){
        this.likes--
    }

    printPost(){
        console.log(`------------------\n`)
        console.log(`Title: ${this.title}`);
        console.log(`Post date: ${this.date} Post likes: ${this.likes}`)
        console.log(`${this.body}`)
    }
}

// make a new post
const testPost = new Post("Fallout", "It's great! Having a lot of fun watching it.", "04/23/24", 31)

//like a post
testPost.likePost()
testPost.likePost()


// print the post
console.log(testPost.printPost())

console.log(testPost)

module.exports = Post;
