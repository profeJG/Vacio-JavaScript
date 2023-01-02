/**
 * Simula la tirada de un dado de seis caras.
 * @returns entero entre 1 y 6.
 */
function tirarDado(n)
 {
     let vector=new Array(); // Creamos un vector para alamcenar el cálculo
     //let x=parseInt(prompt("Indique el número de elementos de la serie de Fibonacci: "));
     
    

     for (let i = 0; i < n; i++) {

        do{
        var suerte=Math.random()*10;
        var dado=Number.parseInt(suerte)+1;
        vector.push(dado);
    }while(dado<=0 || dado>10)
            
        //var newnum=vector[i-1]+vector[i-2];

        //vector.push(newnum);
         //vector[i-2]=vector[i-1];
         //vector[i-1]=vector[i];
    } 
     
    return vector; // Retorno de la función
//
    }//{
    //let vector=new Array()
    
    //return dado;    
//}
/**
 * Devuelve un número aleatorio entre min y max.
 * @param {*} min: Mínimo. 
 * @param {*} max: Máximo.
 * @returns n: Número aleatorio
 */
function obtenerNumeroSecreto(min,max)
{
    var suerte=0;
    var secreto=0;
    do{
        suerte=Math.random()*max;
        var secreto=Number.parseInt(suerte)+max;
    }while(secreto<min || secreto>max)
    return secreto;
}

var intentos=window.prompt('Introduce el número de intentos: ');
const salidaHTML=document.getElementById("salida");
let v=tirarDado(intentos); //invocacion a la funcion con el numero de x
salidaHTML.innerHTML=v;