class Libro{
   constructor(nombre,autor,año){
      this.nombre=nombre;
      this.autor=autor;
      this.año=año;

   }
   mostrar_info(){
      return `nombre:${this.nombre} 
      autor:${this.autor} 
      año:${this.año} 
      `;
   }
   mostrarsaludo(){
      return "hola,como estas";
   }
   mostrar_opinion(){
      return `El libro  ${this.nombre}  es recomendado`;
      
   }
   mostrar_opinion(){
      let mensaje;
      return mensaje = `El libro  ${this.nombre} no es recomendado`;
   }
} 
const libro1 = new Libro("Sangre de campeon","Carlos","2005");
console.log(libro1.mostrar_info());
console.log(libro1.mostrarsaludo());
console.log(libro1.mostrar_opinion());


class Reseña extends Libro{
   constructor(nombre,autor,año,genero){
      super(nombre,autor,año);
      this.genero=genero;
   }
   mostrar_info(){
      return `nombre:${this.nombre},
      autor:${this.autor}
      año:${this.año}
      genero:${this.genero}`;
   }

}
const libro2 = new Reseña("El perfume","Patrick","1998","Crimen");
console.log(libro2.mostrar_info());
console.log(libro2.mostrarsaludo());
console.log(libro2.mostrar_opinion());
const libro3 = new Reseña("El crimen en el lago","Qiu","2014","crimen");
console.log(libro3.mostrar_info());
console.log(libro3.mostrarsaludo());
console.log(libro3.mostrar_opinion());
const libro4 = new Reseña("Quien se ha llevado mi queso","Spencer","2008","Crecimiento personal"); 
console.log(libro4.mostrar_info());
console.log(libro4.mostrarsaludo());
console.log(libro4.mostrar_opinion());
