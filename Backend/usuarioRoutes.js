import express from 'express';
import http from 'http';
import fs from 'fs';


//const router = express.Router(); 
var app = express(); 

/* app.get('/crud', (req,res) => { 
    fs.readFile('./crud.html', function (err, html) {
    
        if (err) throw err;    
    
        http.createServer(function(request, response) {  
            response.writeHeader(200, {"Content-Type": "text/html"});  
            response.write(html);  
            response.end();  
        });
    });
}); */

//Routing
app.get('/', (req, res) => {
    res.send('Hola Mundo en expres')
});
app.get('/nosotros', (req, res) => {
    res.send('Hola Mundo nosotros')
});

export default app