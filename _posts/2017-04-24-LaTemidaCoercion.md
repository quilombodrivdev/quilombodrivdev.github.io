---
layout: post
title:  "La temida coercion (en progreso)"
tag: javascript
lang: es
categories: #javascript
author: alancampora
image: http://cdn2us.denofgeek.com/sites/denofgeekus/files/2017/04/rick-and-morty-season-3-episode-1-review-the-rickshank-redemption.jpg
comments: true
---

*Coercion, buena ? mala ? Veamos como sacarle provecho a este controvercial tema*

## Conversion de valores
Como vimos en el articulo anterior, existen dos tipos de conversiones. Las las explicitas (coercion explicita / type casting), y las implicitas, que se realizan de manera automagica. Para no confundirnos, a estas ultimas las vamos a denominar como coercion.  

Manos a la obra, veamos la siguiente porcion de codigo: 

```javascript

var soyUnNumero = 10;

var coercion = soyUnNumero + ""; // resultado "10" 

var typeCasting = String( a ); // resultado "10" 

```

En el codigo anterior, vemos dos sentencias que tienen el mismo resultado pero que funcionan de manera distinta. Cuando el operador '+'  recibe un operando de tipo "string", siempre retorna un string como resultado. Aqui es donde ocurre la magia de la coercion, ya que el numero es convertido a string para que todo el resultado tambien tenga este tipo. Javascript se encarga de hacer esta conversion por nosotros. 

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

