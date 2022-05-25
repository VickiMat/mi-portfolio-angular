export class Persona{
  id: number;
  nombre: String;
  apellido: String;
  titulo: String;
  descripcion: String;
  img: String;

  constructor(id:number, nombre:String,apellido:String,titulo:String,descripcion:String,img:String){
    this.id=id;
    this.nombre=nombre;
    this.apellido=apellido;
    this.titulo=titulo;
    this.descripcion=descripcion;
    this.img=img;
  }
}
