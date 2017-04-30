---
layout: post
title:  "La temida coercion (en progreso)"
tag: javascript
lang: es
categories: #javascript
author: alancampora
image: http://static6.uk.businessinsider.com/image/55b50862dd08950f4e8b4574-1190-625/why-you-should-watch-rick-and-morty-adult-swims-brilliant-twist-on-all-things-sci-fi.jpg
comments: true
---

*Que es la coercion?! Nos ayuda o nos perjudica ?* 

## Conversion de valores
Como vimos en el articulo anterior, coercion implica una transformacion del tipo del valor que contiene una variable. Existen dos tipos de conversiones: las explicitas, que se llevan a cabo cuando en nuestro codigo manifestamos la intencion de convertir el valor a otro tipo, y la implicitas, que son llevadas a cabo por el compilador, nosotros no tenemos inferencia en la misma. Para ser bien claros y a estas conversiones las denominaremos **coercion explicita** y **coercion implicita**. 

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
Cuando un valor no string es convertido a string, internamente se llamara a la function ToString.

Las values que contenga tipos primitivos, seran convertidos a string sin muchas variaciones: null sera "null", undefined sera "undefined" y true/false seran "true" "false" respectivamente.

En el caso de los numeros es un poco mas complicado: 

* NaN, retorna el String "NaN".
* +0 o -0, retornan el String "0".
* Si el numero es negativo, retornara la concatenacion entre el String "-" y el ToString(-numero).
* Si el numero es +∞, retornara el String "Infinity".

