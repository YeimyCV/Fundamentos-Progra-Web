

function searchStores() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();

    let sanJoseStores = ["Guayabos", "Tibas", "Escazu"];

    let alajuelaStores = ["San Ramon", "Alajuela"];

    let cartagoStores = ["Tres Rios"];

    let herediaStores = ["Belen", "Santo Domingo", "Heredia"];

    let storeImages = {
        "guayabos": "images/gymGuayabos.jpg",
        "tibas": "images/gymTibas.jpg",
        "escazu": "images/gymEscazu.jpg",
        "san ramon": "images/gymSanramon.jpg",
        "alajuela": "images/gymAlajuela.jpg",
        "tres rios": "images/gymTresrios.jpg",
        "belen": "images/gymBelen.jpg",
        "santo domingo": "images/gymSantodomingo.jpeg",
        "heredia": "images/gymHeredia.jpg",
    };

    let filteredStores = [];

    let allStores = [...sanJoseStores, ...cartagoStores, ...herediaStores, ...alajuelaStores];

    if (searchInput === "") {
        swal.fire({
            icon: "error",
            title: "Revisa los datos ingresados",
            confirmButtonText: "Intentar de nuevo",
            confirmButtonColor: "#0063be",
        });
        return;
    }


    if (filteredStores.length === 0) {
        if (searchInput === "san jose") {
            filteredStores = sanJoseStores;
        } else if (searchInput === "cartago") {
            filteredStores = cartagoStores;
        } else if (searchInput === "heredia") {
            filteredStores = herediaStores;
        } else if (searchInput === "alajuela") {
            filteredStores = alajuelaStores;
        }

    displayResults(filteredStores, storeImages);
}

function displayResults(stores, storeImages) {
    let resultsContainer = document.getElementById("pResult");
    resultsContainer.innerHTML = "";
    if (stores.length === 0) {
        resultsContainer.innerHTML = "<p>No se encontraron sucursales para la ubicación escrita.</p>";
    } else {
        for (let i = 0; i < stores.length; i++) {
            let imageSrc = storeImages[stores[i].toLowerCase()] || "mujercrossfit2.jpg";
            let card = document.createElement("div");
            card.style.maxWidth = "100%";
            card.className = "mt-5 mb-5 ms-5"
            card.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${imageSrc}" class="img-fluid rounded-start" alt="Sucursal ${stores[i]}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body ms-5 mt-1">
                            <h5 class="card-title text-success">Sucursal ${stores[i]}</h5>
                            <p class="card-text">Todas nuestras sucursales están equipadas con los mejores implementos y el personal más preparado para guiarte y acompañarte en tu experiencia de mejorar tu estado físico.
                            Trabajamos para ofrecerte el mejor servicio cada vez más cerca de ti, nuestra experiencia y calidad nos respalda.
                            </p>
                        </div>
                    </div>
                </div>
            `;
            resultsContainer.appendChild(card);
        }
    }
}
}