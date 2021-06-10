var vocales=[];
var consonantes=[];
var letterCounteiner=[];


function process(){
    
     if (letterCounteiner.length<10) {       
     
        var letter = document.getElementById('letter').value;
         

        if (letter==="a" || letter==="e" || letter==="i" || letter==="o" || letter==="u"){
            vocales.push(letter);
            letterCounteiner.push(letter);
            
        }else{
            consonantes.push(letter);
            letterCounteiner.push(letter);
            
        }
    
     var letter = document.getElementById('letter').value = "";
    }else{
        alert("Cantidad de Vocales "+vocales.length+" las cuales son: "+vocales+"         "+" Cantidad de consonantes "+consonantes.length+" Las cuales son: "+consonantes);
    }

   
}





