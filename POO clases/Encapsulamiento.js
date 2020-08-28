class Persona{
   constructor(nombre,apellido,apodo){
      this.nombre=nombre;
      this.apellido=apellido;
      this.apodo=apodo;
    

   }
   get encapsulamiento(){
      return this.apodo;

   }
   set encapsulamiento(datos){
      
      return this.nombre=datos;      
   }
}
const lol = new Persona("rojo");
console.log(lol.encapsulamiento);


//onsole.log(lol.encapsulamiento);
//const lol = new Book('anonymous');
/*console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer); */