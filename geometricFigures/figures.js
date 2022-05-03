//Funciones Formulas Figuras Geométricas
//Código del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
};

function areaCuadrado(lado) {
    return lado * lado;
};


//Código del triangulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};

function areaTriangulo(base, altura) {
    return (base * altura) / 2
};


//Código del circulo
function diametroCirculo(radio) {
    return radio * 2;
};

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return (diametro * Math.PI).toFixed(3);
};

function areaCirculo(radio) {
    return (Math.PI * (radio ** 2)).toFixed(3);
};


//Código Triangulo Isoceles
function alturaIsosceles(lados, base) {
    const h = Math.sqrt((lados ** 2) - ((base ** 2) / 4) );
    return h.toFixed(2);
}


//Interactuamos con HTML
//Figura Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado").value;
    const perimetro = perimetroCuadrado(input);

    const resultPerimeter = document.getElementById("squarePerimeter");
    resultPerimeter.innerHTML = `<b>Perimetro:</b> ${perimetro} unidades`
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado").value;
    const area = areaCuadrado(input);
    
    const resultArea = document.getElementById("squareArea");
    resultArea.innerHTML = `<b>Area:</b> ${area} unidades<sup>2</sup>`;
}

//Figura Triangulo
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("InputLado1Triangulo").value;
    const lado2 = document.getElementById("InputLado2Triangulo").value;
    const base = document.getElementById("InputBaseTriangulo").value;

    const perimetro = perimetroTriangulo(Number(lado1),Number(lado2),Number(base));
    
    const resultPerimeter = document.getElementById("trianglePerimeter");
    resultPerimeter.innerHTML = `<b>Perimetro:</b> ${perimetro} unidades`;
}

function calcularAreaTriangulo() {
    const base = document.getElementById("InputBaseTriangulo").value;
    const altura = document.getElementById("InputAlturaTriangulo").value;

    const area = areaTriangulo(base,altura);
   
    const resultPerimeter = document.getElementById("triangleArea");
    resultPerimeter.innerHTML = `<b>Área:</b> ${area} unidades<sup>2</sup>`;

}

//Figura Circulo
function calcularPerimetroCirculo() {
    const radio = document.getElementById("InputCirculo").value;
    const perimetro = perimetroCirculo(radio);
    
    const resultPerimeter = document.getElementById("circlePerimeter");
    resultPerimeter.innerHTML = `<b>Perimetro:</b> ${perimetro} unidades`;
}

function calcularAreaCirculo() {
    const radio = document.getElementById("InputCirculo").value;
    const area =  areaCirculo(radio);

    const resultPerimeter = document.getElementById("circleArea");
    resultPerimeter.innerHTML = `<b>Área:</b> ${area} unidades<sup>2</sup>`;
}

//Figura Isosceles
function calcularAlturaTriangulo() {
    const lados = document.getElementById("InputLadosIsosceles").value;
    const base = document.getElementById("InputBaseIsosceles").value;

    const altura = alturaIsosceles(lados, base);
    const resultPerimeter = document.getElementById("triangleHeight");
    resultPerimeter.innerHTML = `<b>Altura:</b> ${altura} unidades`;
}