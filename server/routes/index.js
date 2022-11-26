var express = require("express");
var router = express.Router();
var { executeQuery } = require("../Utilis/db");
var {queries} = require('../Utilis/query')


router.get('/',(req,res,next)=>{
  executeQuery(queries.view,[],(err,result)=>{
    console.log(err,result)
    if(err){
      res.status(400).send(err);
    }else{
      res.status(200).send(result);
    }
  })
})


router.get('/',(req,res,next)=>{
  executeQuery(queries.view,[],(err,result)=>{
    console.log(err,result)
    if(err){
      res.status(400).send(err);
    }else{
      res.status(200).send(result);
    }
  })
})

router.get('/cow',(req,res,next)=>{
  res.send('<h1>I am cow</h1>')
})  

//create a form 
router.get('/form/create',(req,res,next) =>{
  res.send("<h1>Create a form</h1>")
})

//view a form 
router.get('/form/:id',(req,res,next)=>{
  const id = req.params.id
  console.log(id)

  executeQuery(queries.singleform(id),[],(err,result)=>{
    console.log(err,result)
    if(err){
      res.status(400).send(err);
    }else{
      res.status(200).send(result);
    }
  })
})

  


//submit a form
router.post('/submit',async(req,res,next)=>{
  console.log("fff")
  const {formfields,value} = await req.body
  const form_title = JSON.stringify(value)
  const form_fields = JSON.stringify(formfields)
  // console.log(form_fields)
   executeQuery(queries.submit,[form_title,form_fields],(err,result)=>{
    if(err){
      res.status(400).send(err);
    }else{
      res.status(200).send(result);
    }
   })
})

//edit a form

router.put('/form/id/edit',(req,res,next)=>{
  res.send("<h1>eidt a form</h1>")
})




module.exports = router;