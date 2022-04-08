const { Schema, model } = require("mongoose")

const useSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    status: {type: String, required: true},

}, {timestamps: true})

module.exports = model('User', useSchema)