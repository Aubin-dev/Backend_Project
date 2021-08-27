const mongoose = require('mongoose')

const ProfilSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    preference: {
    type: Array,
    default: ''
    },
    profilPicture: {
        type: String,
        default: '',
    },
    biography: {
        type: String,
        default: '',
    },
    followers: {
        type: Number
    },
    views: {
        type: Number
    },
    likes: {
        type: Number
    },
    heart: {
        type: Number
    },
    Chats: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Room'
    }
    

})

module.exports = mongoose.model('Profil', ProfilSchema)