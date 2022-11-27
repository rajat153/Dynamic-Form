const express = require('express')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var indexRouter = require('./routes/index')


const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
  

app.use(bodyParser.json())
app.use(cookieParser());
app.use('/',indexRouter);


app.use(function(req, res, next) {
    next(createError(404));
  });

app.listen(4040,()=>{
    console.log('Server is running on port 4040')
})

module.exports = app