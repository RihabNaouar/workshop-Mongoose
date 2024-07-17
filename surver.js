const express = require ("express");
const mongoose = require ("mongoose");
require('dotenv').config();
const app = express();
const PORT = 3000 ;
//Create a person with this prototype:

const schema= mongoose.Schema
const personSchema = new schema ({
    Name : {type : String, required : true},
    age : {type : Number , default :0} ,
    favoriteFoods :{type: [String]}
})

const Person = mongoose.model ("Person",personSchema )
const uri = process.env.MONGO_URI

mongoose.connect(uri, {} ).then ( async () => {
    console.log("connection succeeded ")
//Create Many Records with model.create()
/*    const arrayOfPeople =[
        {Name: "John", Age: 25, favoriteFoods: ["Pizza", "burger"]},
        {Name: "Jane", Age: 30, favoriteFoods: ["Pizza", "Boritos"]},
        {Name: "Bob", Age: 35, favoriteFoods: ["Pizza", "Boritos"]}
    ]
    try{
        const people = await Person.create(arrayOfPeople)
        console.log("person created")
    }catch(error) {console.log(`creating person failed: ${error}`)};*/
//Use  Model.find() -> [Person]
//const PeopleName =  await Person.find({Name : "Bob"}).exec ()
//console.log("person founded", PeopleName)
//Use model.Model.findOne() -> food
/*const theFood = await Person.findOne ({favoriteFoods : "Boritos"}).exec ()
console.log("Person founded by favorite food", theFood)*/
//Model.findById() -> Person. 
/*const personId = "6696bd6afc1c0a025bdee9f8";
const findById =await Person.findById (personId).exec ()
console.log("Person founded by Id", findById)*/
/*const IdPerson = "6696bd6afc1c0a025bdee9f7"
const findId = await Person.findById (IdPerson);
if (findId) {
    findId.favoriteFoods.push("Humburger")
await findId.save() 
console.log("new food aded")
}
else {
    console.log =("person not found")}*/

    const UpdatePerson = "Bob";
    const updatePersonAge = await Person.findOneAndUpdate (
        {Name : UpdatePerson},
        {age:20},
        {new : true}
    ).exec()
    console.log("The age is updated", updatePersonAge)
})
.catch(err => console.error(`Error making the connection : ${err} `));
/*const createPerson =(done)=> {
    const newPerson = new Person ( {
        name : 'Rihab',
        age : 20 ,
        favoriteFoods :['chips','choclate','couscous']
    })
    newPerson.save((err , data) => {
        if (err) {return console.error(err);}
        else { 
            console.log("Personne enregistré : ", data)
            done(null, data);
        } 
    })

}
createPerson((err, savedPerson) => {
    if (err) {
        console.error('Error creating person:', err);
    } else {
        console.log('Saved Person:', savedPerson);
 
    }
})*/
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });