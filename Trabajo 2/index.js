
var alturaHombre=[]
var alturaMujeres=[]
var edadesParticipantes=[]


function Senso(){
 
if (edadesParticipantes.length<10) {
     
    
var genero = document.getElementById("genero").value;

var edad = document.getElementById("edad").value;

var altura = document.getElementById("altura").value;


    if (genero=="hombre"){
        edadesParticipantes.push(Number(edad));
        alturaHombre.push(Number(altura));
    }else{
        edadesParticipantes.push(Number(edad));
        alturaMujeres.push(Number(altura));
    }
}else{
    alert("Ver Promedios")
}
}
// Number(Variable a convertir)
// (convertir objetos a texto, a probar).toString
//String(Variable a converti, a probar)
function Promedios(){
    var sumaAlturaH=0
    var sumaAlturaM=0
    var sumaEdades=0
for (let i = 0; i < alturaHombre.length; i++) {
    sumaAlturaH = alturaHombre[i]+sumaAlturaH;    
}
var promedioAlturaH = sumaAlturaH / alturaHombre.length;

for (let i = 0; i < alturaMujeres.length; i++) {
    sumaAlturaM = alturaMujeres[i]+sumaAlturaM;    
}
var promedioAlturaM = sumaAlturaM / alturaMujeres.length;

for (let i = 0; i < edadesParticipantes.length; i++) {
    sumaEdades =  edadesParticipantes[i] + sumaEdades;
}
var promedioEdad = sumaEdades / edadesParticipantes.length;

alert("La cantidad de Mujeres son: "+alturaMujeres.length+" Y su altura promedio es: "+promedioAlturaM+"    "+
      "La cantidad de Hombres son: "+alturaHombre.length+" Y su altura promedio es: "+promedioAlturaH+"     "+
      "La Cantidad Total de Participantes es: "+edadesParticipantes.length+" Y el promedio de edad es: "+promedioEdad)

}