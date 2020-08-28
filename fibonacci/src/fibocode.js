let  calculoFibo = (req,res) =>    {

                                      
   var primerElemento = parseInt(req.body.valor1);
   var segundoElemento = parseInt (req.body.valor2);
   var maximoValorSerie = parseInt (req.body.valormax);                                                                                    
   
   var resultado = {
       sumaPares : 0,
       listaPares : [],
       listaTodos : [],
   }
   
   
   var esPar = function(numero){
       if (numero%2 === 0) {
           return true
       } else {
           return false;
       }
   }
   
   var generadorFibonacci = function(anterior,ultimo){
       if (anterior + ultimo > maximoValorSerie) {
           return resultado;
       } else {
           nuevo = anterior + ultimo;
           if(esPar(nuevo)){
               resultado.sumaPares += nuevo;
               resultado.listaPares.push(nuevo);  //inserta en el array de pares
           }
           resultado.listaTodos.push(nuevo);  //inserta en el array de todos los elementos
           return generadorFibonacci(ultimo,nuevo);
       }
   }
   var pares = function() { 
           if(esPar(primerElemento)){
               resultado.listaPares.push(primerElemento);
           }
           
           if(esPar(segundoElemento)){
               resultado.listaPares.push(segundoElemento);
           }
           console.log(generadorFibonacci(primerElemento,segundoElemento).sumaPares);
       }
   
   console.log(generadorFibonacci(primerElemento,segundoElemento));
   console.log(esPar(segundoElemento));
   console.log(pares());
   res.send(resultado);
   }
   
   module.exports = {
       calculoFibo,
   }