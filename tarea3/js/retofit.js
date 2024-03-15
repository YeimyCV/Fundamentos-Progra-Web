const participantes = [];

function agregarParticipante() {
    const nombre = document.getElementById('nombre').value,
        ronda1 = parseFloat(document.getElementById('ronda1').value),
        ronda2 = parseFloat(document.getElementById('ronda2').value),
        ronda3 = parseFloat(document.getElementById('ronda3').value);

   if (nombre === '' || isNaN(ronda1) || isNaN(ronda2) || isNaN(ronda3)) {

        Swal.fire({
            icon: "error",
            title: "Debe completar todos los espacios",
            showClass: {
                popup: `
                animate__animated
                animate__fadeIn
                `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOut
                `
            }
        });
    } else {
        const promedio = (ronda1 + ronda2 + ronda3) / 3;

        participantes.push({nombre, promedio})

        const selectParticipante = document.getElementById('seleccionarParticipante');

        const option = document.createElement('option');

        option.value = nombre + ' ';

        option.text = nombre + ' ';

        selectParticipante .appendChild(option);

    
        limpiarDatos();

        Swal.fire({
            icon: "success",
            title: "Participante agregado",
            showClass: {
                popup: `
                animate__animated
                animate__fadeIn
                `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOut
                `
            }
        });
    }
}

function calcularPromedioPuntaje() {
   
    const nombreSeleccionado = document.getElementById('seleccionarParticipante').value;

    const resultado = document.getElementById('resultado');

    let participanteSeleccionado = null;

    
    for (let i = 0; i < participantes.length; i++) {
        
        const participante = participantes[i];

        const nombreCompleto = participante.nombre + ' ';

        if (nombreCompleto === nombreSeleccionado) {
            participanteSeleccionado = participante;
            break;
        }
    }

    if (participanteSeleccionado) {
        const promedioParticipante = participanteSeleccionado.promedio;
        resultado.textContent = 'El promedio de ' + nombreSeleccionado + ' es de: ' + promedioParticipante;
    } else {
        resultado.textContent = '';
    }
}

function limpiarDatos() {
    document.getElementById('nombre').value = '';
    document.getElementById('ronda1').value = '';
    document.getElementById('ronda2').value = '';
    document.getElementById('ronda3').value = '';
}