// requires
var express = require('express');
var mongoose = require('mongoose');

// inicializar valiable

var app = express();

//conexion a la base de disastrous
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB',( err, res) =>{
    if (err) throw err;
    console.log('base de datos \x1b[32m%s\x1b[0m' ,'OnLINE');
});


//rutas
app.get('/',(req, res, next)=>{
    res.status(404).json({
        ok:true,
        mensaje: 'peticion realizada correctamente'
    })
})


//escuchando peticiones
app.listen(3000,()=>{
    console.log('express server prueba en \x1b[32m%s\x1b[0m' ,'OnLINE');
})