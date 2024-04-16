let seleccionar = document.querySelector('select');
seleccionar.addEventListener('change', redireccionar);

function redireccionar () {
    let eleccion = seleccionar.value;
    if (eleccion == 1) {
        window.location.href = "clases.html";
    
    }else if (eleccion == 2) {
        window.location.href = "membrecias.html";
    
    }else if (eleccion == 3) {
        window.location.href = "sucursales.html";
    }
}