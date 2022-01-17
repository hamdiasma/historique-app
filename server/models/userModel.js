const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({

    fullname:{
        type: String,
        require: true,
        trim:true,
        maxlength:25
    },
    username:{
        type: String,
        require: true,
        trim:true,
        maxlength:25,
        uniquetrue
    },
    email:{
        type: String,
        require: true,
        trim:true,
        uniquetrue
    },
    password:{
        type: String,
        require: true,
    },
    avatar:{
        type: String,
        default:"https://res.cloudinary.com/hamdi-ba/image/upload/v1620037324/profile/avatar_l3ted6.png"
    },
    role:{
        type:String,
        default:'user'
    },
    gender:{
        type:String,
        default:'male'
    },
    mobile:{
        type:String,
        default:''
    },
    adress:{
        type:String,
        default:''
    },
    story:{
        type:String,
        default:'',
        maxlength:200
    },
    website:{
        type:String,
        default:'',
    },
    followers:[{
        type:mongoose.Types.ObjectId,
        ref:'User',
    }],
    following:[{
        type:mongoose.Types.ObjectId,
        ref:'User',
    }],
},{timestamps:true})

module.exports = User = mongoose.model("User", userSchema);