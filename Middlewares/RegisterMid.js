const express = require("express");
const app = express();
const {User} = require('../Database/schema')
const bcrypt = require('bcrypt')

const registerMiddleware = async (req,res)=>{
    
    const {username,email,password,type}=req.body;
    // const hashed_pass= await bcrypt.hash(password,10)
    try{
        const user = new User({
            username:username,
            email:email,
            password:password,
            type:type
        });
        await user.save();
        res.status(200).json({
            Message:"Registration Success"
        })
    }catch(e){
        console.log(e)
    }
}


module.exports=registerMiddleware;