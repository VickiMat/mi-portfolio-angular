export class Educacion{
    id: number;
    nombre_titulo: String;
    descripcion: String;
    logo: String;
    instituto: String;
    certificado: String;
    inicio: String;
    fin: String;
    id_pers: number;

    constructor(id:number,nombre_titulo:String,descripcion:String,logo:String,instituto:String,certificado:String,inicio:String,fin:String,id_pers:number){
      this.id=id;
      this.nombre_titulo=nombre_titulo;
      this.descripcion=descripcion;
      this.logo=logo;
      this.instituto=instituto;
      this.certificado=certificado;
      this.inicio=inicio;
      this.fin=fin;
      this.id_pers=id_pers;
    }
}
