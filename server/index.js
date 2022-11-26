const express = require('express')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
// const cors = require('cors')
var { executeQuery } = require("./Utilis/db");
var indexRouter = require('./routes/index')


const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
  

app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended:false}))
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',indexRouter);



app.use(function(req, res, next) {
    next(createError(404));
  });

// app.get('/',(req,res)=>{
//     res.send('<h1>Hello new app</h1>')
// })

// app.get('/')





app.listen(4040,()=>{
    console.log('Server is running on port 4040')
})

module.exports = app