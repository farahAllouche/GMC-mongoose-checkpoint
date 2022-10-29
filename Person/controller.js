const Person = require('./schema')


function savePerson (person) {
    const newPerson = new Person(person)

    newPerson.save()
    .then(console.log("Create and Save a Record successfully done ! "))
    .catch(err=> {
        console.log("Create and Save a Record failed ! ");
    })

}
function createPersons (ArrayOfPersons) {
    Person.create (ArrayOfPersons)
    .then(console.log("Create Many Records successfully done ! "))
    .catch(err=> {
        console.log("Create Many Records failed ! ");
    })

} 


function findPersons (personName) {
    Person.find ({name : personName})
    .then(data => {
        console.log(`Find all the people having the name ${personName}:  `)
        console.log(data);

    })
    .catch(err=> {
        console.log(`Find all the people having the name ${personName} failed ! `);
    })

}

function findOnePerson (food) {
    Person.findOne ({favFoods : { $elemMatch: {$eq: food }}})
    .then(data => {
        console.log(`Find a person who has ${food} in their favorites food : `)
        console.log(data);
    })
    .catch(err=> {
        console.log(`Find a person who has ${food} in their favorites food failed ! `);
    })

}

function findById (personId) {
    Person.find ({_id : personId})
    .then(data => {
        console.log(`Find the person who has the id :  ${personId}:  `)
        console.log(data);

    })
    .catch(err=> {
        console.log(`Find the person who has the id : ${personId} failed ! `);
    })

}


function classicUpdate (personId, food) {
    Person.findOne ({_id : personId})
    .then (data => {
        data.favFoods.push(food)
        data.save().then(data => {
            console.log(`Classic update successfully done `);
            console.log(data);

        })
    })
    .catch(err=> {
        console.log(`Classic update failed ! `);
        console.log(err);
    })


}

function updatePerson (personName, personAge) {
    Person.findOneAndUpdate ({name : personName}, {age : personAge}, { new: true })
    .then (data => {
        console.log(`update person successfully done `);
        console.log(data);

    })
    .catch(err=> {
        console.log(`update person failed ! `);
        console.log(err);
    })
}

function deleteOne (personId) {
    Person.findOneAndDelete ({_id : personId},)
    .then (data => {
        console.log(`delete person successfully done `);
        console.log(data);

    })
    .catch(err=> {
        console.log(`delete person failed ! `);
        console.log(err);
    })

}

function removePersons () {
    Person.remove ({name : "Mary"})
    .then (data => {
        console.log(`delete all the people whose name is “Mary” successfully done `);
        console.log(data);

    })
    .catch(err=> {
        console.log(`delete all the people whose name is “Mary” failed ! `);
        console.log(err);
    })

}

function searchPersons () {
    Person.find({favFoods : "burritos"})
    .sort({ name: 1 })
    .limit(2)
    .select({ age: false })
    .exec(function (err, data) {
    err ? console.log(err) : console.log(data);
    });
}
module.exports = {savePerson, createPersons, findPersons, findOnePerson, findById, classicUpdate, updatePerson, deleteOne, removePersons, searchPersons};