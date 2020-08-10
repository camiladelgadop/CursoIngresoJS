function mostrar()
{
	//al presionar el botón pedir un número.
	//Informar si el numero es PRIMO o no.

	var numero;
	var contadorDivisores = 0;
	var contadorPrimo = 0;

	numero = parseInt(prompt("ingrese un numero"));
	while(isNaN(numero)){
		numero = parseInt(prompt(" eso no es un numero . ingrese un numero"));

	}

	for(var i = 1; i <=  numero; i ++){

		if(numero % i == 0){
			contadorDivisores++;

		}
		
	}

	if ( contadorDivisores == 2){
		alert ( numero + " es primo ");
	}else{
		alert(numero + " no es primo")
	}

}//FIN DE LA FUNCIÓN