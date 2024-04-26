const baseUrl = "http://localhost:4001/api/reservas/";
var clasesData = [];
var instalacionesData = [];
var usuarioData = [];

function validarReserva() {
  let btnReservar = document.getElementById("reservar");
  let insInput = document.getElementById("instalacion").value;
  let claInput = document.getElementById("clase").value;
  if (claInput != 0 || (insInput != 0 && ValidarFechas())) {
    btnReservar.disabled = false;
  } else {
    btnReservar.disabled = true;
  }
}

function validarTipo() {
  let instalaciones = document.getElementById("insCont");
  let clases = document.getElementById("claCont");

  let tipoReserva = document.getElementById("tipoReserva").value;
  if (tipoReserva === "1") {
    instalaciones.classList.remove("hiddenElm");
    clases.classList.add("hiddenElm");
    let instalacionesSelect = document.getElementById("instalacion");
    console.log(instalacionesSelect);
    for (x of instalacionesData) {
      let html = "";
      html += `
          <option value="${x.id_instalacion}">${x.nombre_instalacion}</option>
      `;
      instalacionesSelect.innerHTML += html;
    }
  } else if (tipoReserva === "2") {
    instalaciones.classList.add("hiddenElm");
    clases.classList.remove("hiddenElm");
    let clasesSelect = document.getElementById("clase");
    console.log(clasesSelect);
    for (x of clasesData) {
      let html = "";
      html += `
        <option value="${x.id_clase}">${x.nombre_clase}</option>
    `;
      clasesSelect.innerHTML += html;
    }
  } else {
    instalaciones.classList.add("hiddenElm");
    clases.classList.add("hiddenElm");
  }
}

function ValidarFechas() {
  let fechainicial = document.getElementById("fechaInicio").value;
  let fechafinal = document.getElementById("fechaSalida").value;
  console.log(fechafinal);
  if (fechainicial != "" && fechafinal != "") {
    if (Date.parse(fechafinal) < Date.parse(fechainicial)) {
      Swal.fire({
        title: "Erro de fecha",
        text: "La fecha de inicio no puede ser mayor a la fecha de salida",
        icon: "error",
      });
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
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
async function getDatosUsuario() {
  dataUsuario = JSON.parse(localStorage.getItem("DataUsuario"));
  console.log(dataUsuario[0].id_usuario);
  // Default options are marked with *
  const response = await fetch(
    `${baseUrl}usuario/${dataUsuario[0].id_usuario}`,
    {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  return response.json(); // parses JSON response into native JavaScript objects
}
async function crearReserva() {
  let tipoReserva =
    document.getElementById("tipoReserva").value === "1"
      ? "Instalacion"
      : "Clases";
  let fechaInicio = document.getElementById("fechaInicio").value;
  let fechaSalida = document.getElementById("fechaSalida").value;
  let instalacion = document.getElementById("instalacion").value;
  let clase = document.getElementById("clase").value;
  let userInfo = JSON.parse(localStorage.getItem("DataUsuario"));
  let id_usuario = userInfo[0].id_usuario;
  let Nombreusuario = userInfo[0].usuario;

  let id_tipoReser = instalacion != 0 ? "id_instalacion" : "id_clase";
  let valor_id_tipoReser = instalacion != 0 ? instalacion : clase;
  console.log(id_usuario);

  data = {
    inicio_reserva: fechaInicio,
    final_reserva: fechaSalida,
    categoria_reserva: tipoReserva,
    [id_tipoReser]: valor_id_tipoReser,
    id_usuario: id_usuario,
  };
  try {
    // Default options are marked with *
    const response = await fetch(`${baseUrl}reservas`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const result = await response.json();
    Swal.fire({
      title: result.title,
      text: result.desc,
      icon: "success",
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("entra")
        enviar(tipoReserva,fechaInicio,fechaSalida,valor_id_tipoReser,id_usuario,Nombreusuario)
      document.getElementById("tipoReserva").value = 0;
      document.getElementById("fechaInicio").value = "";
      document.getElementById("fechaSalida").value = "";
      document.getElementById("instalacion").value = "0";
      document.getElementById("clase").value = "0";
      document.getElementById("insCont").classList.add("hiddenElm")
      document.getElementById("claCont").classList.add("hiddenElm")
      }
    });
    console.log("Success:", result); // parses JSON response into native JavaScript objects
  } catch (error) {
    console.error("Error:", error);
    Swal.fire({
      title: "Algo salió mal",
      text: error,
      icon: "error",
      confirmButtonText: "Aceptar",
    })
  }
}

function userData() {
  userInfo = JSON.parse(localStorage.getItem("DataUsuario"));
  usr = document.getElementById("nombreUsuario").innerHTML =
    userInfo[0].usuario;
}

window.onload = (event) => {
  emailjs.init({
    publicKey: "BG61bsDP-zvTVS6jL",
  });
  getClases().then((data) => {
    clasesData = [...data];
  });
  getInstalaciones().then((data) => {
    instalacionesData = [...data];
  });
  getDatosUsuario().then((data) => {
    usuarioData = [...data];
  });

  userData();
};

function enviar(valor_id_tipoReser,fecha_inicio,fecha_final,id_reserva,id_usuario,usuario) {
  const params = {
    valor_id_tipoReser: valor_id_tipoReser,
    fecha_inicio: fecha_inicio,
    fecha_final:  fecha_final,
    id_reserva: id_reserva,
    id_usuario: id_usuario,
    usuario: usuario,
    }
  emailjs.send('service_vizpz3l', 'template_dh25oyo', params)
    .then(() => {
      console.log("Success");
    }, (error) => {
      console.log('FAILED...', error);
    });
}
