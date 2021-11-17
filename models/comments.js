const mongoose = require('mongoose')

const newComment = new mongoose.Schema({
        comment: {type: String, required: true},
        user: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
        news: {type: mongoose.Schema.Types.ObjectId, ref: "news"}
    },
    {timestamps: true})

module.exports = mongoose.model('comments', newComment)