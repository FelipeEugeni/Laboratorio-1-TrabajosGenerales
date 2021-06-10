
var numberList=[];
var numberFinish=0;
var sumFirsten=0
var firsten=[]
var mulforSix=[]


Sumatoria()


function Sumatoria() {
    
    while (numberFinish<1000){
    
        var numberUser = Number(prompt ("Inserte Numeros Aleatorios Hasta llegar a 1000 "+numberFinish));
        numberList.push(numberUser);
        numberFinish= numberUser + numberFinish
    }
    ParametrosExtras()
    Resultados()
}
function Resultados() {
    
    
    
    if (numberFinish>1000){
   
        var exesFinish= numberFinish-1000
        alert("Resultado: "+numberFinish+" Sobrante: "+exesFinish+" Vuelve a Intentarlo")
        numberFinish=0
        numberList=[]
        Sumatoria()
    
    }else{
        alert("Muy bien Has llegado a los: "+numberFinish)
        alert("Numeros del 1 al 10 Utilizados: "+firsten.length+" que da un total de: "+sumFirsten+" Y son: "+firsten)
        alert("Multiplos de 6 Utilizados: "+mulforSix.length+" Y son: "+mulforSix)
    }
   
}

function ParametrosExtras() {

    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i]<=10 && numberList[i]>0){
         firsten.push(numberList[i])
         sumFirsten=numberList[i]+sumFirsten   
        }
   }
    for (let i = 0; i < numberList.length; i++) {
        if ((numberList[i] %6)===0){
         mulforSix.push(numberList[i])   
        }     
    }

}






