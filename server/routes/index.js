const router = require('express').Router()
const todosRoutes = require('./todo')
const { UserController } = require('../controllers')

router.use('/todos', todosRoutes)

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googleLogin', UserController.googleLogin)


module.exports = router