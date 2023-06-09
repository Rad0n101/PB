const Router = require('express')
const router = new Router()

const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const themeRouter = require('./themeRouter')
const categoryRouter = require('./categoryRouter')

router.use('/user', userRouter)
router.use('/theme', themeRouter)
router.use('/product', productRouter)
router.use('/category', categoryRouter)

module.exports = router
