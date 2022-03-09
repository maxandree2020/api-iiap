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
    const query = 'select * from plantas where codigo=?';

    mysqlConnection.query(query,[id],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err)
        }
    })
})

// agregar plantas
router.post('/plantas/add',(req,res)=>{
    const {codigo,nombre_comun,nombre_cient,fecha_plant} = req.body;
    const query = 'insert into plantas(codigo,nombre_comun,nombre_cient,fecha_plant)values(?,?,?,?)';

    mysqlConnection.query(query,[codigo,nombre_comun,nombre_cient,fecha_plant],(err,rows,fields)=>{
        if(!err){
            res.json({status:'planta agregada'});
        }else{
            res.json(err);
        }
    })    
})

// actualizar información de las plantas
router.put('/plantas/:id',(req,res)=>{
    const {nombre_comun,nombre_cient,fecha_plant} = req.body;
    const {id} = req.params;
    const query = 'update plantas set nombre_comun=?,nombre_cient=?,fecha_plant=? where codigo=?';
    
    mysqlConnection.query(query,[nombre_comun,nombre_cient,fecha_plant,id],(err,rows,fields)=>{
        if(!err){
            res.json("planta actualizada con exito");
        }else{
            res.json(err)
        }
    });
})

// eliminar plantas
router.delete('/plantas/delete/:id',(req,res)=>{
    const {id} = req.params;
    const query = 'delete from plantas where codigo=?'

    mysqlConnection.query(query,[id],(err,rows,fields)=>{
        if(!err){
            res.json("planta ha sido eliminada")
        }else{
            res.json(err)
        }
    })
})


module.exports = router;