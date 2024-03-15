window.onload = function() {
    document.getElementById('foto').onchange = function(e) {
    n = e.target.value;
    var archivo = "url('images/" + n + ".jpg')";
    document.getElementById("resultado").style.backgroundImage = archivo;
}
}

let seleccionar = document.querySelector('select');
seleccionar.addEventListener('change', elegir);

function elegir () {
    let eleccion = seleccionar.value;
    if (eleccion == 0) {
        descripcion.innerHTML = '';
    }
    if (eleccion == 1) {
        descripcion.innerHTML = 'Es una disciplina dos por uno que consigue renovarnos por fuera y resetearnos por dentro sin que apenas nos cueste. <br> Porque el yoga es ese deporte tranquilo y sosegado donde los músculos trabajan y se tonifican -y mucho- casi sin que te cueste';
    
    }else if (eleccion == 2) {
        descripcion.innerHTML = 'La práctica de boxeo involucra una gran cantidad de grupos musculares en todo el cuerpo, razón por la cual ayuda a estimular el metabolismo y quemar calorías. <br> El boxeo es un deporte que te ayuda a quemar calorías y reducir el peso porque los entrenamientos son ejercicios de alta intensidad.';
    
    }else if (eleccion == 3) {
        descripcion.innerHTML = 'El spinning mejora la salud cardiovascular al ser un ejercicio de alta intensidad que provoca una mayor oxigenación muscular. <br> Si empezamos a incluir una bicicleta spinning en nuestra rutina, a largo plazo, aumentará la salud del corazón, conseguiremos una reducción de la presión arterial y se disminuye el riesgo de enfermedades cardíacas.';
    
    }else if (eleccion == 4) {
        descripcion.innerHTML = 'Se trata de una actividad de alta intensidad que aúna ejercicios de fuerza y cardio. <br> Todo ello trabajando tanto con el peso del propio cuerpo como con pesas.';
    }
}