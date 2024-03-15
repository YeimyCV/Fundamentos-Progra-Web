var inputPrecio = document.getElementById("input_precio");
var detalleCliente = document.getElementById("detalle_cliente")
var detalleFecha = document.getElementById("detalle_fecha")
var detalleTabla = document.getElementById("detalle_tabla");
var detalleSubtotal = document.getElementById("detalle_subtotal");
var detalleIva = document.getElementById("detalle_iva");
var detalleServicios = document.getElementById("detalle_servicios");
var detalleTotal = document.getElementById("detalle_total");
var precioMembresia = 0;
var subtotal = 0;

function precio() {
    var inputMembresia = document.getElementById("input_membresia").value;
    if (inputMembresia == "basica") {
        precioMembresia = 25000;
        inputPrecio.value = "₡" + precioMembresia;
    } else if (inputMembresia == "premium") {
        precioMembresia = 30000;
        inputPrecio.value = "₡" + precioMembresia;
    }
}

function fsubtotal() {
    var inputCantidad = document.getElementById("input_cantidad").value;
    subtotal = precioMembresia * inputCantidad;
    detalleSubtotal.innerHTML = "₡" + subtotal;
    return subtotal;
}

function iva () {
    var calculoIva = fsubtotal() * 0.13;
    detalleIva.innerHTML = "₡" + calculoIva;
    return calculoIva;
}
function servicios () {
    var calculoServicios = fsubtotal() * 0.05;
    detalleServicios.innerHTML = "₡" + calculoServicios;
    return calculoServicios;
}
function total() {
 var calculoTotal = fsubtotal() + servicios() + iva()
 detalleTotal.innerHTML="₡" + calculoTotal
}

function facturar(){
    var inputCliente = document.getElementById("input_cliente").value;
    var inputMembresia = document.getElementById("input_membresia").value;
    var inputCantidad = document.getElementById("input_cantidad").value;
    detalleTabla.innerHTML = 
    `<tr>
    <td>${inputMembresia == "basica" ? "Básica" : "Premium"}</td>
    <td>${inputCantidad}</td>
    <td>${inputPrecio.value}</td>
    </tr>
    `
    detalleCliente.innerHTML =  `<strong>Cliente:</strong> ${inputCliente}`
    detalleFecha.innerHTML =  `<strong>Fecha:</strong> ${currentDate}`
    total()
}




const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;


function btnBorrar() {
     document.getElementById("input_cliente").value = "";
     document.getElementById("input_membresia").value = "Tipo de membresía";
     document.getElementById("input_cantidad").value = "1";
     document.getElementById("input_precio").value = "0";   
 }