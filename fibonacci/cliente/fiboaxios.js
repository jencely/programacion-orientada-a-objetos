var primerElemento = document.getElementById("fibo1");
var segundoElemento = document.getElementById("fibo2")
var maximoValorSerie = document.getElementById("maximo")
var respuesta;

document.getElementById("botonSolver").addEventListener(
    "click", () => {
    
        axios.post('http://localhost:8081/fibonacci', {
            valor1: primerElemento.value,
            valor2: segundoElemento.value,
            valormax: maximoValorSerie.value

          })
          .then(function (response) {
            console.log (response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
);
