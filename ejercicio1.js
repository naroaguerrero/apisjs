let parrafo = "";

fetch("https://rickandmortyapi.com/api/character/")
  .then(function respuesta(respuesta) {
    return respuesta.json();
  })
  .then(function datos(datos) {
    for (let i = 0; i < datos.results.length; i++) {
      parrafo += `
        <div class="card" id="personajes${i}">
          <img src="${datos.results[i].image}" alt="imagen de ${datos.results[i].name}" />
            <div class="container">
              <h1>${datos.results[i].name}</h1>
            </div>
        </div>
        `;
    }
    document.getElementById("catalogo").innerHTML = parrafo;
  });

  
