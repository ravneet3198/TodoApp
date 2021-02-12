var express = require("express")
var bodyParser = require("body-parser")
var path = require('path')
var app = express()
var index = require('./routes/index')
var task = require('./routes/task')
var mongoose = require("./db/mongoose")
var PORT=3000;
var cors = require('cors')

//view engine setup
app.set('view engine','ejs')
app.set('views',(path.join(__dirname,'./view')))
app.engine('html',require('ejs').renderFile)

//static for angular files
app.use(express.static(path.join(__dirname,'client')))

//body-parser config
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use('/',index)
app.use('/api',task)

app.listen(PORT,()=>{
    console.log("app listening at "+PORT)
})
