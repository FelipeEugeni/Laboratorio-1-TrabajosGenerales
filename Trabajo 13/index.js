const palabraRepetida = (texto) => {
    const palabras = texto.split(" ");
    let palabraMasRepetida = "";
    let mayorRepeticion = 0;
    for (let i = 0; i < palabras.length; i++) {
        let repeticionesActuales = 0;
        for (let j = i; j < palabras.length; j++) {
            if (palabras[i] === palabras[j]) {
                repeticionesActuales++;
                if (repeticionesActuales > mayorRepeticion) {
                    mayorRepeticion = repeticionesActuales;
                    palabraMasRepetida = palabras[i];
                }
            }
        }
    }
    return palabraMasRepetida;
};