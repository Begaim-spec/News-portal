const News = require('../models/news')
const Users = require('../models/user')

const createPost = async (req, res) => {
    try{
        const newPost = new News(req.body)
        const savedPost = await newPost.save()
        await  Users.findByIdAndUpdate(savedPost.user, {$push: {news: savedPost._id}})
        res.json(savedPost)
    } catch(e){
        res.status(400).json({message: "Ошибка сохранения"})
    }
}
const getAllNews = async (req, res) => {
    try{
        const news= await News.find({}).populate("user")
        res.json(news)
    } catch(e){
        res.status(400).json({message: "Page not found"})
    }
}

const oneNews = async (req, res) => {
    try{
        const singleNews = await News.findById(req.params.id).populate("user", '-password')
            .populate({path: "comments", populate: 'user'})
        res.json(singleNews)
    } catch(e){
        res.json({message: "Not found"})
    }
}
module.exports = {createPost, getAllNews, oneNews}