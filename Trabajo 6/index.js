//Un alumno desea saber cual será su calificación final en la materia de Laboratorio 1.
// Dicha calificación se compone de los siguientes porcentajes:
//55% del promedio de sus tres calificaciones parciales.
//30% de la calificación del examen final.
//15% de la calificación de un trabajo final.

function Promedio(){

var primerParcial = Number(document.getElementById("calificacion1").value);
var segundoParcial= Number(document.getElementById("calificacion2").value);
var terceroParcial= Number(document.getElementById("calificacion3").value);

var promedioParciales = ((primerParcial+segundoParcial+terceroParcial)/3)*0.55
var promedioExamenFinal= (Number(document.getElementById("calificacion4").value))*0.30
var promedioTrabajoFinal= (Number(document.getElementById("calificacion5").value))*0.15
console.log(promedioParciales,promedioExamenFinal,promedioTrabajoFinal)
var calificacionFinal= promedioParciales+promedioTrabajoFinal+promedioExamenFinal

document.getElementById("Calificacion-Final").innerHTML = calificacionFinal.toFixed(2)
}













