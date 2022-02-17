
import { actualizar } from "./funciones/actualizar";
import { add } from "./funciones/add";
import { readAll } from "./funciones/readAll";
import { Seinen } from "./seinen";
//import {read } from "./funciones/read"
//import { actualizar } from "./funciones/actualizar";
import { delAnime } from "./funciones/delete";

//import { readAll } from "./funciones/readAll";



let contArreglo:Seinen[]=[];

export function entrada(newList:Seinen[]):void {
  contArreglo = newList;
}

function main() {
  console.log('---------- Cool Programing ----------\n');
  
  let anime1 =new Seinen('Naruto',179,'shonen','Naruto',10);
  let anime2 =new Seinen('Cowboy',23,'seinen','Spike',11);
  let anime3 =new Seinen('Berserk',25,'seinen','Guts',11);
  //let anime4 = new Seinen('Berserk',666,'estoy','vacio',10);
  //let anime5 = new Seinen('holo2',666,'estoy','vacio',13);
  //actualizar(contArreglo,)
  
  add(contArreglo,anime1);
  add(contArreglo,anime2);
  actualizar(contArreglo,anime3);
  readAll(contArreglo);
  delAnime(contArreglo,11);
  readAll(contArreglo);
  

}

main();
