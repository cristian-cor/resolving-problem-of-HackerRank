// En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
// Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
// ¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!
// En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista.
//     Si no hay números repetidos, devuelve -1.

// solution

const gifts = [1,2,3,4,5,4,2,6,7,8,2,1]
function findFirstRepeated(gifts) {
    const viewNumbers = new Set();

    for (const number of gifts) {
        if (viewNumbers.has(number)) {
            return number;
        }

        viewNumbers.add(number);
    }

    return -1;
}

findFirstRepeated(gifts)

// Note:
// * Un Set es una estructura de datos diseñada para almacenar valores únicos.
// *  En un Set, no puedes tener duplicados y los elementos se mantienen en el orden de inserción.
