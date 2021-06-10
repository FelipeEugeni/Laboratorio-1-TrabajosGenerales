// Corredor B<C<D<A

var runnerA = 0
var runnerB = 0
var runnerC = 0
var runnerD = 0
var finishRunner=true

var selectRunner = prompt ("Seleccione un Corredor, A, B, C, D")
Carrera()

function Carrera() {
    
while (finishRunner===true) {
    

    runnerA = Math.floor(Math.random() * 4 ) + 1
    runnerB = Math.floor(Math.random() * 4 ) + 1
    runnerC = Math.floor(Math.random() * 4 ) + 1
    runnerD = Math.floor(Math.random() * 4 ) + 1
   
    if (runnerB < runnerC && runnerD > runnerC && runnerD < runnerA){
    finishRunner=false
    }

}
MessengerPosicion()
}


function MessengerPosicion(){

    if (selectRunner==="a") {
        alert ("Su corredor a llega en "+runnerA+" Posicion")
    }
    if (selectRunner==="b") {
        alert ("Su corredor a llega en "+runnerB+" Posicion")
    }
    if (selectRunner==="c") {
        alert ("Su corredor a llega en "+runnerC+" Posicion")
    }
    if (selectRunner==="d") {
        alert ("Su corredor a llega en "+runnerD+" Posicion")
    }

    alert ("Orden Claficatorio: Corredor B "+runnerB+" Posicion, Corredor C "+runnerC+" Posicion, Corredor D "+runnerD+" Posicion, Corredor A "+runnerA+" Posicion")
}








