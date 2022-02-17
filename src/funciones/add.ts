
import { Seinen } from '../seinen';
import { entrada } from '../index';

export function add(contArreglo:Seinen[],newObj:Seinen):void{

    let objAct:Seinen[] =[];

    if (contArreglo.length > 0){
    
        for (let i = 0; i < contArreglo.length; i++){
            
            const condicional = newObj.id === contArreglo[i].id    

            if(condicional){
                return console.log(newObj.id + ' id ya existente');
            }else{
                objAct = [...contArreglo,newObj];
            }
        }
    }else{
        objAct = [...contArreglo,newObj];
    }
    entrada(objAct);
}
    