/**
 * Movie title data[i][8]
 * Year data[i][9]
 * Locations data[i][10] (concat then split)
 * Prod Company data[i][12]
 * Distr data[i][13]
 * Director data[i][14]
 * Writer data[i][15]
 * Actors data[i][16-18] obj {name: string, locations: string} Grab from locations
 */
const movieData = require("./films");
var movies = movieData.data, iter = 1;

while(iter > 0){
    for(var i = 0, len = 5; i < len; i++){
        var title = movies[i][8];
        console.log(title);
    }
    iter--;
}