require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
// var spotify = new Spotify(keys.spotify);

// console.log(require("dotenv").config());

var command = process.argv[2];
console.log(command);

var value = process.argv[3];
console.log(value);

switch(command){
    case 'movie-this':
        movie(); 
        break;
}

function movie()
{
    console.log("You are in the movie command!");
    var queryURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + value; 
    axios.get(queryURL)
    .then(function(data){
        console.log(data.Year);
    });
}