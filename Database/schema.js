const { text } = require('express')
const mongoose = require('mongoose')
const { db } = require('./mongoose')


const user = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    type:{
        type:String
    }
})

const adoptreq = new mongoose.Schema({
    name:{
        type:String
    },
    adopter_email:{
        type:String
    },
    phoneno:{
        type :String
    },
    address:{
        type:String
    },
    desc:{
        type:String
    }
})

module.exports={
    User:db.model("User",user,"User"),
    AdoptReqData:db.model("AdoptReqData",adoptreq,"ADOPT_REQ_DATA")
}
   