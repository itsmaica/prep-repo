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

// const post1 = new Post("Fallout", "It's great!! Having fun watching it it", "04/23/24", 31)
// console.log(post1.printPost())

module.exports = Post;
