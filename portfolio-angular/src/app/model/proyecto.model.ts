export class Proyecto{
  id:number;
  nombre:String;
  img: String;
  año: number;
  descripcion: String;
  url: String;

  constructor(id:number,nombre:String,img:String,año:number,descripcion:String,url:String){
    this.id=id;
    this.nombre=nombre;
    this.img=img;
    this.año=año;
    this.descripcion=descripcion;
    this.url=url;
  }
}
