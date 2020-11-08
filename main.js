let express = require('express')
let router = express.Router()
let bodyParser = require('body-parser')

const mongoose = require('mongoose');
const shortid = require('shortid');
process.env.MONGO_URI='mongodb+srv://123456dD:123456dD@cluster0.h3tt0.mongodb.net/123456dD?retryWrites=true&w=majority';
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true } )

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())
//SCHEMA
const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    userId: String,
    description:String,
    duration: Number,
    date: Date
})

//MODEL
var User = mongoose.model("Exercisers",userSchema)

//TASKS
//1. POST /api/exercise/new-user res=> json{usernam, id} and store into MongoDb
router.post('/api/exercise/new-user',(req, res)=>{
    var {username} = req.body
    userId = shortid.generate()
    res.json({'username':username,'_id':userId})

    
})

module.exports = router