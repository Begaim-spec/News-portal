const Comments = require('../models/comments')
const News = require('../models/news')

const createComments =  async (req, res) => {
    try{
        const comment = new Comments(req.body)
        const savedComment = await comment.save()
        await  News.findByIdAndUpdate(savedComment.news, {$push: {comments: savedComment._id}})
        res.json(savedComment)
    } catch(e){
        res.status(400).json({message: "Ошибка сохранения"})
    }
}
module.exports = {createComments}