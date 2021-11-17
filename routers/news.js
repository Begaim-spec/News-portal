const express = require('express')
const {createPost, getAllNews, oneNews} = require("../controllers/news");
const router = express.Router()
const verify = require('../middleware/authVerify')

router.post('/', verify, createPost)
router.get('/', getAllNews)
router.get('/:id', oneNews)


module.exports = router