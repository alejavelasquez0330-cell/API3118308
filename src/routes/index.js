const {Router} = require('express');
const router = Router();

//routes= ruta de conexión a los archivos que se requieran

//se crea ruta con peticion del get, hacia la ruta del proyecto y debe responder con el json que tiene ese contenido
router.get('/', (req, res) => {
    res.json({ "title": "Hello word" });
});

module.exports = router; //Se exporta la ruta cuando se requiera en otras secciones