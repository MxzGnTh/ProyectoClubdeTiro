const {Router} = require('express');
const router = Router();
//=====================================================//

//Inicio
router.get('/', (req, res)=>{
res.render('inicio.hbs')
})

//REGISTRAR
router.get('/registrar',(req, res)=>{
    res.render('registrar.hbs')
})

//INICIAR SESIÓN
router.get('/iniciarsesion', (req, res)=>{
    res.render('iniciarsesion.hbs')
})

// ADMIN
router.get('/Admin', (req, res)=>{
    res.render('Admin.hbs')
})

//USUARIO
router.get('/usuario',(req, res)=>{
    res.render('usuario.hbs')
})

// INICIAR ADMIN
router.get('/iniciarAdmin', (req, res)=>{
    res.render('iniciarAdmin.hbs')
})


// PERFIL USUARIO
router.get('/perfilusuario', (req, res)=>{
    const user = {rut:"12.123.123-4",nombre:"mixzio", email:"m@gonzalez.cl",curso:"aprendiz",}
    res.render('perfilusuario.hbs', {...user})
})


module.exports = router
