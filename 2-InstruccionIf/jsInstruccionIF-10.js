function mostrar() {

	//var numeroRandom;
	//var max;
	//var min;

	//max = 11;
	//min = 1;
	//numeroRandom = Math.floor(Math.random() * (max - min)) + min;


	//if (numeroRandom >= 9) {
	//	alert( " Excelente " );

	//} else {
	//	if (numeroRandom >= 4 ) {
	//		alert(  " aprobo " );
	//	} else {
	//		alert(  " Vamos, la proxima se puede " );
	//	}
	//}
	//(EJERCICIO)
	// calcular dos numeos random entre 1 y 51:
	//A)si son pares multiplicarlos, 
	//B)impares restarlos, 
	//C)si alguno es divisible por 5 elevarlo al cubo, 
	//D)si no ocurre nada de eso poner "no paso nada"
	//E) mostrar el resultado en un solo alert

	var numeroRandomUno;
	var numeroRandomDos;
	var max;
	var min;
	var multiplicacion;
	var elevarloUno;
	var elevarloDos;
	var resta;

	max = 51;
	min = 1;
	numeroRandomUno = Math.floor(Math.random() * (max - min)) + min;
	numeroRandomDos = Math.floor(Math.random() * (max - min)) + min;


	//A- CALCULAR SI EL NUMERO ES PAR 
	if (numeroRandomUno % 2 == 0 && numeroRandomDos % 2 == 0) {
		multiplicacion = numeroRandomUno * numeroRandomDos;
		alert(multiplicacion)

	} else {
		resta = numeroRandomUno - numeroRandomDos;
		alert(resta);
	}
	if (numeroRandomUno % 5 == 0) {
		elevarloUno = Math.pow(numeroRandomUno, 3);
		alert(elevarloUno);
	} else {
		if (numeroRandomDos % 5 == 0) {
			elevarloDos = Math.pow(numeroRandomDos, 3);
			alert(elevarloDos);
		}
	}


	console.log(numeroRandomUno);
	console.log(numeroRandomDos);


}//FIN DE LA FUNCIÓN