
function multiplicar(){
    let num1 = 0
    let num2 = 0
    let result =0
    num1 = Number(document.getElementById("Numero1").value);
    num2 = Number(document.getElementById("Numero2").value);
    for (let i = 0; i < num2; i++) {
        result += num1;
    }
    document.getElementById("Producto").innerHTML = result;
};
