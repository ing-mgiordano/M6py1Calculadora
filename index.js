function getResult(oper, calculate) {
	let result = document.getElementById('resultado')
	result.innerHTML = `El resultado de la/el ${oper} es ${calculate}`;
}

function calculateSum(num1, num2, oper){
	let calculate = num1 + num2
	getResult(oper, calculate)
}

function calculateSubt(num1, num2, oper){
	let calculate = num1 - num2
	getResult(oper, calculate)
}

function calculateMult(num1, num2, oper){
	let calculate = num1 * num2
	getResult(oper, calculate)
}

function calculateDiv(num1, num2, oper){
	let calculate = num1 / num2
	getResult(oper, calculate)
}

function calculateMod(num1, num2, oper){
	let calculate = num1 % num2
	getResult(oper, calculate)
}

function calculateResult() {
	const num1 = parseInt(document.getElementById('input-num1').value);
	const num2 = parseInt(document.getElementById('input-num2').value);
	let oper = document.getElementById('Opciones').value;
	

	switch (oper) {
		case 'Suma':
			calculateSum(num1, num2, oper);
			break;
		case 'Resta':
			calculateSubt(num1, num2, oper);
			break;
		case 'Multiplicacion':
			calculateMult(num1, num2, oper);
			break;
		case 'Division':
			calculateDiv(num1, num2, oper);
			break;
		case 'Modulo':
			calculateMod(num1, num2, oper);
			break;
		default:
			document.getElementById('resultado').innerHTML = `No ha seleccionado una operacion matematica`
			break;
	}
	

	console.log(num1, num2, oper)
}
