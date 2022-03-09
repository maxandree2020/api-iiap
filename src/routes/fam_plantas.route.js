const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const mysqlConnection = require('../database');

//mostrar toda la familia de plantas
router.get('/fam_plantas/show',(req,res)=>{
    mysqlConnection.query("select*from fam_plantas",(err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            res.json(err)
        }
    })

})

//mostrar una familia de plantas
router.get('/fam_plantas/:id', (req,res)=>{
    const {id} = req.params;
    const query = 'select * from fam_plantas where id = ?';

    mysqlConnection.query(query,[id],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            res.json(err)
        }
    })
})

//agregar nueva familia de plantas
router.post('/fam_plantas/add',(req,res)=>{
    const {nombre,descripcion} = req.body;
    const query = 'insert into fam_Plantas()values(0,?,?)';

    mysqlConnection.query(query,[nombre,descripcion],(err,rows,fields)=>{
        if(!err){
            res.status(200).json({"message":"agregado con éxito"})
        }else{
            res.status(500).json(err.message)
        }
    })
})

//editar una familia de plantas
router.put('/fam_plantas/edit/:id',(req,res)=>{
    const {id} = req.params;
    const {nombre,descripcion} = req.body;
    const query = 'update fam_plantas set nombre=?,descripcion=? where id=?';  

    mysqlConnection.query(query,[nombre,descripcion,id],(err,roes,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            res.json(err);
        }
    })
})

//eliminar familia de planta
router.delete('/fam_plantas/delete/:id',(req,res)=>{
    const {id} = req.params;

    mysqlConnection.query('delete from fam_plantas where id=?',[id],(err,rows,fields)=>{
        if(!err){
            res.status(200).json({"message":"eliminado correctamente"})
        }else{
            res.status(500).json(err.message)
        }
    })
})

module.exports = router;