let parrafo = "";

fetch("https://randomuser.me/api/")
  .then(function respuesta(respuesta) {
    return respuesta.json();
  })
  .then(function buscarDatos(datos) {
    document.getElementById("div").innerHTML = `
    <img src="${datos.results[0].picture.large}"/>
    <p>${datos.results[0].name.first}</p>
    <p>${datos.results[0].email}</p>
    <p>${datos.results[0].location.street.name}</p>,${datos.results[0].location.street.number}
    <p>${datos.results[0].location.city}</p>,${datos.results[0].location.state}
    <p>${datos.results[0].location.country}</p>
    <p>${datos.results[0].location.postcode}</p>
  `;
  });
