/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{	
	var respuesta = "si";
	var promedio;
	var acumulador = 0;
	var numero;
	var contador = 0; // es porque cuenta la can e veces que ingreso un numero;

	do {
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador = contador + 1

		//suma acumulada
		acumulador = acumulador + numero;


		respuesta = prompt("desea continuar");
	
	}while(respuesta == "si");

		promedio = acumulador / contador;

		document.getElementById("txtIdSuma").value = acumulador;
		document.getElementById("txtIdPromedio").value = promedio;
		 




}//FIN DE LA FUNCIÓN