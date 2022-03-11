const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const mysqlConnection = require('../database');

//ver todas las mediciones de altura
router.get('/alt_plantas/show',(req,res)=>{
    const query = "select*from altura_plantas";

    mysqlConnection.query(query,(err,rows,fields)=>{
        if(!err){
            res.status(200).jsonp(rows);
        }else{
            res.status(500).jsonp(err.message);
        }
    })
})

//ver mediciones de altura de una planta
router.get('/alt_plantas/:id',(req,res)=>{
    const {id} = req.params;
    const query = 'select*from altura_plantas where id=?';

    mysqlConnection.query(query,[id],(err,rows,fields)=>{
        if(!err){
            res.status(200).jsonp(rows[0]);
        }else{
            res.status(500).jsonp(err.message)
        }
    })
})

//agregar altura de plantas
router.post('/alt_plantas/add',(req,res)=>{
    const {id_planta,alt_total,alt_fuste,alt_com,alt_tacon,fecha_alt}=req.body;
    const query = 'insert into altura_plantas()values(0,?,?,?,?,?,?)';

    mysqlConnection.query(query,[id_planta,alt_total,alt_fuste,alt_com,alt_tacon,fecha_alt],(err,rows,fields)=>{
        if(!err){
            res.status(200).jsonp({"message":"madida agregada correctamente"});
        }else{
            res.status(500).jsonp(err.message);
        }   
    })
})

//editar medicion de planta
router.put('/alt_plantas/edit/:id',(req,res)=>{
    const {id} = req.params;
    const {id_planta,alt_total,alt_fuste,alt_com,alt_tacon,fecha_alt} = req.body;
    const query = "update altura_plantas set id_planta=?,alt_total=?,alt_fuste=?,alt_com=?,alt_tacon=?,fecha_alt=? where id=?"

    mysqlConnection.query(query,[id_planta,alt_total,alt_fuste,alt_com,alt_tacon,fecha_alt,id],(err,rows,fields)=>{
        if(!err){
            res.status(200).jsonp({"message":"medida actualizada correctamente"})
        }else{
            res.status(500).jsonp(err.message)
        }
    })
})

//eliminar medida de planta
router.delete('/alt_plantas/delete/:id',(req,res)=>{
    const {id} = req.params;
    const query = "delete from altura_plantas where id=?";

    mysqlConnection.query(query,[id],(err,rows,fields)=>{
        if(!err){
            res.status(200).jsonp({'message':'eliminado correctamente'})
        }else{
            res.status(500).jsonp(err.message)
        }
    })
})

module.exports = router