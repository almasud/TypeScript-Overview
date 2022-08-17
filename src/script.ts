import {Player} from './classes/Player.js';

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