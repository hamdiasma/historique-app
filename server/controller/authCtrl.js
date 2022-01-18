const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const req = require('express/lib/request')





const authCtrl={
register:async (req,res)=>{
    try {
     const  {
        fullname,
        username,
        email,
        password,
        gender
       }=req.body

    let newUsername = username.toLowerCase().replace(/ /g,'')

const userName = await User.findOne({username:newUsername}) 
if(userName){
    return res.status(400).json({msg:"User already name exist..!"})
}
const userEmail = await User.findOne({email}) 
if(userEmail){
    return res.status(400).json({msg:"Email already exist..!"})
}
if(password.length< 6){
    return res.status(400).json({msg:"password must be more then 6 characters..!"})
}
const passwradHash = await bcrypt.hash(password,12)

const newUser = new User({
    fullname,
    username,
    email,
    password:passwradHash,
    gender,
    defaultpassword:password
})

// console.log(newUser.id)


const access_token = createAccessToken({id:newUser._id})
const refresh_token = refrechToken({id:newUser._id})
res.cookie("socialtoken",refresh_token ,{
    httpOnly:true,
    path:"/api/refresh_token",
    maxAge:30*7*60*24*60*1000
})

  await newUser.save()

     res.json({
         msg:'Register success',
         access_token,
         user:{
          ...newUser._doc,
          password:"",
          defaultpassword:""
          
    }} )

    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
},

login:async (rea,res)=>{
    try {
        
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
},
logout:async (rea,res)=>{
    try {
        
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
},
generateAccessToken:async (rea,res)=>{
    try {
        
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
}
}

module.exports = authCtrl



const createAccessToken=(payload)=>{
return jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1d'})
}
const refrechToken=(payload)=>{
    return jwt.sign(payload,process.env.REFRESH_TOKEN_SECRET,{expiresIn:'30d'})
}