const esPalindromo = (palabra) => {
    return palabra === palabra.split("").reverse().join("");
};
