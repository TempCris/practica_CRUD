export class Seinen {
    //atributos y su tipado
    nombre : string
    numCap : number
    genero: string 
    prota : string
    id : number 

    constructor(anime:string,caps:number,gen:string,prota:string,id:number){
        //aquie se le puede inicializar los valores del objeto 
    
        this.nombre = anime;
        this.numCap = caps;
        this.genero = gen;
        this.prota = prota;
        this.id = id;
    }
    
    //Atributos de la clase 
    setNombre(a:string):void {
        this.nombre = a;
    }
    getNombre():string{
        return this.nombre;
    }
    setCaps(a:number):void{
        this.numCap = a;
    }
    getCaps():number{
        return this.numCap;
    }
    setProta(a:string):void{
        this.prota = a;
    }
    getProta():string{
        return this.prota = this.prota;
    }
    setId(a:number):void{
        this.id = a;
    }
    getId():number{
        return this.id = this.id;
    }

}