export class Player {
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