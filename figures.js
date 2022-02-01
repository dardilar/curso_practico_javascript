//Código del cuadrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

function perimetroCuadrado (lado) {
    return lado * 4;
};

// console.log(`El perimetro del cuadrado mide: ${perimetroCuadrado} cm`);

function areaCuadrado (lado) {
    return lado * lado;
};
// console.log(`El área del cuadrado es: ${areaCuadrado} cm^2`);

console.groupEnd();

//Código del triangulo
console.group("Triangulo");

// const ladotriangulo1 = 6;
// const ladotriangulo2 = 6;
// const basetriangulo = 4;
// const alturatriangulo = 5.5;

// console.log(`Los lados del triangulo miden: ${ladotriangulo1} cm, ${ladotriangulo2} cm y ${basetriangulo} cm`);

// console.log(`La altura del triangulo es ${alturatriangulo}`);

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
};
// console.log(`El perimetro del triangulo mide: ${perimetroTriangulo} cm`);

function areaTriangulo (base, altura) {
    return (base * altura) / 2
};
// console.log(`El área del triangulo es: ${areaTriangulo} cm^2`);

console.groupEnd();

//Código del circulo
console.group("Circulo");

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// const pi = Math.PI;

// console.log(`El radio del circulo es ${radioCirculo} cm`);

function diametroCirculo (radio){
    return radio * 2;
};
// console.log(`El diámetro del circulo es ${diametroCirculo} cm`);

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
};
// console.log(`El perímetro del circulo es ${perimetroCirculo} cm`);

function areaCirculo (radio) {
    return Math.PI * (radio ** 2)
};
// console.log(`El área del circulo es ${areaCirculo} cm^2`);

console.groupEnd();