window.onload = function () {
    document.getElementById("frecuencia").onchange = function(e) {
        a = e.target.value;
        if (a == "1 a 2 veces por semana") {
            var imagen = "images/workout.jpg";
        } else if (a == "3 a 5 veces por semana") {
            var imagen = "images/workout2.jpg";
        } else if (a == "Más de 5 veces por semana") {
            var imagen = "images/workout3.jpg";
        } 
        document.getElementById("imagen").src = imagen;
    } 
    document.getElementById("clases").onchange = function(es) {
        n= es.target.value;
    }
}

function calcular() {
    var montoMembresia = 0;
    switch (a) {
        case "1 a 2 veces por semana":
            if (n == "1 clase semanal") montoMembresia = 17000;
            else montoMembresia = 18000;
            break;
        case "3 a 5 veces por semana":
            if (n == "1 clase semanal") montoMembresia = 22000;
            else montoMembresia = 23000;
            break;
        case "Más de 5 veces por semana":
            if (n == "1 clase semanal") montoMembresia = 27000;
            else montoMembresia = 28000;
            break;
        default:
            break;
    }

    swal.fire ({
        html: "<p> Tu membresía con una frecuencia de " +
            a +
            " y " +
            n + 
            "<br><br><strong>Cuota mensual:</strong></p>" +
            "₡" +
            montoMembresia,
    }) 
}