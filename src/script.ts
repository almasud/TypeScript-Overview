// Type aliace
type StringOrNumber = string | number;  // Type is string or number
type UserType = {name: string, age: number}
// Function signature
let addTwoNumber: (numberOne: number, numberTwo: number) => number;

// Function declaration and defination
const userDetails = (
    id: StringOrNumber,
    user: UserType,
) => {
    console.log(`User id: ${id}, name: ${user.name} and age: ${user.age}`);
}

const sayHello = (user: UserType) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."}`);
}

userDetails(23, {name: "Almasud", age: 23});
sayHello({name: "Rafik", age: 65});

// Function defination
addTwoNumber = (one: number, two: number) => {
    return one + two;
}

console.log(addTwoNumber(4, 6))