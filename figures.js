//Código del cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado mide: ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${areaCuadrado} cm^2`);

console.groupEnd();

//Código del triangulo
console.group("Triangulo");

const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 4;
const alturatriangulo = 5.5;

console.log(`Los lados del triangulo miden: ${ladotriangulo1} cm, ${ladotriangulo2} cm y ${basetriangulo} cm`);

console.log(`La altura del triangulo es ${alturatriangulo}`);

const perimetroTriangulo= ladotriangulo1 + ladotriangulo2 + basetriangulo;
console.log(`El perimetro del triangulo mide: ${perimetroTriangulo} cm`);

const areaTriangulo = (basetriangulo * alturatriangulo) / 2;
console.log(`El área del triangulo es: ${areaTriangulo} cm^2`);

console.groupEnd();

//Código del circulo
console.group("Circulo");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;

console.log(`El radio del circulo es ${radioCirculo} cm`);

console.log(`El diámetro del circulo es ${diametroCirculo} cm`);

const perimetroCirculo = diametroCirculo * pi;
console.log(`El perímetro del circulo es ${perimetroCirculo} cm`);

const areaCirculo = pi * (radioCirculo ** 2);
console.log(`El área del circulo es ${areaCirculo} cm^2`);

console.groupEnd();