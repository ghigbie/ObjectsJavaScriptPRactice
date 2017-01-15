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

var frozen = new Object();
frozen.name = "Frozen";
frozen.rating = 4;
frozen.hasWatched = false;

var movies = [moana, badSanta, paths, littleSun, frozen];

listMovies();

function listMovies(){
	for(var a = 0; a < movies.length; a++){
		if(hasWatched){
			console.log(`You have watched "${movies[a].title}" - ${movies[a].rating} stars`);
		}else{
			console.log(`You have not seen "${movies[a].title}" - ${movies[a].rating} stars`);
		}
	}
}