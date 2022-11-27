var express = require("express");
var router = express.Router();
var { executeQuery } = require("../Utilis/db");
var {queries} = require('../Utilis/query')


router.get('/',(req,res,next)=>{
  executeQuery(queries.view,[],(err,result)=>{
    if(err){
      res.status(400).send(err);
    }else{
      res.status(200).send(result);
    }
  })
})


//view a form 
router.get('/form/:id',(req,res,next)=>{
  const id = req.params.id
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
  const {formfields,value} = await req.body
  const form_title = JSON.stringify(value)
  const form_fields = JSON.stringify(formfields)
   console.log(form_fields)
   executeQuery(queries.submit,[form_title,form_fields],(err,result)=>{
    if(err){
      res.status(400).send(err);
    }else{
      res.status(200).send(result);
    }
   })
})





module.exports = router;