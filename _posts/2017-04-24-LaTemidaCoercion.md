---
layout: post
title:  "La temida coercion (en progreso)"
tag: javascript
lang: es
categories: #javascript
author: alancampora
image: /assets/posts/latemidacoercion.jpg
comments: true
---

*Que es la coercion?! Desmitifiquemos este controversial tema, entendiendo como funciona.* 

## Conversion de valores
Como vimos en el post anterior [El extrano mundo de los tipos]({% post_url 2017-03-25-ElExtranoMundoDeLosTiposEnJS %}), coercion implica una transformacion del tipo del valor que contiene una variable. Existen dos tipos de conversiones: las explicitas, que se llevan a cabo cuando en nuestro codigo manifestamos la intencion de convertir el valor a otro tipo, y la implicitas, que son llevadas a cabo por el compilador, nosotros no tenemos inferencia en la misma. Para ser bien claros y a estas conversiones las denominaremos **coercion explicita** y **coercion implicita**. 

Manos a la obra, veamos el siguiente ejemplo.  

```javascript

var soyUnNumero = 10;

var coercionImplicita = soyUnNumero + ""; // resultado "10" 

var coercionExplicita = String( a ); // resultado "10" 

```

En el codigo anterior, vemos dos sentencias que tienen el mismo resultado pero que funcionan de manera distinta. Cuando el operador '+'  recibe un operando de tipo "string", siempre retorna un string como resultado. Aqui es donde ocurre la magia de la coercion implicita, ya que el numero es convertido a string para que todo el resultado tambien tenga este tipo. Javascript se encarga de hacer esta conversion por nosotros. 

Como vemos, para saber bien que es lo que sucede con nuestro codigo, no tenemos otra alternativa mas que aprender cuales son las reglas de la coercion para los distintos tipos y operadores.  

## Conversiones internas sobre valores

### ToString
Cuando un valor no string es utilizado como si lo fuera, internamente el interprete de js llamara a la funcion `ToString`. Los valores que contengan tipos primitivos, seran convertidos a string sin muchas variaciones: 

* `null` sera "null"
* `undefined` sera "undefined" 
* `true`/`false` seran "true" "false" respectivamente.

```javascript

    var variableSinValor; 
    variableSinValor + "-soyUnString"
    "undefined-soyUnString"

    var variableNull = null;
    variableNull + "-soyUnString"
    "null-soyUnString"
    
    var variableBoolean = true;
    variableBoolean + "-soyUnString"
    "true-soyUnString"

```
En el caso de los numeros es un poco mas complicado: 

* NaN, retorna el String "NaN".
* +0 o -0, retornan el String "0".
* Si el numero es negativo, retornara la concatenacion entre el String "-" y el ToString(-numero).
* Si el numero es +∞, retornara el String "Infinity".

