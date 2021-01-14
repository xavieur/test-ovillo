const mongoose = require('mongoose')

const replySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    ownerThread: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Thread'
    }
}, {timestamps: true})

const Reply = mongoose.model('Reply', replySchema)

module.exports = Reply