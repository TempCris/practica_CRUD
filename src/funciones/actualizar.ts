//importacion de funciones, clases, etc
import { entrada } from "../index";
import { Seinen } from "../seinen";

export function actualizar(contArreglo:Seinen[],newObject:Seinen):void{
    //arreglo vacio para guardar datos 
   let objAct:Seinen [] = [];
   for (let i = 0; i <contArreglo.length; i++){
    //variable encargada de gusdarme el indice del arreglo en el cual esta iterando 
    let actualizacion:Seinen = contArreglo[i];
    //condicional
        if (newObject.id === contArreglo[i].id){
            actualizacion = newObject ;
        }
        objAct = [...objAct,actualizacion];
   }
   entrada(objAct);
}


