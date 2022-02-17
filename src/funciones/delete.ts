import { Seinen } from "src/seinen"
import { entrada } from "../index"

export function delAnime(contArreglo:Seinen[],id:number):void{
    //nuevo arreglo vacio
    let delAnimes:Seinen[]= [];
    for(let i = 0; i< contArreglo.length; i++){
        //Variable que va a guardar el indice del objeto que se esta recorriendo 
        let delAnime = contArreglo[i];
        //condicional 
        if(id != contArreglo[i].id){
            delAnimes = [...delAnimes,delAnime];
        }
    }
    entrada(delAnimes)
}