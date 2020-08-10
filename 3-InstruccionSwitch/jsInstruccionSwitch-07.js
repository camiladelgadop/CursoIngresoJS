function mostrar()
{
	var destino;
	destino = txtIdDestino.value;

	switch(destino){
		case "Cataratas":{
			alert("Norte");
		}break;
		case"Mar del plata":{
			alert("Este")
		}break;
		default:{
			alert("sur");
		}break;
	}

}//FIN DE LA FUNCIÓN