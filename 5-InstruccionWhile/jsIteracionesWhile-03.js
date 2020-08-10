/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var clave;
	var flag = 0; // para saber si es la primera vez 
				 // que pido el numero o en la siguiente
				
	//clave = prompt("ingrese la clave");

	//while(clave != "utn750"){
	//	clave = prompt("clave incorrecta, reigrese clave");

	//}
	 //alert("clave correcta");

	 do{
		  if(flag == 0){
			  clave = prompt("ingrese clave");
			  flag = 1; // tengo que cambiar el valor 
						  //para que en las  siguientes no vuelva
						  //a este if y pase al else
			}else{
				clave = prompt("clave incorrecta! reingrese");
			}
	 }while(clave != "utn 750");

	 alert("clave correcta");
 
}//FIN DE LA FUNCIÓN
