const express = require('express')
const router = express.Router()
const { signup, signin, isAuthenticate, getUserInfo, googleLogin} = require('../controllers/authController')

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/google-login', signin)
router.get('/user/:id', googleLogin)
router.get('/authenticate', isAuthenticate)

module.exports = router