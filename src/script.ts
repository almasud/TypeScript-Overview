type StringOrNumber = string | number;
type UserType = {name: string, age: number}

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