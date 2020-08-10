/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var numero;
	var respuesta;
	var maximo = 0;
	var minimo = 0 ;
	var flag = 0;

	do{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		//hago bandera para saber si estoy en la primera iteraccion o no.
		//osea si estoy pidiendo por primera vez;
		if(flag == 0 ||numero > maximo ){//genero este bloque para inicializar max y min
			maximo = numero;	
		}
		
		if(flag == 0 || numero < minimo ){
			minimo = numero;
			flag = 1 ;
		}

		respuesta = prompt("desea ingresar otro numero");
	}while(respuesta == "si");

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;



}//FIN DE LA FUNCIÓN