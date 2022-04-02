const mongoose = require("mongoose")


const productShema = new mongoose.Schema({

    productTitle:{
        type: String,
        require: true,
       
    },
    productDesc:{
        type: String,
        require: true,
    },

},{timestamps:true})

module.exports =  mongoose.model("Product", productShema);