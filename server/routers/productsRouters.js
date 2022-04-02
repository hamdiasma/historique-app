const router = require('express').Router()
const productCtrl = require('../controller/productCtrl')


// register new user

router.get("/poduct",productCtrl.getProduct)
router.post("/poduct",productCtrl.createProduct)
router.delete("/poduct/:id",productCtrl.deleteProduct)



module.exports = router