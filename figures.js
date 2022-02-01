//Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado (lado) {
    return lado * 4;
};

function areaCuadrado (lado) {
    return lado * lado;
};

console.groupEnd();

//Código del triangulo
console.group("Triangulo");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
};

function areaTriangulo (base, altura) {
    return (base * altura) / 2
};

console.groupEnd();

//Código del circulo
console.group("Circulo");

function diametroCirculo (radio){
    return radio * 2;
};

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
};

function areaCirculo (radio) {
    return Math.PI * (radio ** 2)
};

console.groupEnd();

//Código Triangulo Isoceles
console.group("Isosceles")

function alturaIsosceles(lados, base) {
    const h = Math.sqrt((lados ** 2) - ((base ** 2) / 4) );
    return h;
}


//Interactuamos con HTML

//Figura Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Figura Triangulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputLado1Triangulo");
    const lado1 = input1.value;

    const input2 = document.getElementById("InputLado2Triangulo");
    const lado2 = input2.value;

    const input3 = document.getElementById("InputBaseTriangulo");
    const base = input3.value;

    const perimetro = perimetroTriangulo(Number(lado1),Number(lado2),Number(base));
    alert(perimetro)
}

function calcularAreaTriangulo() {
    const input3 = document.getElementById("InputBaseTriangulo");
    const base = input3.value;

    const input4 = document.getElementById("InputAlturaTriangulo");
    const altura = input4.value;

    const area = areaTriangulo(base,altura);
    alert(area)

}

//Figura Circulo
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const radio = input.value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const radio = input.value;

    const area = areaCirculo(radio);
    alert(area);
}

//Figura Isosceles
function calcularAlturaTriangulo() {
    const input1 = document.getElementById("InputLadosIsosceles");
    const lados = input1.value;

    const input2 = document.getElementById("InputBaseIsosceles");
    const base = input2.value;

    const altura = alturaIsosceles(lados, base);
    alert(altura);
}