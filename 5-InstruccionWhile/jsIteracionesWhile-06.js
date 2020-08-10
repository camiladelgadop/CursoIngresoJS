function mostrar()
{
	var numero ;
	var acumulador = 0 ;
	var promedio;
    var i = 0;


					

		while(i < 5 ){
			numero = prompt("ingrese 5 numeros");
			numero = parseInt(numero);

			acumulador = acumulador + numero;  
			i= i + 1;
		}

						
		promedio = acumulador / 5;

	    document.getElementById("txtIdSuma").value = acumulador;
		document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN