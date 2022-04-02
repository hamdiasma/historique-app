const mongoose = require("mongoose")


const historiqueSchema = new mongoose.Schema({

    messageHistorique:{
        type: String,
        require: true,
       
    },


},{timestamps:true})

module.exports = mongoose.model("Historique", historiqueSchema);