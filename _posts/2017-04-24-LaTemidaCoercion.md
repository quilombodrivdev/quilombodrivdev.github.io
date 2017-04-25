---
layout: post
title:  "La temida coercion"
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
* Ahora se pone un poco mas complicado. Siendo n, k y s enteros, tal que 
    ** k ≥ 1, 10k−1 ≤ s < 10k
    ** y nuestro numero igual s × 10n−k 
Otherwise, let n, k, and s be integers such that k ≥ 1, 10k−1 ≤ s < 10k, the Number value for s × 10n−k is m, and k is as small as possible. Note that k is the number of digits in the decimal representation of s, that s is not divisible by 10, and that the least significant digit of s is not necessarily uniquely determined by these criteria.
If k ≤ n ≤ 21, return the String consisting of the code units of the k digits of the decimal representation of s (in order, with no leading zeroes), followed by n−k occurrences of the code unit 0x0030 (DIGIT ZERO).
If 0 < n ≤ 21, return the String consisting of the code units of the most significant n digits of the decimal representation of s, followed by the code unit 0x002E (FULL STOP), followed by the code units of the remaining k−n digits of the decimal representation of s.
If −6 < n ≤ 0, return the String consisting of the code unit 0x0030 (DIGIT ZERO), followed by the code unit 0x002E (FULL STOP), followed by −n occurrences of the code unit 0x0030 (DIGIT ZERO), followed by the code units of the k digits of the decimal representation of s.
Otherwise, if k = 1, return the String consisting of the code unit of the single digit of s, followed by code unit 0x0065 (LATIN SMALL LETTER E), followed by the code unit 0x002B (PLUS SIGN) or the code unit 0x002D (HYPHEN-MINUS) according to whether n−1 is positive or negative, followed by the code units of the decimal representation of the integer abs(n−1) (with no leading zeroes).
Return the String consisting of the code units of the most significant digit of the decimal representation of s, followed by code unit 0x002E (FULL STOP), followed by the code units of the remaining k−1 digits of the decimal representation of s, followed by code unit 0x0065 (LATIN SMALL LETTER E), followed by code unit 0x002B (PLUS SIGN) or the code unit 0x002D (HYPHEN-MINUS) according to whether n−1 is positive or negative, followed by the code units of the decimal representation of the integer abs(n−1) (with no leading zeroes).
