const mongoose = require('mongoose')

const threadSchema = new mongoose.Schema({
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
    }
}, {timestamps: true})

threadSchema.virtual('replys', {
    ref: 'Reply',
    localField: '_id',
    foreignField: 'ownerThread'
})

const Thread = mongoose.model('Thread', threadSchema)

module.exports = Thread