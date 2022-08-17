"use strict";
const userDetails = (id, user) => {
    console.log(`User id: ${id}, name: ${user.name} and age: ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."}`);
};
userDetails(23, { name: "Almasud", age: 23 });
sayHello({ name: "Rafik", age: 65 });
