---
layout: post
title:  "El extra\u00F1o mundo de los tipos en javascript (draft)"
tag: javascript
lang: es
i18n-link: translated-post
categories: #javascript
---

*Si vamos a empezar, que sea desde las bases. Por esto, es hora de que entender el manejo de tipos en Javascript. Desde hace algunos meses, librerías como Typescript y Flow están tomando mucho protagonismo. Algunos estan a favor, otros en contra, pero antes de juzgar estas libs, entendamos algunos conceptos basicos sobre los tipos que maneja js*

## Lenguajes fuertemente tipado vs lenguajes debilmente tipados
En un lenguaje fuertemente tipado, las variables tienen un tipo concreto. Es por esto que no podrán contener un valor de otro tipo, o hacer operaciones con otros tipos, a menos que se haga una conversion **explicita** en las mismas (typecasting).

**ejemplo en c**
```c
    int superIntVariable = 15; 
    superIntVariable = "12" //error!
```
En cambio, en los debiles como javascript, las variables no poseen tipos, sino que los que los poseen son los valores que reciben las variables. 

**ejemplo en js** 
```javascript
    superIntVariable = 15; 
    superIntVariable = "12" // not an error! 
```

En el ultimo ejemplo, no hay ningun error! Ahora superIntVariable contiene un valor de tipo string.

## Tipos en javascript
Como veiamos anteriormente debido a su naturaleza debilmente tipada, cuando programamos en javascript pareciera que los tipos no existen. Pero no nos dejemos engañar, aunque no los veamos los tipos siempre estan. 

ECMAScript define los siguientes tipos: 

* Undefined
* Null 
* Boolean 
* Number
* String
* Object 
* Symbol definido por ECMAScript6 (aprenderemos esto en algun momento, ahora no tengo idea que es =) )

Como podemos comprobar esto rapidamente? 
Abramos la consola de chrome y utilicemos el operador *typeof* 

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

### typeof values
Javascript no fuerza a las variables a contener valores de los mismos tipos. Esto sucede porque las variables no tienen tipos, sino que las que los contienen son los valores. Cuando le asignamos un nuevo valor a una variable, no estamos cambiando el estado en la memoria, sino que nuestra variable apunta a un nuevo valor. 

### typeof null bug
Si algo les parecio raro en el snippet anterior, pues estan en lo correcto! `typeof null` devuelve `object` ! Este es un bug conocido en js, que no sera solucionado para matener la compatiblidad (backwards compatibily). En un futuro post, vamos a investigar mas en detalle la razon por la cual typeof null devuelve object. 

### funciones
En la ultima sentencia ejecutada, vemos que el typeof de una funcion, es **function**. Pero como es esto posible, si el tipo function no existe en la spec?. Esto ocurre, porque function es un subtipo de object. Si leemos la spec de ECMACScript, observaremos que define a las functiones como **objetos llamables (callable objects)**. [ecmascript5.1-spec](http://www.ecma-international.org/ecma-262/5.1/#sec-4.2)

### undefined y undeclared
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

En el punto anterior, variableDeclarada retorna undefined. Pero lo mismo sucede con variableNoDeclarada, aunque javascript trata esto de distinta manera. 

El error mostrado por el browser, nos hace confundir aun mas! VariableNoDeclara is not defined, no es lo mismo que undefined. Lo que nos quiere decir el error es que la variable no ha sido declarada por esto no puede ser usada. Para evitar confusiones, los browsers podrian mejorar el error con algo como:

```javascript 
Uncaught ReferenceError: 
    variableNoDeclarada is not declared
```

