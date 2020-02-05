const express=require('express')
const router=express.Router()
const authenticateUser = require('../middlewares/authenticate')
const userController = require('../controllers/userController')

//user routes handle
router.post('/users/register', userController.register)
router.post('/users/login', userController.login)
router.post('/users/logout', authenticateUser, userController.logout)
router.get('/users/account',authenticateUser, userController.account)

//other routes comes here

module.exports = router