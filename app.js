function greet() {
	console.log("Hello");
}

function logGreeting(fn) {
	fn();
}

//logGreeting(greet)

let greetMe = function () {
	console.log('Hello from the function expression');
}

//greetMe();
//console.log(greetMe)

let greetme = () => {
	console.log("Hola Arrow");
}

let saludo = (nombre, tratamiento) => {
	console.log('Hola ' + tratamiento + '  ' + nombre);
}

//saludo('Miguel', 'sr.')

let cuadrado = numero => numero * numero;

console.log(cuadrado(2))
