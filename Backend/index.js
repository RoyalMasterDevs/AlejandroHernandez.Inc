import express from 'express' //ECMAScript modules
import usuarioRoutes from './usuarioRoutes.js'

//Crea la app
const app = express()

//Routing
app.use('/', usuarioRoutes);

//Define un puerto y arranca el proyecto
const port = 3000;

app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
});