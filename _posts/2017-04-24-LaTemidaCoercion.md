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

*Que es la coercion?! Desmitifiquemos este controversial tema, entendiendo como funciona.* 

## Introduccion
Como vimos en el post anterior [El extrano mundo de los tipos]({% post_url 2017-03-25-ElExtranoMundoDeLosTiposEnJS %}), coercion implica una transformacion del tipo del valor que contiene una variable. Existen dos tipos de conversiones: las explicitas, que se llevan a cabo cuando en nuestro codigo manifestamos la intencion de convertir el valor a otro tipo, y la implicitas, que son llevadas a cabo por el compilador, nosotros no tenemos inferencia en la misma. A estas conversiones las denominaremos **coercion explicita** y **coercion implicita**. 

Manos a la obra! Veamos como funciona la coercion el siguiente ejemplo:  

```javascript

var soyUnNumero = 10;

var coercionImplicita = soyUnNumero + ""; // resultado "10" 

var coercionExplicita = String( a ); // resultado "10" 

```

En el codigo anterior, vemos dos sentencias que tienen el mismo resultado pero que funcionan de manera distinta. Cuando el operador '+'  recibe un operando de tipo "string", siempre retorna un string como resultado. Aqui es donde ocurre la magia de la coercion implicita, ya que el numero es convertido a `String` para que todo el resultado tambien tenga este tipo.

Nos podriamos poner un poco filosoficos, y determinar que si realmente sabemos como funciona la coercion, esa sentencia implicita en realidad es explicita. No vamos a entrar en dicha discusion, y queda a criterio de cada persona.  

Queda claro que para entender lo que sucede con la coercion implicita, no tenemos otra alternativa mas que aprender cuales son las reglas de conversion para los distintos tipos y operadores.  

## Conversiones importantes

### ToString
Cuando un valor no string es utilizado como si lo fuera, internamente el interprete de javascript llamara a la funcion `ToString`. Los valores que contengan tipos primitivos, seran convertidos a `String` sin muchas complicaciones: 

* `null` sera "null"
* `undefined` sera "undefined" 
* `true` y `false`,  seran "true" "false" respectivamente.

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
En el caso de los numeros, en la mayoria de los casos la conversion tambien es la que esperariamos: 

* NaN, retorna el String "NaN".
* +0 o -0, retornan el String "0".
* Si el numero es negativo, retornara la concatenacion entre el String "-" y el ToString(-numero).
* Si el numero es +∞, retornara el String "Infinity".
* Numeros muy grandes o muy chicos, retornaran su valor en notacion cientifica 

```javascript

    (0).toString(); 
    "0"
    
    (-0).toString();
    "-0"

    NaN.toString();
    "NaN"

    (-20).toString();
    "-20"

    (1/0).toString();
    "Inifinity"

    (1000000000000000000000).toString();
    "1e+21"

    (0.0000001).toString();
    "1e-7"

```










