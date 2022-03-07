const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const mysqlConnection = require('../database')

//mostrar persona
router.get('/persona/show',(req,res)=>{
    mysqlConnection.query('select*from persona',(err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err)
        }
    })

})