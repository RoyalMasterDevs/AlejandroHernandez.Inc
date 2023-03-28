import express from 'express';
import mysql from 'mysql';

const router = express.Router();
//Crea la app
const app = express()

/** 
 * Inicialización de Base de Datos 
 * */
//Crea las Conexiones
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodemysql"
})

//Conecta a BD
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("conexion lista")
})

/** 
 * Routing DAO Methods
 */
//Crear la BD
app.get("/armateunadb2", (req, res) => {
    let sql = "CREATE DATABASE nodemysql";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("result");
        res.send("Me arme la base de datos");
    });
})

//Crear la tabla en la DB
app.get("/armateuntable2", (req, res) => {
    let sql = "CREATE TABLE posts (id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("result");
        res.send("Me arme una table llamada posts");
    });
})

//Insertar un registro en la tabla post
app.get("/insertnuevoenpost2", (req, res) => {
    let post = { title: "prueba", body: "roger and over" };
    let sql = "INSERT INTO posts SET ?";
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Me arme un nuevo registro");
    });
})

//SELECCIONAR POSTS
app.get("/traetetodoslosposts2", (req, res)=>{
    let sql = "SELECT * FROM posts";
    let query = db.query(sql, (err, result)=>{
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
  })


app.get('/2', (req, res) => {
    res.send('Hola Mundo en expres')
});
app.get('/nosotros2', (req, res) => {
    res.send('Hola Mundo nosotros')
});


export default app