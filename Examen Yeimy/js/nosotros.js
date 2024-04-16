function opciones(evt, info) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for ( i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active","");
    }

    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active";
}

/*lightbox foto*/

var modal = document.getElementById("modal1");

var img = document.getElementById("foto");

var modalImg = document.getElementById("img01");

var captionText = document.getElementById("caption");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt; 
}

var cerrar = document.getElementsByClassName("close")[0];

cerrar.onclick = function() {
    modal.style.display = "none";
}

/*lightbox video*/

function ejecutar(div, video_id) {
    var video = document.getElementById(video_id).src;
    document.getElementById(video_id).src = video + '?&autoplay=1';
    document.getElementById(div).style.display = 'block';
}


function ocultar(div,video_id) {
    var video = document.getElementById(video_id).src;
    var cleaned = video.replace('?&autoplay=1', '');
    document.getElementById(video_id).src = cleaned;
    document.getElementById(div).style.display = 'none';
}

/*carousel pequeño de fotos*/

let carrusel = {};
let foto = 0;
let total = 0;

carrusel = [{imageurl: "images/gnc.png", titulo: "GNC"},
    { imageurl: "images/nutri.jpg", titulo: "EntreComidillas" },
    { imageurl: "images/nike.png", titulo: "Nike" },
    { imageurl: "images/unimart.png", titulo: "Unimart" },
    { imageurl: "images/simetry.jpg", titulo: "Simetry" }
];

let cambiar = function(mas) {
    total = carrusel.length;
    foto = foto + mas;
    if (foto > total) {
        foto=  foto - 1 ;
    }
    if (foto < 1) {
        foto= foto - total;
    }
    if(foto>=0){
        document.thumb.src = carrusel[foto - 1].imageurl;
        titulo - document.getElementById('titulo');
        titulo.innerText = carrusel[foto-1 ].titulo;
    }
    else{
        foto= 0 ;
        foto = foto + 1
    }

   
}

