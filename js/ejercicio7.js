
/**
 * Implementa la serie de Fibonacci
 * @param {*} n: número de elementos de la serie.
 * @returns vector con la serie de Fibonacci.
 * @author: Sustituye tu nombre y apellidos aquí
 */
 

function fibonacci(n)
 {
     
    if(n.length==0){
        let vector=new Array();
        return vector;
    }
    else if(n.length==1){
        let vector=new Array();
        vector[0]=1;
        return vector
    }    
    else{
    
    let vector=new Array(); // Creamos un vector para alamcenar el cálculo
     //let x=parseInt(prompt("Indique el número de elementos de la serie de Fibonacci: "));
     
     vector[0]=1
     vector[1]=1
     

     for (let i = 2; i < n; i++) {
            
        var newnum=vector[i-1]+vector[i-2];

        vector.push(newnum);
         //vector[i-2]=vector[i-1];
         //vector[i-1]=vector[i];
    } 
     
    return vector; // Retorno de la función
//
    }
}

 function appMain()
 {
     const salidaHTML=document.getElementById("salida");
     let x=parseInt(prompt("Indique el número de elementos de la serie de Fibonacci: "));
     let v=fibonacci(x); //invocacion a la funcion con el numero de x
     //let vector=new Array()
     
         
      
 
     console.log(`Fibonacci(${x}) = [ ${v} ]`);
     // alert("Fibonacci: "+v);
     salidaHTML.innerHTML="Fibonacci("+x+") = ["+v+"].";
 }
 
 /**
  * Aplicación principal Ejercicio 7
  * @author: José Gaspar Sánchez García
  */

 
 // Exportamos la funcion fibonacci para poder realizar el Testing
 module.exports={
     fibonacci
 }