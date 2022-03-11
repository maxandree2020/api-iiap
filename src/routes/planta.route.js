const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const mysqlConnection = require('../database')

//mostrar plantas 
router.get('/plantas/show',(req,res)=>{
    mysqlConnection.query('select * from plantas',(err,rows,fields)=>{
        if(!err){
            res.status(200).json(rows);
        }else{
            res.status(500).json(err.message)
        }
    })
})

//mostrar planta por codigo
router.get('/plantas/:id',(req,res)=>{
    const {id} = req.params;
    const query = 'select * from plantas where codigo=?';

    mysqlConnection.query(query,[id],(err,rows,fields)=>{
        if(!err){
            res.status(200).json(rows[0]);
        }else{
            res.status(500).json(err.message)
        }
    })
})

// agregar plantas
router.post('/plantas/add',(req,res)=>{
    const {codigo,nombre_comun,nombre_cient,familia,imagen} = req.body;
    const query = 'insert into plantas()values(?,?,?,?,?)';

    mysqlConnection.query(query,[codigo,nombre_comun,nombre_cient,familia,imagen],(err,rows,fields)=>{
        if(!err){
            res.status(200).json({"meesage": "agregado correctamente"});
        }else{
            res.status(500).json(err.message);
        }
    })    
})

// actualizar información de las plantas
router.put('/plantas/edit/:id',(req,res)=>{
    const {nombre_comun,nombre_cient,familia,imagen} = req.body;
    const {id} = req.params;
    const query = 'update plantas set nombre_comun=?,nombre_cient=?,familia=?,imagen=? where codigo=?';
    
    mysqlConnection.query(query,[nombre_comun,nombre_cient,familia,imagen,id],(err,rows,fields)=>{
        if(!err){
            res.status(200).json("planta actualizada con exito");
        }else{
            res.status(500).json(err.message)
        }
    });
})

// eliminar plantas
router.delete('/plantas/delete/:id',(req,res)=>{
    const {id} = req.params;
    const query = 'delete from plantas where codigo=?'

    mysqlConnection.query(query,[id],(err,rows,fields)=>{
        if(!err){
            res.status(200).json("eliminado correctamente")
        }else{
            res.status(500).json(err.message)
        }
    })
})


module.exports = router;