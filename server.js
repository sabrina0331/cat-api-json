const express = require('express')
const bodyParser = require('body-parser')

var app = express()

require("./server/config/routes")(app)

app.listen(5000,function(){
    console.log('listening on port 5000')
})