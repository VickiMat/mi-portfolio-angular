export class Experiencia{
  id:number;
  posicion:String;
  compania:String;
  url_img:String;
  modo:String;
  inicio:String;
  fin:String;
  lugar:String;
  descripcion:String;

  constructor(id:number,posicion:String,compania:String,url_img:String,modo:String,inicio:String,fin:String,
    lugar:String,descripcion:String){
  this.id = id;
  this.posicion = posicion;
  this.compania = compania;
  this.url_img = url_img;
  this.modo = modo;
  this.inicio = inicio;
  this.fin = fin;
  this.lugar = lugar;
  this.descripcion = descripcion;
    }
}
