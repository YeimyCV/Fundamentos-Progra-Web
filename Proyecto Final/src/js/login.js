  // Quemado de datos
const baseUrl = "http://localhost:4001/api/reservas/";

function login() {
  let usuario = document.getElementById("in-txt-user").value;
  let contrasena = document.getElementById("in-txt-pass").value;
  const data = {
    "usuario": usuario,
    "contrasena": contrasena,
  };
  // Default options are marked with *
  fetch(`${baseUrl}login`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  }).then(response =>{
    if(response.ok){
        return response.json();
    }
  else{
    throw new Error(response.status);
  }
  })
  .then(data =>{
    if(usuario === data[0].usuario && contrasena === data[0].contrasena){
        localStorage.setItem("DataUsuario",JSON.stringify(data))
        Swal.fire ({
                      title: "Tus credenciales son correctas",
                      showConfirmButton: false,
                      timer: 5000,
                      html: '<iframe width="420" height="340" src="https://lottie.host/embed/cf2d7c0b-1809-424d-8421-fd1d0b74159b/Ed9jRpjvF6.json"></iframe><br><br><p>Espera un momento por favor</p>',
      
                  }).then(() => {
                      window.location.href="dashboard.html";
                  }); 
    }
    else{
        Swal.fire({
            title: "Verificar la entrada de datos",
            text: "Usuario o contraseña incorrectos",
            confirmButtonText: "Intentar de nuevo",
            confirmButtonColor: "#0063be",
            html: '<iframe src="https://lottie.host/embed/62430c76-a7f2-433d-899a-5afef91b0ba1/IVTY7W30Ve.json"></iframe><br><p>' + "Usuario o contraseña incorrectos" + "</p>",
        });
    }
  }) 
  .catch(err => console.log(err))
 
}
