const mayor = (array) => {
    let mayor = array[0];
    array.forEach((element) => {
        if (element > mayor) {
            mayor = element;
        }
    });

    return mayor;
};