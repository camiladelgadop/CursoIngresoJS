function mostrar()
{

	var numero;
	var contadorDivisores = 0 ;

	numero = parseInt(prompt("ingrese un numero"));

	//usamos el for para que la variable de control
	//tome los numeros entre el 1 y el valor ingresado.
	for(var i = 1; i <= numero; i++){


		if( i % 2 == 0 ){
			contadorDivisores++;
			console.log(i);
		}
	}

	console.log( " cantidad de divisores "  +  contadorDivisores );


}//FIN DE LA FUNCIÓN