export class Proyecto{
  id:number;
  nombre:String;
  img: String;
  anio: number;
  descripcion: String;
  url: String;

  constructor(id:number,nombre:String,img:String,anio:number,descripcion:String,url:String){
    this.id=id;
    this.nombre=nombre;
    this.img=img;
    this.anio=anio;
    this.descripcion=descripcion;
    this.url=url;
  }
}
