/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//Al presionar el botón pedir números hasta que
	 //el usuario quiera, sumar los que son positivos
	  //y multiplicar los negativos.


	// declaro varible
	// hasta q el usuario quiera (do while)
	// pedir los numeros
	//analizar el signo de cada numero
	//acumulador 
	//mostrar resultados

	var numero;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 1;
	var respuesta;
	var flag = 0;
 
	do{

		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		
		if(numero >= 0){
			
			acumuladorPositivos = acumuladorPositivos + numero;
			
		}else{
			flag = 1;
			acumuladorNegativos = acumuladorNegativos * numero;
		}

		respuesta = prompt("quiere ingresar otro numero?");
		}while(respuesta == "si");

		if(flag == 0){
			acumuladorNegativos = 0;
		}
		document.getElementById("txtIdSuma").value = acumuladorPositivos;
		document.getElementById("txtIdProducto").value = acumuladorNegativos;





}//FIN DE LA FUNCIÓN