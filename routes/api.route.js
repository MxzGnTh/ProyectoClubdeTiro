const express = require("express");
const {

    getLogin,
    postSocios,
    putSocio,
    deleteSocio,
    getSocioadmi,
    getadmin,
    putAdmin,
    logout,
} = require("../controller/socio.controller");

const router = express.Router();

//============ GET ===============

router.get("/leer",getSocioadmi)

//======== POST ==============

router.post("/iniciarsesion", getLogin);

router.post("/registrar", postSocios);

//======== PUT ==============

router.put('/usuario',putSocio);

//=========ADMIN===============

router.post('/inciarAdmin',getadmin)

router.get('/logout',logout)

router.put('/editarAdmin',putAdmin)

router.delete('/eliminar',deleteSocio)

module.exports = router;