let list = "";
let parrafo = "";

fetch("https://pokeapi.co/api/v2/type/")
  .then(function respuesta(respuesta) {
    return respuesta.json();
  })
  .then(function datos(data) {
    for (let i = 0; i < data.results.length; i++) {
      list += `<option value="${data.results[i].url}">${data.results[i].name}</option>`;
    }
    document.getElementById("div").innerHTML = `
    <select onchange="nombres()" id="lista">${list}</select>
    `;
  });

function nombres() {
  parrafo = "";
  fetch(document.getElementById("lista").value)
    .then(function respuesta(respuesta) {
      return respuesta.json();
    })
    .then(function datos(data) {
      for (let i = 0; i < 3; i++) {
        parrafo += `
      <p>${
        datos.pokemon[Math.floor(Math.random() * data.pokemon.length) + 0]
          .pokemon.name
      }</p>
      `;
      }
      document.getElementById("div2").innerHTML = parrafo;
    });
}
