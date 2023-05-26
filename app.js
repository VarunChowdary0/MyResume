// // importing mongodb
// const mongo= require('mongodb');
// const { MongoClient } = mongo;
// // setting url
// const url='mongodb://localhost:27017'
// // creating new MongoClient ;
// const client = new MongoClient(url,{useNewUrlParser:true , useUnifiedTopology:true});
// // connecting to server .
// client.connect((err)=>{
//     if(err){
//         console.log("error: ",err);
//     }
//     else{
//         console.log("connected sucessfully")
//     }

//     // selection name of DB
//     //const db=client.db("Node_trails");
// })
const express=require('express')
const mongoose=require('mongoose');
const app=express();

mongoose.connect('mongodb://127.0.0.1:27017/Node_trails')
    .then(()=>{
        console.log("Connected..")
    })
    .catch((err)=>{
        console.log("error=> ",err);
    });
const Data_1Schema=new mongoose.Schema({
    name:String,
    email:String,
    phno:String
})
// data base are not case sensitive         |---> schema defined earler
const Data_1 = mongoose.model('lata_1', Data_1Schema);
//                                ^--> name of collection.
const obj={
    name: 'Varun',
    email: 'john@example.com',
    phno:'21412412',
    hoos:'qdq'
};
Data_1.create(obj); 


//---------- find()-------------

Data_1.find({'name':'VArun'})
    .then(resp =>{
        console.log('found',resp);
    })
    .catch(err=>{
        console.log("error: ",err);

    });


app.listen(1000,()=>{
    console.log("running.......")
})