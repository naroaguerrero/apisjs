function search() {
  let dia = document.getElementById("dia").value;
  let mes = document.getElementById("mes").value;
  let anyo = document.getElementById("anno").value;

  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=I95RTKFpLs04xZEkXqMZx8kJF3rbChGPab3AFl9Q&date=${dia}-${mes}-${anyo}`
  )
    .then(function respuesta(respuesta) {
      return respuesta.json();
    })
    .then(function datos(datos) {
      document.getElementById("div").innerHTML = `
        <img src="${datos.url}" alt="${datos.title}"/>
        <p>Fecha: ${datos.date}</p>
        <p>Título: ${datos.title}</p>
        <p>Descripción: ${datos.explanation}</p>
        `;
    });
}
