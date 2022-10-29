const {savePerson, createPersons, findPersons, findOnePerson, findById, classicUpdate, updatePerson, deleteOne, removePersons, searchPersons} = require("./Person/controller")
require('dotenv').config()
require('./database')



const person={name : "Sivir", email : "Sivir@gmail.com", age : 29, favFoods : ["Meat", "burritos"]};
     
const ArrayOfPersons = [
    {name : "Viego", email : "viego@gmail.com", age : 34, favFoods : ["Donuts", "Ice Cream","Pizza", "burritos"]},
    {name : "Caitlyn", email : "Caitlyn@gmail.com", age : 20, favFoods : ["Fried Chiken", "Pizza","Hamburgers", "Apple Pie"]},
    {name : "Mary", email : "Mary@gmail.com", age : 19, favFoods : ["Hamburgers","Donuts", "Pasta","Meat"]},
    {name : "Ashe", email : "Ashe@gmail.com", age : 27, favFoods : ["Meat", "Rice",, "Soda", "burritos","Potato Chips"]},
    {name : "Ashe", email : "Ashe2@gmail.com", age : 12, favFoods : ["Fried Chiken","Potato Chips", "burritos"]}
];

const searchedName = "Ashe"
const searchedFood = "Pizza"
const searchedId = "635d3aa9480b5cc206515285"
const foodToAdd = "fish"
const searchedNameForUpdate = "Viego"
const newAge = 20
const searchedIdForDelete = "635d201962ae97621ccac050"

//savePerson(person)

//createPersons(ArrayOfPersons)

//findPersons(searchedName)

//findOnePerson(searchedFood)

//findById(searchedId)

//classicUpdate(searchedId, foodToAdd)

//updatePerson(searchedNameForUpdate,newAge )

//deleteOne(searchedIdForDelete)

//removePersons()

//searchPersons()
