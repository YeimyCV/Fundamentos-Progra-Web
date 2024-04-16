document.getElementById('disciplinaOpciones').addEventListener('change', galeria);


function galeria () {
    var opciones = document.getElementById('disciplinaOpciones').value;
    switch (opciones) {
        case "yoga":
            document.querySelector('.galeriaYoga').style.display = "block"
            document.querySelector('.galeriaBoxeo').style.display = "none"
            document.querySelector('.galeriaCrossFit').style.display = "none"
            document.querySelector('.galeriaZumba').style.display = "none"
            break;
        case "boxeo":
            document.querySelector('.galeriaYoga').style.display = "none"
            document.querySelector('.galeriaBoxeo').style.display = "block"
            document.querySelector('.galeriaCrossFit').style.display = "none"
            document.querySelector('.galeriaZumba').style.display = "none"
            break;
        case "crossfit":
            document.querySelector('.galeriaYoga').style.display = "none"
            document.querySelector('.galeriaBoxeo').style.display = "none"
            document.querySelector('.galeriaCrossFit').style.display = "block"
            document.querySelector('.galeriaZumba').style.display = "none"
            break;
        case "zumba":
            document.querySelector('.galeriaYoga').style.display = "none"
            document.querySelector('.galeriaBoxeo').style.display = "none"
            document.querySelector('.galeriaCrossFit').style.display = "none"
            document.querySelector('.galeriaZumba').style.display = "block"
            break;
        default:
            document.querySelector('.galeriaYoga').style.display = "none"
            document.querySelector('.galeriaBoxeo').style.display = "none"
            document.querySelector('.galeriaCrossFit').style.display = "none"
            document.querySelector('.galeriaZumba').style.display = "none"
    } 
}