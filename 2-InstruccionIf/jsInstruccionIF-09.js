function mostrar()
{  
	var numeroRandom;
	var max;
	var min;

	max = 11;
	min = 1;
	numeroRandom = Math.floor(Math.random() * (max - min)) + min;

	console.log(numeroRandom);

}