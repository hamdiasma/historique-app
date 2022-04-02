const Products = require('../models/productModel')

const  productCtrl={
    createProduct:async (req,res)=>{
        const {productTitle,productDesc}=req.body
        try {
          const   product = new Products({
            productTitle,productDesc
          })
          await product.save()
          res.json({product})
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }        

    },

    getProduct:async (req,res)=>{
        try {
          const   products = await Products.find()
          res.json({products})
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }        

    },
    deleteProduct:async (req,res)=>{
        try {
          
          await Products.findOneAndDelete({_id:req.params.id})
          res.json({msg:"product was deleted"})
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }        

    }
}

module.exports = productCtrl