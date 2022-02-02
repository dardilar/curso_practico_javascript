//Helpers
function esPar(number) {
    return (number % 2 === 0);
}


function calcularPromedio(lista) {
    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculadora de Mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const mediana1 = lista[mitad - 1];
        const mediana2 = lista[mitad];
     
        const mediana = calcularPromedio([mediana1, mediana2]);

        return mediana;
    
    }else{
        const mediana = lista[mitad];
        return mediana;
    }
}


//Mediana General
const salariosCol = colombia.map(function(persona) {
    return persona.salary;
});


const salariosColSorted = salariosCol.sort(function(salaryA, salaryB) {
    return salaryA - salaryB;
});

const medianaGeneralCol = medianaSalarios(salariosColSorted);


//Mediana TOP 10%
const spliceStart = (salariosColSorted.length * 90 / 100);
const spliceCount = salariosColSorted.length - spliceStart;


const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col
});