---
layout: post
title:  "El extra\u00F1o mundo de los tipos en Javascript"
tag: javascript
categories: #javascript
---

*Si vamos a empezar, que sea desde las bases. Por esto, es hora de que entender el manejo de tipos en Javascript. Desde hace algunos meses, librerias como Typescript y Flow estan tomando mucho protagonismo. Algunos estan a favor, otros en contra, pero antes de juzgar estas librerias, entendamos algunos conceptos basicos sobre los tipos que maneja Javascript*

## Lenguajes fuertemente tipado vs lenguajes debilmente tipados
En un lenguaje fuertemente tipado, las variables tienen un tipo concreto y no podran recibir un valor de otro tipo, o hacer operaciones con otros tipos, a menos que se haga una conversion en las mismas (typecasting).

**ejemplo en c**
```c
    int superIntVariable = 15; 
    superIntVariable + "12" //error!
```
En cambio, en los debiles, como javascript, las variables pueden recibir distinto tipos de valores y hacer operaciones entre distintos tipos, hola libertinaje! 

**ejemplo en js** 
```javascript
    superIntVariable = 15; 
    superIntVariable + "12" // "1512" Trato de hacer lo mejor que puedo ;)
```
En este caso, javascript convierte el 15 en string y se lo concatena al 12, ya que para los strings sumar es igual a concatenar. 

## Tipos en javascript
Como veiamos anteriormente debido a su naturaleza debilmente tipada, cuando programamos en javascript, pareciera que los tipos no existen. Pero no nos dejemos enga\u00F1ar, aunque no los veamos los tipos siempre estan. 

ECMAScript define los siguientes tipos: 

* Undefined
* Null 
* Boolean 
* Number
* String
* Object 
* Symbol definido por ECMAScript6 (aprenderemos esto en algun momento, ahora no tengo idea que es =) )

Como podemos comprobarlos rapidamente? Abramos la consola de chrome y utilicemos el operador *typeof*

```javascript
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

    typeof null
    "object"
```
