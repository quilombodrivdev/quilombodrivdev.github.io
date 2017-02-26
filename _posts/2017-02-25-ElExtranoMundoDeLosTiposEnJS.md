---
layout: post
title:  "El extra\u00F1o mundo de los tipos en javascript (draft)"
tag: javascript
lang: es
i18n-link: translated-post
categories: #javascript
---

*Si vamos a empezar, que sea desde las bases. Por esto, es hora de que entender el manejo de tipos en Javascript. Desde hace algunos meses, librerias como Typescript y Flow estan tomando mucho protagonismo. Algunos estan a favor, otros en contra, pero antes de juzgar estas librerias, entendamos algunos conceptos basicos sobre los tipos que maneja js*

## Lenguajes fuertemente tipado vs lenguajes debilmente tipados
En un lenguaje fuertemente tipado, las variables tienen un tipo concreto y no podran recibir un valor de otro tipo, o hacer operaciones con otros tipos, a menos que se haga una conversion en las mismas (typecasting).

**ejemplo en c**
```c
    int superIntVariable = 15; 
    superIntVariable + "12" //error!
```
En cambio, en los debiles como javascript, las variables no poseen tipos, sino que los que los poseen son los valores que reciben las variables. 

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

    typeof function soyUnaFuncion(){}
    "function"
```
## Curiosidades
### Typeof bug!
Si en el snippet anterior, algo les parecio raro, pues estan en lo correcto! `typeof null` devuelve `object` ! Este es un bug conocido en js, que no sera solucionado para matener la compatiblidad (backwards compatibily). En un futuro post, vamos a investigar mas en detalle la razon por la cual typeof null devuelve object. 

### Funciones
En la ultima sentencia ejecutada, vemos que el typeof de una funcion, es una funcion. Pero como es esto posible, si el tipo function no existe por en la definicion de ECMAScript?. Esto ocurre, porque function es un subtipo de object. Si leemos la spec de ECMACScript, observaremos que define a las functiones como objetos llamables (callable objects). 

### Undefined y Undeclared
Otro punto curioso, es que `typeof soyUnaVaribleNoDeclarada` retorna `undefined`. Veamos el siguiente codigo -  

```javascript
var variableDeclarada;
typeof variableDeclarada
"undefined"
``` 
```javascript
typeof variableNoDeclarada
"undefined"
variableNoDeclarada
Uncaught ReferenceError: variableNoDeclarada is not defined
    at <anonymous>:1:1
``` 

El punto anterior, variableDeclarada devuelve undefined. Pero lo mismo sucede con variableNoDeclarada, aunque javascript trata esto de distinta manera. 

El error mostrado por el browser, nos hace confundir aun mas! VariableNoDeclara is not defined, no es lo mismo que undefined. Lo que nos quiere decir el error es que la variable no ha sido declarada por esto no puede ser usada. Para evitar confusiones, los browsers podrian mejorar el error con algo como  
`Uncaught ReferenceError: variableNoDeclarada is not declared!`
