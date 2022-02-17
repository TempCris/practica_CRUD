import { Seinen } from "../seinen";

export function read(contArreglo:Seinen[],id:number):void{
    //se recorre el arrglo 
    for (let i = 0; i < contArreglo.length; i++){
        //variable que va a guardar el objeto
        let busqueda = contArreglo[i];
        //condicional 
        if (id === contArreglo[i].id){
            console.log(busqueda);
        }
    }
}  
