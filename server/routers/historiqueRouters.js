const router = require('express').Router()
const authCtrl = require('../controller/authCtrl')
const historiqueCtrl = require('../controller/historyCtrl')


// register new user

router.get("/historiques", historiqueCtrl.getNotfy)
router.post("/historiques", historiqueCtrl.createNotfy)



module.exports = router