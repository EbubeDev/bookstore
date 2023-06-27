// let sobriquet = "Ebube";
// let age = "22";
// const address = "Kaduna, Nigeria"

// const bioEbube = function(userName, userAge, userAddress){
//     return "My name is " + userName + " I am " + userAge + "years old. And I live in " + userAddress 
// }

// console.log(bioEbube(sobriquet, age, address));


// Destructuring
const person = {
    name: 'John',
    height: 5,
    greet: function ()  {
        console.log('Hi, I am ' + this.name);
    }
};

const printName = ({ name }) => {
    return name
};

printName(person)

person.greet(); 
// this will print I am John

const hobbies = ['Swimming', 'Coding'];

for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'hobby:' + hobby));
console.log(hobbies);
