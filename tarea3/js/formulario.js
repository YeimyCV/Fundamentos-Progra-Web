function contenidoclases () {
    let option1 = document.querySelector('input[name="r"][value="option1"]');
    let option2 = document.querySelector('input[name="r"][value="option2"]');
    let option3 = document.querySelector('input[name="r"][value="option3"]');
    let clases = document.getElementById("clases");

    if (option1.checked) {
        clases.style.display = "block";
        instalaciones.style.display = "none";
        horario.style.display = "none";
    }
}

function contenidoinstalaciones () {
    let option1 = document.querySelector('input[name="r"][value="option1"]');
    let option2 = document.querySelector('input[name="r"][value="option2"]');
    let option3 = document.querySelector('input[name="r"][value="option3"]');
    let instalaciones = document.getElementById("instalaciones");

    if (option2.checked) {
        clases.style.display = "none";
        instalaciones.style.display = "block";
        horario.style.display = "none";
    }
}

function contenidohorario () {
    let option1 = document.querySelector('input[name="r"][value="option1"]');
    let option2 = document.querySelector('input[name="r"][value="option2"]');
    let option3 = document.querySelector('input[name="r"][value="option3"]');
    let horario = document.getElementById("horario");

    if (option3.checked) {
        clases.style.display = "none";
        instalaciones.style.display = "none";
        horario.style.display = "block";
    }
}