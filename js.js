//this doc was created in the terminal
//key value pairs
var person = {
	name: "Cindy",
	age: 32,
	city: "Missoula"
};
//there is no order in an object 
var person = {
	name: "Travis",
	age: 21,
	city: "LA"
}

//we can use bracket notation - similar to arrays
console.log(person["name"]);

//we can use dot notation
console.log(person.name);

var dog = {
	name: "Rusty",
	breed: "mut",
	age: 3
}

console.log(dog.age);

//dot notation cannot be used if the property starts with a number or has a space
//bracket notation can look for variable names and do notation cannot

//updating object can be down with either bracket notation or dot notation
dog.age = 4;
dog.age +=1;
console.log(dog.age);

dog["name"] = "Tater";

console.log(dog);

