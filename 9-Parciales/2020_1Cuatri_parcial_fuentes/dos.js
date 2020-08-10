//Realizar el algoritmo que permita ingresar los datos de una compra productos de
// la construccion, hasta que el cliente quiera:
//Tipo validad("arena";"cal";"cemento")
//Cantidad de bolsas,
//Precio por bolsa (más de cero ),

//Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
//Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
//a) El importe total a pagar , bruto sin descuento y...
//b) el importe total a pagar con descuento(solo si corresponde)
//d) Informar el tipo con mas cantidad de bolsas.
//f) El tipo mas caro

  function mostrar()
  {
  
  var tipo;
  var respuesta;
  var cantidadDeBolsas;
  var precioPorBolsa;
  var acumuladorBolsas = 0 ;
  var precioBrutoTotal;
  var precioBrutoProducto;
  var precioConDescuento;
  var porcentaje;
  var descuento;
  var acumuladorCal = 0;
  var acumuladorCemento = 0;
  var acumuladorArena = 0;
  var mayorUnidades ;
  var flagDelPrimerPrducto = "es el primero";
  var tipoMasCaro;
  var tipoMasCaroPrecio;



  while(respuesta == 's'){
    tipo = prompt("ingrese tipo : 'Arena', Cal','Cemento'");
    while(tipo != "Arena" && tipo != "Cal" && tipo != "Cemento") {
      tipo = prompt ("ERROR . ingese tipo correcto");
    }
    
    cantidadBolsas = parseInt(prompt("ingrese cantidad de bolsas"));
    
    precio = parseFloat(prompt("ingrese el precio de la bolsa mayor a 0"));
    while(precio < 1){
      precio = parseFloat(prompt("ERROR. ingrese el precio de la bolsa mayor a 0"));
    }

      //ESTO ES PARA HACER EL DESCUENTO. DE ACA HASTA Q HAYA OTRA INTERRUPCION EN MAYUS.
    // la cantidad de bolsas POR el precio por bolsa = el precio bruto del producto
    acumuladorBolsas = acumuladorBolsas + cantidadBolsas;
    precioBrutoProducto = cantidadBolsas * precioPorBolsa
    //precioBrutoTotal funciona como un acumulador de los precios brutos
    precioBrutoTotal = precioBrutoTotal + precioBrutoProducto;

    if(flagDelPrimerPrducto == "es el primero"){
      flagDelPrimerPrducto = "ya paso"
      tipoMasCaro = tipo;
      tipoMasCaroPrecio = precioPorBolsa;

    }else if(precioPorBolsa > tipoMasCaroPrecio){
      tipoMasCaro = tipo;
      tipoMasCaroPrecio = precioPorBolsa;
    }






    switch(tipo){

      case "Arena":
        acumuladorArena = acumuladorArena + cantidadDeBolsas;
        break;

      case "cal":
        acumuladorCal = acumuladorCal + cantidadDeBolsas
        break;

      case "cemento":
        acumuladorCemento = acumuladorCemento + cantidadDeBolsas;
        break;
      }
         respuesta = prompt ("Seguir?");

    }

    if(acumuladorArena > acumuladorCemento && acumuladorArena > acumuladorCal){
      mayorUnidades = "Arena";

    }else if(acumuladorCal > acumuladorCemento && acumuladorCal > acumuladorArena){
      mayorUnidades = "Cal";
    }else{
      mayorUnidades = "Cemento";

    }

 
  if(acumuladorBolsas >30){
    porcentaje = 25;

  }else if(acumuladorBolsas > 10){
    porcentaje = 15;
  }else{
    porcentaje= 0;
  }

  //B) 
  if(porcentaje != 0){
    precioConDescuento = precioBrutoTotal - descuento;
  console.log( " B-- El importe total a pagar con descuento " + precioConDescuento );
}
 

  //A) El importe total a pagar , bruto sin descuento
  console.log( " A-- El iporte total a pagar bruto sin descuento " + precioBrutoTotal );

  //C)
  console.log( " C-- el tipo mas comprado " + mayorUnidades );

  //D) osea precio por bolsa mas caro;
console.log( "D-- el tipo mas caro " + tipoMasCaro);
  
  

}


  


