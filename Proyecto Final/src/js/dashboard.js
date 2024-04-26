const baseUrl = "http://localhost:4001/api/reservas/";
var reservasUsuario =[];
var clasesData = []
var instalacionesData = []


async function getReservasUsuario() {
    dataUsuario=JSON.parse(localStorage.getItem("DataUsuario"));
    console.log(dataUsuario[0].id_usuario);
    // Default options are marked with *
    const response = await fetch(`${baseUrl}reservas/${dataUsuario[0].id_usuario}`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    if(response.ok){
        return response.json(); // parses JSON response into native JavaScript objects
    }
    else{
        return response.status
    }
    
  }

function userData(){
    userInfo = JSON.parse(localStorage.getItem("DataUsuario"));
    getReservasUsuario().then((data) => {

       
        console.log(data);
        if(data === 404){
            document.getElementById("reservaciones").innerHTML = 0
            document.getElementById('clases').innerHTML = 0
        }
        else{
             reservasUsuario = [...data];
             console.log(reservasUsuario)
             document.getElementById("reservaciones").innerHTML = reservasUsuario.length
            const clasesCant = reservasUsuario.filter(({ categoria_reserva }) => categoria_reserva === "Clases");
            document.getElementById('clases').innerHTML = clasesCant.length
            getClases().then((data) => {
                clasesData = [...data]
                new DataTable('#example', {
                    data: data,
                    columns: [
                        { data: 'id_clase' },
                        { data: 'nombre_clase' },
                        { data: 'cupos_clase' }
                    ],
                    
    
                    lengthMenu: [
                        [10, 20, 50, -1],
                        [10, 20, 50, 'All'],
                    ],
                    layout: {
                        bottomEnd: {
                            paging: {
                                boundaryNumbers: false
                            }
                        }
                    },
                    language:{
                        "decimal":        "",
                        "emptyTable":     "No existen datos en la tabla",
                        "info":           "Mostrando _START_ de _END_ de un total de  _TOTAL_ registros",
                        "infoEmpty":      "Mostrando 0 de 0 de 0 registros",
                        "infoFiltered":   "(filtrado de _MAX_ total de registros)",
                        "infoPostFix":    "",
                        "thousands":      ",",
                        "lengthMenu":     "Mostrar _MENU_ registros",
                        "loadingRecords": "Cargando...",
                        "processing":     "",
                        "search":         "Buscar:",
                        "zeroRecords":    "No Se encontró ningun registro",
                        "paginate": {
                            "first":      "Primero",
                            "last":       "Último",
                            "next":       "Siguiente",
                            "previous":   "Anterior"
                        },
                        "aria": {
                            "orderable":  "Ordenar por esta columna",
                            "orderableReverse": "Orden inverso de columna"
                        }
                    }
                });
              });
              getInstalaciones().then((data) => {
                instalacionesData = [...data];
              });

             
            
        }
      
          });
    usr = document.getElementById("nombreUsuario").innerHTML = userInfo[0].usuario
    memb = document.getElementById("membrecia").innerHTML = userInfo[0].membrecia
   
}
async function getClases() {
    // Default options are marked with *
    const response = await fetch(`${baseUrl}clases`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  async function getInstalaciones() {
    // Default options are marked with *
    const response = await fetch(`${baseUrl}instalaciones`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
window.onload = (event) => {
    userData();
   
}