class NFLFan {
    constructor(name, age, team){
        this.name = name;
        this.age = age;
        this.team = team;
        this.gamesAttended = gamesAttended;
    }

    getOlder(){
        this.age++
        return this.age
    }

    iAmATraitor(newTeam){
        this.team = newTeam;
        console.log("I am not a loyal fan!")
        return this.team;
    }

    attendGame(){
        this.gamesAttended++;
        return this.gamesAttended
    }
}



const jeff = new NFLFan("Jeff Granof", 33, "Packers")
jeff.getOlder()
jeff.iAmATraitor("49s")
jeff.attendGame()
console.log(jeff)

module.exports = NFLFan;
