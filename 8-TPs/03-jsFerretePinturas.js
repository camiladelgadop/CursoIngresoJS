/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var tamparatura;
    var tempEnGradosCentigrados;
    
    temparatura = txtIdTemperatura.value; 
    temparatura = parseInt(temparatura);

    tempEnGradosCentigrados = 5/9 * ( temparatura - 32);

    alert( tamparatura + " farenheit son " + tempEnGradosCentigrados + " centigrados ");

}

function CentigradosFahrenheit () 
{
    var tamparatura;
    var tempEnGradosF;
    
    temparatura = txtIdTemperatura.value; 
    temparatura = parseInt(temparatura);

    tempEnGradosF = 9/5 * temparatura + 32;

    alert ( temparatura + " centigrados son " + tempEnGradosF + " farhreheit ");
}
