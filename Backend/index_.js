const express = require('express')

const app = express()

//ROUTINGS
app.get('/', function (req,res){
    res.send("Hola X mundo en express")
});

//app.get('/nosotros', function(req,res){
//    res.send("Otro hola desde nosotros")
//})

const port = 3000;
app.listen(port, ()=>{
    console.log(`El servidor está funcionando en el puerto ${port}`)
});