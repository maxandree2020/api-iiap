const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const mysqlConnection = require('../database')

//mostrar plantas 
router.get('/plantas/show',(req,res)=>{
    mysqlConnection.query('select * from plantas',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err)
        }
    })
})

//mostrar planta por codigo
router.get('/plantas/:id',(req,res)=>{
    const {id} = req.params;
    mysqlConnection.query('select * from plantas where codigo=?',[id],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err)
        }
    })
})

// agregar plantas
router.post('/plantas/:planta',(req,res)=>{
    const {codigo,nombre_com,nombre_cient,fecha_plant} = request.body;

    mysqlConnection.query('insert into plantas()values(?,?,?,?)',[codigo,nombre_com,nombre_cient,fecha_plant],(err,rows,fields)=>{
        if(!err){
            res.json({status:'planta agregada'});
        }else{
            console.log(err);
        }
    })
})

// actualizar información de las plantas



// eliminar plantas



module.exports = router;