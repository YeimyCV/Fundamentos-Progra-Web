let seleccionar = document.querySelector('select');
seleccionar.addEventListener('change', redireccionar);

function redireccionar () {
    let eleccion = seleccionar.value;
    if (eleccion == 1) {
        window.location.href = "https://gnc.cr/";
    
    }else if (eleccion == 2) {
        window.location.href = "https://www.sportline.cr/";
    
    }else if (eleccion == 3) {
        window.location.href = "https://www.elisamoreno.com/terapeuta/elisa-moreno/";
    }
}