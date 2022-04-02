const Historique = require('../models/historiqueModel')

const  historiqueCtrl={
    createNotfy:async (req,res)=>{
        const {messageHistorique}=req.body
        try {
          const   historique = new Historique({
            messageHistorique
          })
          await historique.save()
          res.json(historique)
        } catch (error) {
            return res.status(500).json({msg:error.message})
            
        }
    },

    getNotfy:async (req,res)=>{
        try {
          const   historiques = await Historique.find()
          res.json({historiques})
        } catch (error) {
            return res.status(500).json({msg:error.message})
            
        }
    }
}

module.exports = historiqueCtrl