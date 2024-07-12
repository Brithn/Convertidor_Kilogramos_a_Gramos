
var modelo = null;

//Cargar modelo
(async () => {
    console.log("Cargando modelo...");
    modelo = await tf.loadLayersModel("model.json");
    console.log("Modelo cargado...");
})();

function cambiarKilogramos() {
  var Kilogramos = document.getElementById("Kilogramos").value;
  document.getElementById("lbl-Kilogramos").innerHTML=Kilogramos;
  if (modelo != null) {
    var tensor = tf.tensor1d([parseInt(Kilogramos)]);
    var prediccion = modelo.predict(tensor).dataSync();
    prediccion = Math.round(prediccion, 1);
    document.getElementById("resultado").innerHTML = Kilogramos + " Kilogramos son " + prediccion + " Gramos!";
  } else {
    document.getElementById("resultado").innerHTML = "Intenta de nuevo en un momento...";
  }
}