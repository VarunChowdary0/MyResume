// importing mongodb
const mongo= require('mongodb');
const { MongoClient } = mongo;
// setting url
const url='mongodb://localhost:27017'
// creating new MongoClient ;
const client = new MongoClient(url,{useNewUrlParser:true , useUnifiedTopology:true});
// connecting to server .
client.connect((err)=>{
    if(err){
        console.log("error: ",err);
    }
    else{
        console.log("connected sucessfully")
    }

    // selection name of DB
    const db=client.db("Node_trails");
})