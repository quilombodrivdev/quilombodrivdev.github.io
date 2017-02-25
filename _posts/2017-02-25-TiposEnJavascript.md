---
layout: post
title:  "El extrano mundo de los tipos en Javascript"
categories: #javascript
---

*Si vamos a empezar, que sea desde las bases. Por esto, es hora de que entendamos como nuestro amado Javascript maneja sus tipos. Desde hace algunos meses, librerias como Typescript y Flow estan tomando mucho protagonismo. Algunos las odian, otros las aman, pero antes de meternos con esas libs, lo ideal seria entender como se manejan los tipos en JS.*

### Lenguajes fuertemente tipado vs lenguajes debilmente tipados
Primero, tenemos que tener en claro la diferencia entre estos tipos de lenguajes. En un lenguaje fuertemente tipado, las variables tienen un tipo concreto y no podran recibir un valor de otro tipo, o hacer operaciones con otros tipos, a menos que se haga una conversion en las mismas (typecasting).

**ejemplo en c**

    int superIntVariable = 15; 
    superIntVariable + "12" //error!

En cambio, en los debiles, como lo es javascript, las variables pueden recibir distinto tipos de valores  y hacer operaciones entre distintos tipos, hola libertinaje! 

**ejemplo en js <3** 

    superIntVariable = 15; 
    superIntVariable + "12" // "1512" Trato de hacer lo mejor que puedo ;)

En este caso, js convierte el 15 en string y se lo concatena al 12, ya que para los strings sumar es igual a concatenar. 

### Tipos en JS
Como veiamos anteriormente debido a su naturaleza debilmente tipada, cuando programamos en JS, pareciera que los tipos no existen. Pero no nos dejemos enganar, aunque no los veamos los tipos siempre estan. 

Javascript define los siguientes tipos: 

* Undefined
* Null 
* Boolean 
* Number
* String
* Object 
* Symbol definido por ECMAScript6 (aprenderemos esto en algun momento, ahora no tengo idea que es =) )

Como podemos comprobar rapidamente los tipos? Abramos la consola de chrome y utilicemos el operador *typeof*

    typeof 15
    "number"

    typeof "super string"
    "string"

    typeof true
    "boolean"
    
    typeof soyUnaVariableNoDeclarada
    "undefined"
    
    typeof {}
    "object" 
