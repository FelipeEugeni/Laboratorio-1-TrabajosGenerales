const filtrarArray = (array) => {
    const valoresAFiltrar = [0, null, undefined];
    const nuevoArray = array.filter((item) => {
        if (!valoresAFiltrar.includes(item)) {
            return true;
        }
    });
    return nuevoArray;
};
