const listaPrueba = [1,2,3,1,2,3,4,2,2,2,1];


function calcularModa (lista) {
    const listaCount = {};

    lista.map(function(i) {
        if (listaCount[i]) {
            listaCount[i] += 1;
        }else {
            listaCount[i] = 1;
        }
    });

    const listaArray = Object.entries(listaCount).sort(function(a,b) {
        return a[1] - b[1];
    });

    const moda = listaArray[listaArray.length - 1];
    return moda;
}