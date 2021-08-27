const User = require('../models/users.model')
const bcrypt = require('bcrypt')
module.exports = class UserController {
    // register the users
    static async addUser(data){
        const salt = await bcrypt.genSalt(10)
        // const hashedPassword = await bcrypt.hash(data.password, salt)

        const userData = {
            firstname:data.firstname ,
            lastname: data.lastname,
            age: data.age,
            // birthDate: data.birthDate,
            // birthPlace: data.birthPlace,
            // email: data.email,
            // phone:data.phone ,
            // gender:data.gender ,
            // civility: data.civility,
            // job: data.job,
            // document: data.document,
            // description:data.description ,
            // maritalStatus: data.maritalStatus,
            // residence: data.residence,
            // password: hashedasPsword
        }
        const user = new User({...userData})
        console.log(user)
        const output = await user.save()
        if (output) {
            return { success: true }
        } 
        else {
            return { success: false }
        }
    }


    // GET new users
    static async getUser(data) {
        const user = await User.findById(data)
        if (user) {
            return user
        } else {
            return { message: "user not found" }
        }
    }


    // GET ALL USER
    static async getAllUser() {
        const user = await User.find()
        if (user) {
            return user
        } else {
            return { message: "users not found" }
        }
    }

    // Update USER
    static async updateUser(data, newData) {
        const user = await User.updateOne(data, newData)
        if (user) {
            return user
        } else {
            return { message: "update not accepted" }
        }
    }

    // DELETE USER
    static async deleteUser(data) {
        const user = await User.deleteOne(data)
        if (user) {
            return user
        } else {
            return { message: "user not delete" }
        }
    }

}