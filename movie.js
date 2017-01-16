//file created in terminal
var moana = {
	name: "Moana",
	rating: 5,
	hasWatched: true
}

var badSanta =  {
	name: "Bad Santa",
	rating: 5,
	hasWatched: true
}

var paths = new Object();
paths.name = "Paths of Glory";
paths.rating = 5,
paths.hasWatched = true;

var littleSun = new Object();
littleSun.name = "Little Miss Sunshine";
littleSun.rating = 4;
littleSun.hasWatched = true;


var movies = [moana, badSanta, paths, littleSun]

listMovies();

function listMovies(){
	for(var a = 0; a < movies.length; a++){
		if(movies[a].hasWatched){
			console.log(`You have watched "${movies[a].name}" - ${movies[a].rating} stars`);
		}else{
			console.log(`You have not seen "${movies[a].name}" - ${movies[a].rating} stars`);
		}
	}
}

var moviesArray = [
	{
		name: "Moana",
		rating: 5,
		hasWatched: true
	},
	{
		name: "Paths of Glory",
		rating: 5,
		hasWatched: true
	},
	{
		name: "Bad Santa",
		rating: 5,
		hasWatched: true
	},
	{
		name: "Bad Santa",
		rating: 5,
		hasWatched: true
	},
];


function listMovies2(){
	for(var i = 0; i < moviesArray.length; i++){
		if(moviesArray[i].hasWatched){
			console.log(`You have watched "${moviesArray[i].name}" - ${moviesArray[i].rating} stars`);
		}else{
			console.log(`You have not seen "${moviesArray[i].name}" - ${moviesArrray[i].rating} stars`);
		}
	}

}

console.log("//////////");
//anoher function

movies.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	}else{
		result += "not seen ";
	}
	result += "\"" + movie.name + "\" - ";
	result += movie.rating + " stars";
	console.log(result);
});