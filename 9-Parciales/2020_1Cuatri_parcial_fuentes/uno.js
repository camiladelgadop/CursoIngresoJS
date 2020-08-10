//Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
//de cada una debo obtener los siguientes datos:
//el tipo (validar "barbijo" , "jabón" o "alcohol") ,
//el precio (validar entre 100 y 300),
//la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
//la Marca y el fabricante.
//Se debe Informar al usuario lo siguiente:
//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
//b) Del tipo con mas unidades, el promedio por compra
//c) Cuántas unidades de jabones hay en total

function mostrar()
{

//declarar variables
var tipo;
var precio;
var cantidad;
var marca;
var fabricante;
var precioAlcoholBarato;
var cantidadAlcoholBarato;
var fabricanteAlcoholBarato;
var acumuladorAlcohol = 0;
var acumuladorJabon = 0;
var acumuladorBarbijo = 0;
var contadorBarbijo = 0;
var contadorJabon = 0;
var contadorAlcohol = 0;
var promedioCompra;
var mayorTipo; //con mas unidades
var flagAlcohol = 0; 
var mensajeAlcohol = "no se compraron alcoholes";
var mensajeJabon ;
var mensajeb;


//tengo que generar un buble q se repita 5 veces(tipo, 
//precio, cantidad, marca , fabricante) FOR pq conozco
//la cant de veces repetidad

for(var i = 0; i < 2; i++){

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
			contadorAlcohol++;

			//A
			if(flagAlcohol == 0 || precioAlcoholBarato > precio){
				precioAlcoholBarato = precio;
				cantidadAlcoholBarato = cantidad
				fabricanteAlcoholBarato = fabricante;
				flagAlcohol = 1;
			}
			break;

		case "Barbijo":
			acumuladorBarbijo = acumuladorBarbijo + cantidad;
			contadorBarbijo++;
			break;

		case "Jabon":
			acumuladorJabon = acumuladorJabon + cantidad;
			contadorJabon++;
			break;	
	}
}

//B -- del tipo con mas unidades (busco que tipo puso mas )
// y saco el promedio x compra
if( acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon ){//acumulador alcohol el mayor
	mayorTipo = "Alcohol";
	promedioCompra = acumuladorAlcohol / contadorAlcohol;

}else if(acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon   ){ //acumulador barbijo el mayor
	mayorTipo = "Barbijo";
	promedioCompra = acumuladorBarbijo / contadorBarbijo;

}else{//acumulador jabon el mayor
	mayorTipo = "Jabon";
	promedioCompra = acumuladorJabon / contadorJabon;
}

//A:  esto es Por si no se ingreso el producto
if( flagAlcohol == 1){ //A
	mensajeAlcohol = "fabricante alcohol barato " + fabricanteAlcoholBarato + 
	"/nCantidad " + cantidadAlcoholBarato +
	 "/nPrecio " + precioAlcoholBarato; 
}

//B
mensajeb =  "B :  tipo con mas unidades " + mayorTipo + "promedio : " + 
promedioCompra;

//C

mensajeJabon = "C : Unidades de jabon " + acumuladorJabon;

alert(mensajeAlcohol + "/n" + mensajeb + "/n" + mensajeJabon );



//A )tengo que reconocer si el producto es "alcohol" y recordar 
//el precio , cant y fabricante del de menor precio.



//B )acumulador de cada tipo y cuando saco el de mas cantidades
//hago el promedio x compra ( 700 (suma del tipo que compre dividido las compras q hice)) 

//C ) contador de jabon 
}
