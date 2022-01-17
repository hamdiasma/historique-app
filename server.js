require('dotenv').config()
const express =require("express")
const mongoose =require("mongoose")
const cors =require("cors")
const cookieParse = require("cookie-parser");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParse());


app.get('/',(req,res)=>{
    res.send({msg:"hello social"})
})

const db = process.env.MONGO_URI;

mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

},err =>{
    if(err) throw err;
    console.log("MongoDb connected...");
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server running in port", PORT));