/**
 * This script allows the viewing of the entire database or searching for a single document
 */
{
    const mongo = require("mongodb");
    const mongoclient = new mongo.MongoClient(new mongo.Server("localhost", 27017), {useUnifiedTopology: true});

    mongoclient.connect().then((db) => 
        {
            console.log("DB Opened");
            var dbo = db.db("movieDB");

            //get all documents
            dbo.collection("movies").find().toArray((err, documents) => 
            {

                for(var i = 0, len = documents.length; i < len; i++){
                    console.log(documents[i]);
                }

                db.close().then(
                    (res) => {
                    console.log(`Closed Connection`);
                    process.exit(0)},
                    (err) => {console.log(err); process.exit(1)}
                );
            });
            /**
             * The query object will always be formatted {"key" : "value", "key" : "value"}
             */
            // dbo.collection("movies").findOne({"title" : "180"}, (err, document) => 
            // {

            //     console.log(document);
            //     for(var i = 0, len = document.actors.length; i < len; i++){
            //         console.log(`${document.actors[i].name}\n\t${document.actors[i].locations}\n`)
            //     }

            //     db.close().then(
            //         (res) => {
            //         console.log(`Closed Connection`);
            //         process.exit(0)},
            //         (err) => {console.log(err); process.exit(1)}
            //     );
            // });

        },(err) => {console.log(err.message); process.exit(1);});
}