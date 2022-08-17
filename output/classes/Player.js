export class Player {
    constructor(name, age, country = "Bangladesh") {
        this.age = age;
        this.name = name;
        this.country = country;
    }
    play() {
        console.log(`${this.name}, age: ${this.age} from ${this.country} is playing...`);
    }
}
