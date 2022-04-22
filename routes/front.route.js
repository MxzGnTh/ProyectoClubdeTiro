const express = require('express');
const router = express.Router();
router.get('/', (req, res)=>{
res.render('inicio.hbs')
})

router.get('/registrar',(req, res)=>{
    res.render('registrar.hbs')
})

router.get('/iniciarsesion', (req, res)=>{
    res.render('iniciarsesion.hbs')
})

router.get('/Admin', (req, res)=>{
    res.render('Admin.hbs')
})
module.exports = router
