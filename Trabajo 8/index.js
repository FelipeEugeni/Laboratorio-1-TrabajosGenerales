//Diseñar un algoritmo que nos diga el dinero que tenemos
// (en dolares y céntimos) después de pedirnos cuantas monedas tenemos
// (de 2€, 1€, 50 céntimos, 20 céntimos o 10 céntimos).
function Calcular(){
var dos= Number(document.getElementById("dosdolares").value)*2
var uno= Number(document.getElementById("undolar").value)*1
var cerocincuenta= Number(document.getElementById("cincuentacentimos").value)*0.5
var ceroveinte= Number(document.getElementById("veintecentimos").value)*0.2
var cerodiez= Number(document.getElementById("diezcentimos").value)*0.1
var resultadoSuma= dos+uno+cerocincuenta+ceroveinte+cerodiez
document.getElementById("totaldolares").innerHTML = "Posees "+resultadoSuma.toFixed(2)+" U$D"
}