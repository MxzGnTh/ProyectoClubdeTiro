const express = require("express");
const {
    getSocios,
    getInstructores,
    postSocios,
    getLogin,
    putSocio,
    deleteSocio,
} = require("../controller/socio.controller");
const { requireAuth } = require("../middlewares/requireAuth");
const router = express.Router();

//GET

router.get("/socio", getSocios);

router.get("/instructor", getInstructores);

//POST

router.post("/login", getLogin);

router.post("/registroSocio", postSocios);


// PRUEBAS

router.get('/prueba', requireAuth, (req, res) => {
    res.send('Palabra secreta')
})

router.put('/editar',putSocio)

router.delete('/delete',deleteSocio)

module.exports = router;
