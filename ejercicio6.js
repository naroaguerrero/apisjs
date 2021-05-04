let url = "https://api.magicthegathering.io/v1/";
let opciones = "";
let parrafo = "";

fetch(url + "sets")
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (datos) {
    for (let i = 0; i < datos.sets.length; i++) {
      opciones += `<option value="${datos.sets[i].code}">${datos.sets[i].name}</option>`;
    }
    document.getElementById("div").innerHTML = `
    <select onchange="seleccion()" name="sets" id="sets">
    ${opciones}
    </select>`;
  });

function seleccion() {
  fetch(url + "cards?set=" + document.getElementById("sets").value)
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (datos) {
      for (let i = 0; i < datos.cards.length; i++) {
        parrafo += `
      <div id="carta${i}" class="carta">
      <img src="${datos.cards[i].imageUrl}" alt="${datos.cards[i].name}" />
      <h3>${datos.cards[i].name}</h3>
      <h5>Tipo: ${datos.cards[i].type} | Coste : ${datos.cards[i].manaCost}</h5>
      <p>${datos.cards[i].text}</p>
      </div>`;
      }
      document.getElementById("div2").innerHTML = parrafo;
    });
}