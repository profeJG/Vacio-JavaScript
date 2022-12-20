/**
 * Calcula la media de los valores
 * @param {Array} v 
 * @returns media
 * @author: Autor/a
 */
function calcularMedia(v) // es equivalente a calcularmedia(notas, que es el array de las notas)
{

    if (v.length == 0){
        return 0
       } 
       else {
        // aplicamos reduce sobre v, pasandole acc como valor acomulado, y item que seria cada elemento del array i[0], i[1], etc
const res = v.reduce( (acc, item) => {
    //nos devuelve que el acomulado es el anterior mas elemento actual
return acc = acc + item;
} );
//al final del reduce devuelve el valor total con return acc, y hay que pasarle la formula para que saque la media ejecutando la funcion
//res y dividiendo por el numero de elementos del array v.lenght 
var avg = res / v.length
//la funcion devuelve la media
return avg



}
}


/**
 * Obtiene la nota mínima
 * @param {Array} v 
 * @returns minima
 */
function calcularMinimo(v) // es equivalente a calcularminimo(notas, que es el array de las notas)


// aplicamos reduce sobre v, pasandole acc como valor acomulado, y item que seria cada elemento del array i[0], i[1], etc
  {
if (v.length == 0){
    return 0
   } 
   else {const res = v.reduce( (acc, item) => {
//si el acomulado es mayor que el numero actual, hacemos que el acomulado pase a ser el numero pasado, si no permanece igual
if (acc>=item){
acc = item;
}
else{
    acc = acc
} 

//la funcion devuelve el resultado
return acc 
} );


//devolvemos el resultado de la funcion res
return res


}
  }
/**
 * Obtiene la nota Máxima
 * @param {Array} v 
 * @returns maxima
 */
function calcularMaximo(v) // es equivalente a calcularmaximo(notas, que es el array de las notas)
{
    if (v.length == 0){
        return 0
       } 
       else {
// aplicamos reduce sobre v, pasandole acc como valor acomulado, y item que seria cada elemento del array i[0], i[1], etc
//const acc = 10  
const res = v.reduce( (acc, item) => {
//si el acomulado es menor que el numero actual, hacemos que el acomulado pase a ser el numero pasado, si no permanece igual
if (acc<=item){
acc = item;
}
else{
    acc = acc
} 

//la funcion devuelve el resultado
return acc 
} );


//devolvemos el resultado de la funcion res
return res

}
}

/**
 * Cuenta el número de aprobados
 * @param {Array} v 
 * @returns aprobados: número de aprobados.
 */
function contarAprobados(v) // definimos funcion contar aprobados con los valores del array
{
   
// aplicamos la funcion filter, para que dentro del parametro v aplique otra funcion para crear un nuevo array con los valores que son mayor o igual a 5
    const aprobado = v.filter(nota => nota>=5);


//como valor a devolver de la funcion devolvemos la longitud del array de los que han obtenido al menos un 5
    return aprobado.length;
}
/**
 * Cuenta el número de suspensos
 * @param {Array} v 
 * @returns suspensos: número de suspensos.
 */
function contarSuspensos(v)
{
   
// aplicamos la funcion filter, la funcion nota originalmente tendria el array completo, y este va cambiando según los valores pasan o no 
// como resultado se obtiene un nuevo array con los valores que son menor que 5
    const aprobado = v.filter(nota => nota<5);


//como valor a devolver de la funcion devolvemos la longitud del array de los que han obtenido menos de 5
    return aprobado.length;
}



/**
 * Aplicacion principal Ejercicio14
 * @author: José Gaspar Sánchez García
 */

function appMain(){

    // Indique cuantas notas desea introducir
    let numeroNotas=parseInt(prompt("¿Cuantas notas desea introdurcir?"));
    let notas=new Array();
    var n=-1;
    // Leemos notas desde teclado
    console.info(`Leemos ${numeroNotas} Notas desde teclado.`)
    for(let i=0; i<numeroNotas;i++)
    {
        do{
            n=parseFloat(prompt("Introduzca la nota número "+(i+1)+": "));
        }while(n<0 || n>10)
        notas[i]=n;
        console.log(`notas[${i}]: ${notas[i]}`);
    }


    console.log("La nota media es "+calcularMedia(notas));
    console.log("La nota mínima es "+calcularMinimo(notas));
    console.log("La nota máxima es "+calcularMaximo(notas));
    console.log("Aprobados: "+contarAprobados(notas));
    console.log("Suspensos: "+contarSuspensos(notas));
    return 0;
}

// Exportamos las funciones para poder realizar el Testing
module.exports={
    calcularMedia,
    calcularMaximo,
    calcularMinimo,
    contarAprobados,
    contarSuspensos,
};