let array=[10,13,25,1,21]
let newArray=[]
let numberFinal=0


for ( let i = 0; array.length; i++){
    if (array[i] > array[i + 1])
    newArray.push(array[i])
    if (newArray[i] > array[i] ){
        numberFinal=newArray[i]
    }
}

console.log(newArray)