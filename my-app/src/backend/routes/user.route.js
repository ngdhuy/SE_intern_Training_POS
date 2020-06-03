const express = require('express')
const UserRoute = new express.Router()
const { register, login, findUserByID, updateProfile } = require('../controllers/user.controller')

UserRoute.post('/register', register)
UserRoute.post('/login', login)
UserRoute.get('/profile/id/:id', findUserByID)
UserRoute.put('/profile', updateProfile)


module.exports = UserRoute
