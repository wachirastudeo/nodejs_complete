const person = {
    name: "max",
    age: 29,
    greet() {
        console.log('Hi, i am ' + this.name);
    }
};

const hobbies = ['Sports', 'Cooking'];

// for (let hobby of hobbies) {
//     console.log(hobby);
// }

console.log(hobbies.map(hobby => {
    return 'hobby: ' + hobby;
}));

console.log(hobbies);