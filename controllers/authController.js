const Users = require('../models/user')
const jwt = require('jsonwebtoken')
const {OAuth2Client} = require ('google-auth-library')

const signup = (req, res) => {
    const {email} = req.body
    Users.findOne({email}).exec((error, user) => {
        if (user) {
            return res.status(400).json({message: 'Такой пользователь уже есть'})
        }
        const newUser = new Users(req.body)
        newUser.save((error, user) => {
            if (error){
                return res.status(400).json({message: "Ошибка сохранения"})
            }
            return res.json({message: "Пользователь успешно зарегистрирован. Войдите"})
        })
    })
}
const signin = (req, res) => {
  const {email, password} = req.body
    Users.findOne({email}).exec(async(error, user) => {
        if (!user) {
            return res.status(400).json({message: 'Пользователя не существует'})
        }
        if (!await user.authenticate(password)){
            res.status(401).json({message: "Неверный пароль!"})
        }
        const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY, {expiresIn: "2d"})
        return res.json(
            {token,
            user: {_id: user._id, email: user.email, role: user.role, name: user.name}
            })
    })
}

const isAuthenticate = async (req, res) => {
    const token = req.header('auth-token')
    try{
        if (!token) {
          res.status(401).json({"message": "Токен не найден"})
    }
        const payload = jwt.verify(token, process.env.SECRET_KEY)
        const user = await  Users.findOne({_id: payload._id})
        res.json({token, user: {_id: user._id, email: user.email, role: user.role, name: user.name}})
    } catch(e){
    return  res.status(401).json({"message": "Invalid token"}) }
}
const getUserInfo = async (req, res) => {
    try{
        const user = await Users.findById(req.params.id).populate('news', '-password')
        res.json({user: {_id: user._id, email: user.email, role: user.role, name: user.name, news: user.news}})
    } catch (e) {
        res.status(400).json({message: "Польователь не найден"})
    }
}

const client = new OAuth2Client('342964953054-g66na1fmak932c1nkrr6n4a1l5edk14f.apps.googleusercontent.com');
const googleLogin =  (req, res) => {
    const {idToken} = req.body
    client.verifyIdToken({idToken, audience: '342964953054-g66na1fmak932c1nkrr6n4a1l5edk14f.apps.googleusercontent.com'})
    const {email_verified, name, email} = response.payload;
    if (email_verified){
        Users.findOne({email}).exec((error, user) => {
            if (user){
                const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY, {expiresIn: "7d"})
                const {_id, email, name, role} = user;
                return res.json({
                    token,
                    user: {_id, email, name, role}
                });
            }
            else {
                let password = email + 'BONJORNO'
                user = new Users ({name, email, password});
                user.save((error, data) => {
                    if (error) {
                        console.log('ERROR GOOGLE LOGIN ON USER SAVE', error)
                        return res.status(400).json({
                            error: 'User signup failed with google'
                        });
                    }
                    const token = jwt.sign({_id: data._id}, 'BONJORNO', {expiresIn: '7d'})
                    const {_id, email, name, role} = data
                    return res.json({
                        token,
                        user: {_id, email, name, role}
                    })
                })
            }
    })
    } else {
        return res.status(400).json({
            error: 'Google login failed. Try again.'
        })
    }
}
module.exports = {signup, signin, isAuthenticate, getUserInfo, googleLogin}