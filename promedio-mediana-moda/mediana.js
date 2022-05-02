const lista = [
    500,
    100,
    300,
    400000000,
    200,
    50
];

//Calcula el promedio de una lista
function calcularPromedio(lista) {
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    });
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Determina si un número es Par o Impar
function esPar(numero) {
    if (numero % 2 == 0) {
        return true;
    }else {
        return false;
    }
}

//Calcula la Mediana de una lista
function calcularMediana(lista) {

    //Método sort (Organizar los valores de un Array)
    lista = lista.sort(function(a,b) {
        return a - b;
    });
    console.log(lista);

    const mitadLista = parseInt(lista.length / 2);

    let mediana;

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];
        const promedio = calcularPromedio([elemento1, elemento2]);
        mediana = promedio;

        return mediana;

    }else {
        mediana = lista[mitadLista]

        return mediana;
    }
}