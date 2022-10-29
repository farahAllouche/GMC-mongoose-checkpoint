const mongoose= require('mongoose')
let validator = require('validator')


const personSchema = mongoose.Schema( {
    name : {
        type :String,
        required : true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
          return validator.isEmail(value)
        }
    },
    age : Number,
    favFoods : [String],
});


const Person = mongoose.model("person", personSchema)

module.exports=Person