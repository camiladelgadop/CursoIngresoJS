function mostrar() {
	var edad;
	var civil;

	edad = txtIdEdad.value;
	civil = estadoCivil.value;

	if (edad < 18 && civil != "Soltero") {
		alert("usted es muy pequeño para NO ser soltero")

	}



}//FIN DE LA FUNCIÓN