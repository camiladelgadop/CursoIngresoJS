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

	//******************************************************************************************************************* 
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
	var mensaje;


	max = 51;
	min = 1;
	numeroRandomUno = Math.floor(Math.random() * (max - min)) + min;
	numeroRandomDos = Math.floor(Math.random() * (max - min)) + min;
	mensaje = " "

	//A) CALCULAR SI EL NUMERO ES PAR 
	if (numeroRandomUno % 2 == 0 && numeroRandomDos % 2 == 0) {
		multiplicacion = numeroRandomUno * numeroRandomDos;
		mensaje = multiplicacion

	} else { // B)
		if (numeroRandomUno % 2 == 1 && numeroRandomDos % 2 == 1) {
			resta = numeroRandomUno - numeroRandomDos;
			mensaje = resta
		}

	} //C)
	if (numeroRandomUno % 5 == 0) {
		elevarloUno = Math.pow(numeroRandomUno, 3);
		mensaje = mensaje + elevarloUno
	} else {
		if (numeroRandomDos % 5 == 0) {
			elevarloDos = Math.pow(numeroRandomDos, 3);
			mensaje = mensaje + elevarloDos
		} 

	} //D)

	if(mensaje == " "){
		mensaje = "no paso nada"
	}
	alert(mensaje)


	console.log(numeroRandomUno);
	console.log(numeroRandomDos);

}//FIN DE LA FUNCIÓN