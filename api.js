document.addEventListener("DOMContentLoaded", function () {
    const fetchDataButton = document.getElementById("fetchData");
    const resultDiv = document.getElementById("result");

    fetchDataButton.addEventListener("click", function () {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                resultDiv.innerHTML = `
                    <h2>Título: ${data.title}</h2>
                    <p>Cuerpo: ${data.body}</p>
                `;
            })
            .catch(error => {
                resultDiv.innerHTML = "Error al obtener datos de la API.";
                console.error(error);
            });
    });
});
