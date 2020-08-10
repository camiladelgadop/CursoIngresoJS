function mostrar()
{
	var numero;
	var contadorNumerosPar = 0 ;

	numero = parseInt(prompt("ingrese un numero"));

	//usamos el for para que la variable de control
	//tome los numeros entre el 1 y el valor ingresado.
	for(var i = 1; i <= numero; i++){


		if( i % 2 == 0 ){
			contadorNumerosPar++;
			console.log(i);
		}
	}

	console.log( " pares encontrados "  +  contadorNumerosPar );


}//FIN DE LA FUNCIÓN