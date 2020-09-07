/**
 * This script allows the viewing of the entire database
 * This can be modified to search for specific values or to limit the number
 * of documents returned from the query
 */

{
    const mongo = require("mongodb");
    const mongoclient = new mongo.MongoClient(new mongo.Server("localhost", 27017), {useUnifiedTopology: true});

    mongoclient.connect().then((db) => 
        {
            console.log("DB Opened");
            var dbo = db.db("movieDB");

            //get documents
            dbo.collection("movies").find().toArray((err, documents) => 
            {

                for(var i = 0, len = documents.length; i < len; i++){
                    console.log(documents[i]);s
                }

                db.close().then(
                    (res) => {
                    console.log(`Closed Connection`);
                    process.exit(0)},
                    (err) => {console.log(err); process.exit(1)}
                );
            });

        },(err) => {console.log(err.message); process.exit(1);});
}