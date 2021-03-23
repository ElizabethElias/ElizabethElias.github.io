"use strict";
  function raiz(){
          var valor = document.getElementById('num').value;
          var res = 0.0;
          try{
              if(valor < 0 ){
                  throw "Ingreso numero negativo"
              }
              res = res + Math.sqrt(valor);
              document.getElementById("resultado").innerHTML= "raíz de: " + valor + " es igual a: " + res;
          }catch(e){
              alert ("Error, Error. " + e);
          }
      }

