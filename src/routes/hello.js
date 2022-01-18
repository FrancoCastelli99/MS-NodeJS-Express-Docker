const router = require('express').Router();

// Metodo get simple
router.route('/').get((req, res) =>{
    msg = `Hola ${req.query.name || "Mundo"} desde el get request`;
    res.json({msg});
})

// Metodo get con parametro Opcional
router.route('/:lang').get((req,res) => {
    switch(req.params.lang){
        case "es":
            msg = "Hola Mundo";
            break;
        case "en":
            msg = "Hello World";
            break;
        case "fr":
            msg = "Bonjour Monde";
            break;
        default:
            msg = "Hallo Welt";
    }

    res.json({msg});

})

// router.route('/').post((req, res) => {
//     msg = `Hello ${req.body.name || "World"} from post request!`;
//     res.json({msg});

// })

//Suma Metodo Post
router.route('/').post((req, res) => {
    let result = req.body.a + req.body.b;
    res.json({result});

})


module.exports = router;