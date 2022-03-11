const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const mysqlConnection = require("../database");

//mostrar todas las localizaciones de plantas
router.get("/local_plantas/show",(req,res)=>{
    const query = "select*from local_plantas";
    
    mysqlConnection.query(query,(err,rows,fields)=>{
        if(!err){
            res.status(200).jsonp(rows)
        }else{
            res.status(500).jsonp(err.message)
        }
    })
})

//mostrar unica planta con id
router.get("/local_plantas/:id",(req,res)=>{
    const  {id} = req.params;
    const query = "select*from local_plantas where id=?"; 

    mysqlConnection.query(query,[id],(err,rows,fields)=>{
        if(!err){
            res.status(200).jsonp(rows[0]);
        }else{
            res.status(500).jsonp(err.message);
        }
    })
})

//agregar localia de planta
router.post("/local_plantas/add",(req,res)=>{
    const {id_planta,latitud,longitud} = req.body;
    const query = "insert into local_plantas()values(0,?,?,?)";

    mysqlConnection.query(query,[id_planta,latitud,longitud],(err,rows,fields)=>{
        if(!err){
            res.status(200).jsonp({"message":"agregado correctamente"})
        }else{
            res.status(500).jsonp(err.message)
        }

    })
})

//editar localia de planta
router.put("/local_plantas/edit/:id",(req,res)=>{
    const {id} = req.params;
    const {id_planta,latitud,longitud} = req.body;
    const query = "update local_plantas set id_planta=?,latitud=?,longitud=? where id=?";

    mysqlConnection.query(query,[id_planta,latitud,longitud,id],(err,rows,fileds)=>{
        if(!err){
            res.status(200).jsonp({"message" : "actualizado correctamente"});
        }else{
            res.status(500).jsonp(err.message);
        }
    })
})

//eliminar localia de planta
router.delete("/local_plantas/delete/:id",(req,res)=>{
    const {id} = req.params;
    const query = "delete from local_plantas where id=?";

    mysqlConnection.query(query,[id],(err,rows,fileds)=>{
        if(!err){
            res.status(200).jsonp({"message":"eliminado correctamente"})
        }else{
            res.status(500).jsonp(err.message);
        }
    })
})

module.exports = router;