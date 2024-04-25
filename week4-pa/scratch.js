// class Dog {
//     constructor(){
//         this.name = "dog"
//     }

//     bark(){
//         console.log("bark bark")
//     }
// }

// const doggo = new Dog()
// console.log(doggo.bar())


// function test(){
//     let result = true;

//     return res;
// }

// tet()

/*
* This one about bind


*/

class Dog {
    constructor(name){
        this.name = name;
        this.sound = 'woof';

    }
    speak(){
        return `${this.name} says ${this.sound}`
    }
}

let fido = new Dog("Fido");
let fidoSpeak = fido.speak.bind(fido);

console.log(fidoSpeak());
