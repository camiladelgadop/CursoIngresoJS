/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var suma;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    suma = (largo*2 + ancho*2) *3;

    alert ( " la cantidad de alambre a omprar de un terreno rectngular alambrado con 3 hilos de alambre es : " + suma + " metros " );

}
function Circulo () 
{
    var radio;
    var perimetro;
    var totalAlambre;

    radio = txtIdRadio.value;

    radio = parseInt(radio);

    perimetro = 2 * radio * Math.PI;

    //console.log(perimetro.toFixed(2));
    perimetro = Math.ceil(perimetro);
    totalAlambre = perimetro * 3

    alert ( " la cantidad de alambre a comprar del terreno circular alambrado con 3 hilos de alamre es : " + totalAlambre + " metros " );
}

function Materiales () 
{
    
    var largo;
    var ancho;
    var cemento;
    var cal;
    var area;

    largo = txtIdLargo.value
    ancho = txtIdAncho.value

    largo = parseInt(largo);
    ancho = parseInt(ancho);
    
    area = largo * ancho;

    cemento = 2 * area
    cal = 3 * area 
    //para 1 m2 ---- 2 bolsas
    // para 1o m2----- x = 10 m2 *2

    alert ( " se necesitan "+ cemento + " bolsas de cemento y " + cal + " bolsas de cal " );
    
}