//a js object called myDogs
var myDogs = {//my object myDogs has a few properties and their values
    rex : "rottweiler",
    Scobby : "great dane",
    tommy : "duchshund",
    tim : "beaagle",
    goofy : "poodle"
}

//accessing object properties using (.)
var myfav = myDogs.Scobby;
console.log(myfav);

//accessing object properties using []
var leatsFav = myDogs["goofy"];
console.log(leatsFav);

/*js typecasts all object properties as strings.
accessing object properties using variables*/
var favDogName = "rex";
var leatsFavName = "tim";
var favDogBreed = myDogs[favDogName];
var leastFavBreed = myDogs[leatsFavName];
console.log(favDogBreed);
console.log(leastFavBreed);