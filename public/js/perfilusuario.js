/*const formulario = document.getElementById('formularioPerfilUsuario')

formulario.addEventListener('submit', async(e) => {
    e.preventDefault()

    const formData = new FormData(formulario)

    try {

        const res = await fetch('/api/v1/perfilusuario', {
            method: 'post',
            body: formData
        })

        const data = await res.json()
        console.log('data',data);

        window.location.href = "/perfilusuario"

    }catch(error){
        console.log(error)
    }

})*/

const formulario = document.getElementById("logout");

formulario.addEventListener("click", async (e) => {
	
	e.preventDefault();
	console.log("click");
	window.localStorage.removeItem("token");

    window.location.href =`/api/v1/logout`


});
