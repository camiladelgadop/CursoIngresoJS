/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. ok
2-Suma de los positivos.ok
3-Cantidad de positivos.ok
4-Cantidad de negativos.ok
5-Cantidad de ceros.ok
6-Cantidad de números pares.ok
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
	function mostrar()
	{
		var numero;
		var respuesta;
		var acumuladorNegativos = 0 ;
		var acumuladorPositivos = 0;
		var contadorPositivos = 0;
		var contadorNegativos = 0;
		var contadorCeros = 0;
		var contadorPares = 0;
		var promedioPositivos = 0;
		var promedioNegativos = 0;
		var diferencia;
		
		do{
				numero = prompt("ingrese un numero");
				numero = parseInt(numero);

				//analizar el signo del numero.
				if(numero < 0 ){//negativos
					acumuladorNegativos = acumuladorNegativos + numero;//aca sumo negativos
					contadorNegativos++;  //aca saco cant de negativos

				}else if( numero == 0){//cero
					contadorCeros++ //aca saco cant de ceros

				}else{//positivos
					acumuladorPositivos = acumuladorPositivos + numero;//aca sumo positivos
					contadorPositivos++ //aca saco cant de positivos

				}
				if(numero % 2 == 0 ){//cant numeros pares
					contadorPares++
				}
				
				respuesta = prompt("Desea continuar?");
			}while(respuesta == 's');
		
			//debo declarar una variable ya que si no ponen ningun
			// positivo o neg no se hace la division
			if(contadorPositivos != 0){
				promedioPositivos = acumuladorPositivos / contadorPositivos;
			}
			if(contadorNegativos != 0){
				promedioNegativos = acumuladorNegativos / contadorNegativos;
			}

			diferencia = contadorPositivos - contadorNegativos;

			console.log( " suma de los negativos "  +  acumuladorNegativos );
			console.log( " suma de los positivos "  +  acumuladorPositivos );
			console.log( " cantidad de los negativos "  +  contadorNegativos );
			console.log( " cantidad de los positivos "  +  contadorPositivos );
			console.log( " cantidad de ceros "  +  contadorCeros );
			console.log( " cantidad de numeros pares "  +  contadorPares );
			console.log( " promedio de numeros positivos "  +  promedioPositivos );
			console.log( " promedio de numeros negativos "  +  promedioNegativos );
			console.log( " diferencia entre positivos y negativos "  +  diferencia );
	}//FIN DE LA FUNCIÓN