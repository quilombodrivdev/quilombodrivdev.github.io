---
layout: post
title:  "El extraño mundo de los tipos en javascript (draft)"
tag: javascript
lang: es
categories: #javascript
---

*Desde hace algunos meses, librerías como Typescript y Flow están tomando mucho protagonismo en la escena de javascript. Algunos están a favor, otros en contra, pero antes de juzgar estas libs, entendamos algunos conceptos basicos sobre el manejo de tipos en javascript*

## Lenguajes fuertemente tipados vs lenguajes debilmente tipados
En un lenguaje **fuertemente tipado**, las variables tienen un tipo concreto. Es por esto que no podrán contener un valor de otro tipo, o hacer operaciones con otros tipos a menos que se haga una conversión **explicíta** en las mismas (typecasting).

**ejemplo en c**
```c
    int superIntVariable = 15; 
    superIntVariable = "12" //error!
```
En cambio, en los lenguajes **debilmente tipados** como javascript, las variables no poseen tipos, y las operaciones entre distinto tipo de valores genera una conversion implicita (en js recibe el nombre de **coercion**). También, suelen recibir el nombre de **no-tipados** pero vemos a esta denomiación desacertada, ya que como vamos a ver más adelante, los tipos están aunque no los declaremos.

**ejemplo en js** 
```javascript
    superIntVariable = 15; 
    superIntVariable = "12" // not an error! 
```

En el último ejemplo, no hay ningun error! Ahora `superIntVariable` contiene un valor de tipo string. 

## Tipos primitivos en javascript
Como veiamos anteriormente debido a su naturaleza debilmente tipada, cuando programamos en javascript pareciera que los tipos no existen. Pero no nos dejemos engañar, aunque no los veamos los tipos siempre están. Las variables no tienen tipo, sino que los que los poseen son los valores que reciben las variables. 

[ECMAScript6](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-overview) define los siguientes tipos "Built-in types": 

* undefined
* null 
* boolean 
* number
* string
* object 
* symbol - nuevo en  ECMAScript6

Cuando operamos con un valor javascript se encarga, implicitamente, de darle el tipo correspondiente. Cómo podemos comprobar esto rapidamente? Abramos la consola de chrome y utilicemos el operador **(typeof)[https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/typeof]** 

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
Javascript no fuerza a que una variable contenga siempre valores del mismo tipo. Esto sucede porque los valores son los que contienen los tipos, no así las variables. Cuando le asignamos un nuevo valor a una variable, no estamos cambiando el estado en la memoria, sino que nuestra variable ahora apunta a un nuevo valor. 

### typeof null bug
Si algo les pareció raro en el snippet anterior, pues están en lo correcto! `typeof null` retorna `object` ! Este es un bug conocido en javascript, que no será solucionado para matener la compatiblidad (backwards compatibily). En un futuro post, vamos a investigar en detalle la razón por la cual typeof null devuelve object. 

### funciones
En la última sentencia ejecutada, vemos que el typeof de una función, es **function**. Pero cómo es esto posible si el tipo **function** no existe en la spec?. Esto ocurre, porque function es un subtipo de object. Si leemos la spec de ECMACScript, observaremos que define a las functiones como **objetos llamables (callable objects)**. [ECMAScript6](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-overview)

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

En el punto anterior, `variableDeclarada` retorna undefined. Pero lo mismo sucede con `variableNoDeclarada`, aunque **semanticamente** representan estados distintos.

El error mostrado por el browser, nos hace confundir aun más! `variableNoDeclara is not defined`, suena a undefined, pero no es lo mismo. Lo que nos quiere decir el error es que la variable no ha sido declarada por esto no puede ser usada. Para evitar confusiones, los browsers podrían mejorar el error con algo más adecuado

```javascript 
Uncaught ReferenceError: 
    variableNoDeclarada is not declared
```

## Conclusiones
Cuando programamos en lenguajes debilmente tipados, no declaramos explicitamente los tipos. Javascript se encarga del manejo de los tipos  de manera automatica. 

Los tipos primitivos son object, boolean, string, number, null, undefined y symbol; y lo pudimos comprobar rapidamente utilizando typeof. Este operador es muy útil pero hay que tener cuidado a la hora de usarlo con null, funciones y variables no declaradas. 

En los próximos posts vamos a estar profundizando más como js infiere los tipos, coerción y etc! Dejen sus comentarios abajo si tienen dudas , o si les gustaría aportar algo de información al post :bomb: !
