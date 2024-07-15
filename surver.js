const express = require ("express");
const mongoose = require ("mongoose");
require('dotenv').config();
const app = express();
const PORT = 3000 ;
//Create a person with this prototype:

const schema= mongoose.Schema
const personSchema = new schema ({
    name : {type : String, required : true},
    age : {type : Number , default :0} ,
    favoriteFoods :{type: [String], default :[]}
})

const Person = mongoose.model ("Person",personSchema )

const uri = process.env.MONGO_URI
mongoose.connect(uri, {

}).then(async() =>
console.log(" connection à Mongo"))
const arrayOfPeople = [{ name: 'rihab', age: 20, favouriteFoods: ['burritos', 'Burger'] },

{ name: 'ghada', age: 22, favouriteFoods: ['Pizza','lasagne'] },

{ name: 'wassim', age: 28, favouriteFoods: ['takos', 'chocolate'] },

]
try {const people = await Person.create(arrayOfPeople)
    console.log("person created",people);
}
catch (error) {console.log(error)};

.catch(err=> console.error("Erreur de connection à Mongo"))
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