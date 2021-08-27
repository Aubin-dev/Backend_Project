const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        age: {
            type: String,
            required: true
        },
        // birthDate: {
        //     type: Number,
        //     required: true
        // },
        // birthPlace: {
        //     type: String,
        //     required: true
        // },
        // email: {
        //     type: String,
        //     unique: true,
        //     required: true
        // },
        // phone: {
        //     type: Number,
        //     required: true
        // },
        // gender: {
        //     type: String,
        //     required: true
        // },
        // civility: {
        //     type: String,
        //     required: true
        // },
        // job: {
        //     type: String,
        //     required: true
        // },
        // document: {
        //     type: String,
        //     required: true
        // },
        // description: {
        //     type: String,
        //     required: true
        // },
        // maritalStatus: {
        //     type: String,
        //     required: true
        // },
        // residence: {
        //     type: String,
        //     required: true
        // }
    },
    { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)