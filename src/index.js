// crear constantes
const express  =require ('express');//importar
const app=express();

const morgan =require ('morgan');

//settings
app.set('PORT', process.env.PORT || 3000); //establecer una variable en express indicando el puerto

//middleware secciones de código que permiten intercambiar información entre aplicaciones

app.use(morgan('dev')); //se ejecuta morgan
app.use(express.urlencoded({extended: false})); //permite al servidor entender los datos enviados de formularios
app.use(express.json()); //permite al servidor recibir y entender datos en formato json

//rutas que se usan en la aplicación
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies')); // se va a usar la ruta que es la api de movies y se va a requerir el archivo movies.js

//definir puerto de escucha del servidor - iniciar el servidor
app.listen(app.get('PORT'), () => {
    console.log(`Server on Port ${app.get('PORT')}`);
});