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

//we can make an empty object and then add to it
var person = {};
person.name = "Joe";
person.age = 23;
person.city = "LA";

//object literla notation
var person = {
	name: "Travis",
	age: 21,
	city: "LA"
}

//another way of initializing an Object
var person = new Object();
person.name = "Smitty";
person.age = 24;
person.city = "Seattle";

//objects can hold all sorts of data, and even other objects
//array is a special kind of object with key value pairs or numbers and other items
var dogs = ["Rusty", "Lucky", "Bubby"]; //array compared to object
console.log(dogs[1]);
dogs.push("Wyatt");
dogs[1] = "Lucy"; //reassign a value

var dog = {
	name: "Bubba",
	breed: "Lab"
}

console.log(dog["name"]); //this is more array-like
console.log(dog.name);
dogs.age = 4;
dog.breed = "Black Lab"

//array of objects
var posts = [
	{
		title: "Cats are mediocre",
		author: "Colt",
		comments: ["awesome post!" , "terrible post"]
	}
	{
		title: "Cats are awesome",
		author: "Cat Luvr"
		comments: ["<3" , "terrible post"]
	}
];
posts;
console.log(posts); //shows objects
console.log(posts[1].comments[1]); // = terrible posts

var someObject = {
	friends: [
		{name: "Malfoy"},
		{name: "Crabble"},
		{name: "Goyle"},
	],
	color: "baby blue",
	isEvil: true
};
console.log(someObject.friends[0].name); //this will retrieve "Malfroy"
