var color = {
    mac:0,
    jack:0,
    willy:0,
    smith:0
}
var movilidad = {
    mac:0,
    jack:0,
    willy:0,
    smith:0
}
var edad = {
    mac:0,
    jack:0,
    willy:0,
    smith:0
}
//var claro=""
//var viejo=""
//var lento=""

if (color.mac <= color.smith && movilidad.mac <= movilidad.jack && edad.mac <= edad.jack) {
color.mac++;
movilidad.mac++;
edad.mac++;
}
if (movilidad.jack >= movilidad.willy) {
movilidad.willy++;
}
if (edad.mac <= edad.willy) {
edad.mac++;
}
if (edad.mac <= edad.smith){
edad.mac++
}
if (color.smith >= color.willy){
color.willy++
}
if (movilidad.jack >= movilidad.smith && color.jack <= color.smith){
movilidad.smith++
color.jack++
}

for (const prop in edad){
    if (edad[prop]>=1) {
        console.log("el caballo mas viejo es el de "+prop)
        document.getElementById("Viejo").innerHTML = "<h1>el caballo mas viejo es el de "+prop+"</h1>"
    }
    if (movilidad[prop]<1) {
        document.getElementById("Lento").innerHTML = "<h1>el caballo mas lento es el de "+prop+"</h1>"
    }
    if (color[prop]<1) {
        document.getElementById("Claro").innerHTML = "<h1>el caballo mas claro es el de "+prop+"</h1>"
    }
}
