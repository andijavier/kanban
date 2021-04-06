const router = require('express').Router()
const authenticate = require('../middlewares/authentication')
const taskRouter = require('./taskRoute')
const ControllerUser = require('../controller/userController')

router.post('/register', ControllerUser.register)
router.post('/login', ControllerUser.login)
router.post('/googlelogin', ControllerUser.googlelogin)

router.use(authenticate)

router.use('/tasks', taskRouter)

module.exports = router