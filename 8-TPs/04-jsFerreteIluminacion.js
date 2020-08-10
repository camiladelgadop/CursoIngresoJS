/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{  

    const PRECIO = 35;
    var cantidad;
    var marca;
    var descuento;
    var importeFinal;
    var iibb;
    var precioConDescuento;


    cantidad = txtIdCantidad.value;
    marca = Marca.value;
    
    
   switch(cantidad){
     case 1:
     case 2:
       descuento = 0;
       break;
      case 3:
        if(marca == "ArgentinaLuz"){
          descuento = 15;
        }else if(marca == "FelipeLamparas"){
          descento == 10;
        }else{
          descuento == 5;
        }
         break;
      case 4:
        if(marca == "ArgentinaLuz" || "FelipeLamparas"){
          descuento = 25;
        }else{
          descuento = 20;
        }
        break;
      case 5:
        if(marca == "ArgentinaLuz"){
          descuento = 40; 
        }else{
          descuento = 30;
        }
        break;
      default:
      descuento = 50;
   
    }
      // por unidad
    precioConDescuento = PRECIO - PRECIO * descuento / 100;
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
    //por todo
    importeFinal = precioConDescuento * cantidad;

    //para cacular si el importe final es mayor a 120 por los ingresos brutos

    if(importeFinal > 120){
      iibb = importeFinal * 10 /100;
      importeFinal = importeFinal + iibb; 
      alert ("total : $" + importeFinal + "usted pago $ " + iibb + " de ingresos brutos"  );
    }else{
      alert (" total $ " + importeFinal);
    }


 





















    //A)
   // if (cantidad >= 6){
       // descuento = cantidad * precio *  0,50;
        
    //B)
    //}//else{
     //   if( cantidad == 5 && (marca == " ArgentinaLuz"){
       //     total = precio - dscuentoCuarenta;
         //   total = parseInt(total);
          
        //}//else{
           // Total = precio - descuentoTreinta
         //}
       // }
    //C)
     //if(cantidad == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")){
       // total = precio - descuentoVeinticinco;
        //total = parseInt(total);

     //} else {
       //  total = precio - descuentoVeinte;
     //}
     //D)
     //if(cantidad == 3 && marca == "ArgentinaLuz"){
       //  total = precio - descuentoQuince;
         //total= parseInt(total);
        //}else{
          //  if(cantidad == 3 && marca == "FelipeLamparas"){
     //           total= precio - descuentoDiez;
       //         total = parseInt(total);
         //   }else{
           //     total = precio - descuentoCinco;
             //   total = parseInt(total);
            //}   

        //}
     //E)   
    // if(tota > 120){
      //  totalAunmento = total + total *aumentoDiez;
        //totalAunmento = parseInt(totalAunmento);
        //txtIdprecioDescuento.value = ""
     //}

    

}
//}
