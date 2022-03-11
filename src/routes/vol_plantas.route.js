const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const mysqlConnection = require('../database');

//mostrar todo los volumenes
router.get("/vol_plantas/show",(req,res)=>{
    const query = "select*from vol_plantas";

    mysqlConnection.query(query,(err,rows,fields)=>{
        if(!err){
            res.status(200).jsonp(rows);
        }else{
            res.status(500).jsonp(err.message);
        }
    })
})

//mostrar solo un volumen 
router.get('/vol_plantas/:id',(req,res)=>{
    const {id} = req.params;
    const query = "select*from vol_plantas where id=?"

    mysqlConnection.query(query,[id],(err,rows,fields)=>{
        if(!err){
            res.status(200).jsonp(rows[0])
        }else{
            res.status(500).jsonp(err.message)
        }
    })
})

//agregar medida de volumen
router.post('/vol_plantas/add',(req,res)=>{
    const {id_alt_plant,dap,factor_forma,fecha_vol} = req.body;
    const query = "insert into vol_plantas()values(0,?,?,?,?)";

    mysqlConnection.query(query,[id_alt_plant,dap,factor_forma,fecha_vol],(err,rows,fields)=>{
        if(!err){
            res.status(200).jsonp({"message":"agregado correctamente"})
        }else{
            res.status(500).jsonp(err.message)
        }
    })
})

//actualizar medida de volumen de una planta
router.put("/vol_plantas/edit/:id",(req,res)=>{
    const {id} = req.params;
    const {id_alt_plant,dap,factor_forma,fecha_vol} = req.body;
    const query = "update vol_plantas set id_alt_plant=?,dap=?,factor_forma=?,fecha_vol=? where id=?";

    mysqlConnection.query(query,[id_alt_plant,dap,factor_forma,fecha_vol,id],(err,rows,fields)=>{
        if(!err){
            res.status(200).jsonp({"message": "actualizado correctamente"})
        }else{
            res.status(500).jsonp(err.message)
        }
    })
})

//eliminar medida de volumen
router.delete('/vol_plantas/delete/:id',(req,res)=>{
    const {id} = req.params;
    const query = "delete from vol_plantas where id=?";

    mysqlConnection.query(query,[id],(err,rows,fields)=>{
        if(!err){
            res.status(200).jsonp({"message":"eliminado correctamente"})
        }else{
            res.status(500).jsonp(err.message)
        }
    })
})

module.exports = router