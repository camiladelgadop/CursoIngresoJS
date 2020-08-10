//Bienvenidos.
//Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
// el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
//a) El promedio de las notas totales.
//b) La nota más baja y el sexo de esa persona.
//c) La cantidad de varones que su nota haya sido mayor o igual a 6.

function mostrar()
{
    var nota;

    var sexo;
    var promedio;
    var notaMasBaja;
    var sexoNotaMasBaja;


    for(var i = 0; i < 5; i++){

        nota = parseInt(prompt("ingrese nota entre '0' y '10' "))
        while(nota < 0 || nota > 10 || isNaN(nota)){
            nota = parseInt(prompt("error. ingrese nota entre '0' y '10' ");
        }

        sexo = prompt("ingrese sexo 'f' o 'm'");
        while(sexo != "f" || sexo != "m"){
            sexo = prompt("error. ingrese sexo valido ");

        }
    }



}
