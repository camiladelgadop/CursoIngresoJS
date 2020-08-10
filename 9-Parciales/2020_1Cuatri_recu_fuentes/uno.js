
//Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
//de cada una debo obtener los siguientes datos:
//el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
//el precio (validar entre 100 y 300),
//la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
//la Marca y el fabricante.
//Se debe Informar al usuario lo siguiente:

//a) Del más caro de los jabones, la cantidad de unidades y el fabricante

//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra

//c) Cuántas unidades de Barbijos se compraron en total

function mostrar()
{
var tipo;
var precio;
var cantidad;
var marca;
var fabricante;
var mayorUnidades;
var promedio;
var acumuladorBarbijo = 0;
var acumuladorAlcohol = 0;
var acumuladorJabon = 0;
var contadorBarbijo = 0;
var contadorAlcohol = 0;
var contadorJabon = 0;
var jabonMasCaro;
var cantidadJabonCaro;
var fabricanteJabonCaro;
var flagJabon = 0;
var mensajeJabon = "no se ingreso ningun producto 'tipo' jabon"
var mensajeb;
var mensajeBarbijo;

for(var i = 0; i < 5; i ++){

	tipo = prompt("ingrese tipo : 'Barbijo' , 'Jabon' o 'alcohol' ");
	while(tipo != "Barbijo" && tipo != "Jabon" && tipo != "Alcohol"){
		tipo = prompt(" ERROR. ingrese tipo VALIDO : 'Barbijo' , 'Jabon' o 'alcohol' ");
	}
	
	precio = parseFloat(prompt("ingrese precio : entre $100 y $300"));
	while(precio < 100 || precio > 300 || isNaN(precio)){
		precio = parseFloat(prompt("el precio ingresado no esta entre $100 y $300. Reigrese :"));
	}

	cantidad = parseInt(prompt("igrese cantidad de unidades menos a 1000 y mayor a 0"));
	while( cantidad <= 0 || cantidad >1000 || isNaN(cantidad)){
		cantidad = parseInt(prompt("ERROR. igrese cantidad de unidades menor a 1000 y mayor a 0"));
	} 

	marca = prompt("ingrese marca");
	fabricante = prompt("ingrese fabricante");


	switch(tipo){
		case "Alcohol":
			acumuladorAlcohol = acumuladorAlcohol + cantidad;
			contadorAlcohol++


			break;

		case "Barbijo":
			acumuladorBarbijo = acumuladorBarbijo + cantidad;
			contadorBarbijo++


			break;
			
		case "Jabon":
			acumuladorJabon = acumuladorJabon + cantidad;
			contadorJabon++
			
			//A
			if(flagJabon == 0 || jabonMasCaro < precio ){
				jabonMasCaro = precio;
				cantidadJabonCaro = cantidad;
				fabricanteJabonCaro = fabricante;
				flagJabon = 1;


			}
			break;	

	}
}
//A:  esto es Por si no se ingreso el producto
if( flagJabon == 1){ //A
	mensajeJabon = "fabricante jabon caro " + fabricanteJabonCaro + 
	"/nCantidad " + cantidadJabonCaro +
	 "/nPrecio " + jabonMasCaro; 
}

//B
if( acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon ){
	mayorUnidades = "Alcohol";
	promedio = acumuladorAlcohol / contadorAlcohol;

}else if(acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon   ){
	mayorUnidades = "Barbijo";
	promedio = acumuladorBarbijo / contadorBarbijo;

}else{//acumulador jabon el mayor
	mayorUnidades = "Jabon";
	promedio = acumuladorJabon / contadorJabon;

//rta B)
mensajeb =  "B :  tipo con mas unidades " + mayorUnidades + "promedio : " + promedio

// c)
mensajeBarbijo = "C : Unidades de jabon " + acumuladorBarbijo;

alert(mensajeJabon + "/n" + mensajeb + "/n" + mensajeBarbijo );
}







}
