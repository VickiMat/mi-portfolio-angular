export class Persona{
  id?: number;
  nombre: String;
  apellido: String;
  titulo: String;
  descripcion: String;
  img: String;

  constructor(){
    this.id=undefined;
    this.nombre='';
    this.apellido='';
    this.titulo='';
    this.descripcion='';
    this.img='';
  }
}
