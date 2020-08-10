function mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var estadoCivil;
	var temperatura;
	var respuesta;
	var flag;
	var temperaturaMaxima;
	var temperaturaMinima;
	var nombreTemperaturaMaxima;
	var nombreTemperaturaMinima;
	var cantidadMayoresViudos;
	var cantidadHombresSolterosOViudos;
	var personasTerceraEdadMas38Grados;
	var acumEdadSolteros;
	var cantidadHombresSolteros;
	var promedio;


	respuesta = "s";
	flag = 0;
	cantidadMayoresViudos = 0;
	cantidadHombresSolterosOViudos = 0;
	personasTerceraEdadMas38Grados = 0;
	acumEdadSolteros = 0;
	cantidadHombresSolteros = 0;


	while (respuesta == "s") {

		nombre = prompt("Ingrese nombre");
		do {
			sexo = prompt("ingrese sexo");

		} while (sexo != "f" && sexo != "m");

		do {
			edad = prompt("Ingrese edad");
			edad = parseInt(edad);
		} while (isNaN(edad) || edad < 1);
		do {
			estadoCivil = prompt("Ingrese soltero, casado o viudo");
		} while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");
		do {
			temperatura = prompt("Ingrese temperatura");
			temperatura = parseInt(temperatura);
		} while (isNaN(temperatura) || temperatura < 0);



		if (flag == 0) {// si es la primera iteracion pasa esto
			flag = 1;
			temperaturaMaxima = temperatura;
			temperaturaMinima = temperatura;
			nombreTemperaturaMaxima = nombre;
			nombreTemperaturaMinima = nombre;
		} else {
			if (temperatura > temperaturaMaxima) {// y si a maximo le asigno un valor
				temperaturaMaxima = temperatura;
				nombreTemperaturaMaxima = nombre;

			}
		}
		if (edad > 17 && estadoCivil == "viudo") {
			cantidadMayoresViudos++;
		}
		if (sexo == "m" && edad > 17 && (estadoCivil == "viudo" || estadoCivil == "soltero")){
			cantidadHombresSolterosOViudos++;
		}
		if (edad > 59 && temperatura > 37) {
			personasTerceraEdadMas38Grados++;
		}
		if (sexo == "m" && estadoCivil == "soltero") {
			cantidadHombresSolteros++;
			acumEdadSolteros = acumEdadSolteros + edad;
		}



		respuesta = prompt("ingrese s para seguir ");
	}// fin while


	if (cantidadHombresSolteros != 0) {
		promedio = acumEdadSolteros / cantidadHombresSolteros;
	} else {
		promedio = "no se ingresaron datos";
	}

	document.write("El nombre de la persona con mas temperatura es : " + nombreTemperaturaMaxima + "<br>");
	document.write("Cuantos mayores de edad estan viudos es : " + cantidadMayoresViudos + "<br>");
	document.write("La cantidad de hombres que hay solteros o viudos" + cantidadHombresSolterosOViudos + "<br>");
	document.write("Personas de la tercera edad tienen mas de 38 de temperatura : "+personasTerceraEdadMas38Grados+"<br>");
	document.write("El promedio de edad entre los hombres solteros : "+promedio+"<br>");



}
