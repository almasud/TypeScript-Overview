class Player {
    name: string;  // By default public
    readonly country: string;

    constructor(
        name: string, private age: number, country: string = "Bangladesh"
    ) {
        this.name = name;
        this.country = country;
    }

    play() {
        console.log(`${this.name}, age: ${this.age} from ${this.country} is playing...`);
    }
}

let sakib = new Player("Sakib", 28);
let watson = new Player("Shane Watson", 28, "Australia");

const players: Player[] = [];
players.push(sakib);
players.push(watson);

players[0].name = "Sakib Al Hasan"
console.log(players[0].name);
console.log(players[0].country);  // Read only property
console.log(players[1].play());
// console.log(players[1].age);  // Can't access private property