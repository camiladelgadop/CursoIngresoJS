function sumar()
{
    var numeroUno;
    var numeroDos;
    var suma;

    numeroUno = txtIdNumeroUno.value;
    numeroDos = txtIdNumeroDos.value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    suma = numeroUno + numeroDos;

    alert ("la suma es" + suma );
}