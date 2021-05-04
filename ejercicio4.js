let parrafo = "";
let print = "";

fetch("http://swapi.dev/api/planets/")
  .then(function respuesta(respuesta) {
    return respuesta.json();
  })
  .then(function datos(datos) {
    for (let i = 0; i < datos.results.length; i++) {
      parrafo += `
      <option value="${datos.results[i].name}">${datos.results[i].name}</option>
      `;
    }
    document.getElementById("listaPlanetas").innerHTML = parrafo;
  });

function search() {
  imprimir = "";

  let seleccion = document.getElementById("listaPlanetas").value;
  let arrayPersonajes = [];
  fetch("http://swapi.dev/api/planets/")
    .then(function respuesta(result) {
      return result.json();
    })
    .then(function datos(datoSSS) {
      for (let i = 0; i < datoSSS.results.length; i++) {
        if (datoSSS.results[i].name === seleccion) {
          arrayPersonajes = datoSSS.results[i].residents;
          console.log(arrayPersonajes);
        }
      }
    })
    .then(function imprimir(print) {
      for (let i = 0; i < arrayPersonajes.length; i++) {
        fetch(arrayPersonajes[i])
          .then(function resp(resp) {
            return resp.json();
          })
          .then(function datitos(data) {
            console.log(data);
            print += `
            <p>${data.name}</p>
            `;
            document.getElementById("div").innerHTML = print;
          });
      }
    });
}