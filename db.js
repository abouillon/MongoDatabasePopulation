/**
 * This script performs all necessary actions to sanitize and insert data into the database
 */
{
    const mongo = require("mongodb");
    const dataFormat = require("./schema");
    const movieData = require("./films");
    const mongoclient = new mongo.MongoClient(new mongo.Server("localhost", 27017), {useUnifiedTopology: true});
    mongoclient.connect().then((db) => 
        {
            console.log("DB Opened");
            var dbo = db.db("movieDB");
            var formMovies = processTitles();
            for(var a = 0; a < formMovies.length; a++){
                //insert document
                dbo.collection("movies").insertOne(formMovies[a]).then(
                    (res) => {console.log(`Document inserted`);},
                    (err) => {console.log(`Insertion failed\n${err}`); process.exit(1)}
                );
            }
            db.close().then(
                (res) => {console.log(`Closed Connection`); process.exit(0)},
                (err) => {console.log(err); process.exit(1)}
            );
        },(err) => {console.log(err.message); process.exit(1);});

    function processTitles(){
        var movies = movieData.data, titles = [], formattedMovies = [], cleanMovie = {};
        //pull all unqiue titles from data
        for(var a = 0, iter = movies.length; a < iter; a++){
            if(!titles.includes(movies[a][8])){
                titles.push(movies[a][8]);
            }
        }

        //grab full data for all movies that match given title
        for(var b = 0, len = titles.length; b < len; b++){
            var matchedTitle = [];
            for(var c = 0, d = movies.length; c < d; c++){
                if(movies[c].includes(titles[b])){
                    matchedTitle.push(movies[c]);
                }
            }
            cleanMovie = formatTitle(matchedTitle);
            formattedMovies.push(cleanMovie);
        }
        return formattedMovies;
    }

    /**
     * Movie title data[i][8]
     * Year data[i][9]
     * Locations [data[i][10]]
     * Prod Company data[i][11]
     * Distr data[i][12]
     * Director data[i][13]
     * Writer data[i][14]
     * Actors data[i][16-18] [{name: string, locations: string}]
     */
    function formatTitle(movieTitle){
        var movie = Object.create(dataFormat);
        movie.title = movieTitle[0][8] != null ? movieTitle[0][8] : "";
        movie.releaseYear = movieTitle[0][9] != null ? movieTitle[0][9] : "";
        movie.locations = [];
        movie.productionCompany = movieTitle[0][11] != null ? movieTitle[0][11] : "";
        movie.distributor = movieTitle[0][12] != null ? movieTitle[0][12] : "";
        movie.director = movieTitle[0][13] != null ? movieTitle[0][13] : "";
        movie.writer = movieTitle[0][14] != null ? movieTitle[0][14] : "";
        movie.actors = [{"name": movieTitle[0][16] != null ? movieTitle[0][16] : "", "locations" : []}, 
                        {"name": movieTitle[0][17] != null ? movieTitle[0][17] : "", "locations" : []}, 
                        {"name": movieTitle[0][18] != null ? movieTitle[0][18] : "", "locations" : []}];

        for(var i = 0, len = movie.actors.length; i < len; i++){
            for(var j = 0, locLen = movieTitle.length; j < locLen; j++){
                if(!movie.locations.includes(movieTitle[j][10])){
                    movie.locations.push(movieTitle[j][10]);
                }
                movie.actors[i].locations.push(movieTitle[j][10]);
            }
        }
        return movie;
    }
}