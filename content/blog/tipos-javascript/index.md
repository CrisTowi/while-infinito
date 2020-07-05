---
title: ¡Tipos de datos en Javascript!
date: "2019-07-19T12:00:00.000Z"
description: "¿Cuáles son los diferentes tipos de datos en Javascript como lenguaje de programación y para qué se utilizan?."
---

Javascript es un lenguaje con tipado dinámico. Hecho que a menudo la gente suele tomar como una caracteristica que lo hace un lenguaje poco confiable de utilizar.

Al decir esto nos referimos a que no hay necesidad de definir el tipo de nuestra variable cuando la estámos creando, a diferencia de otros lenguajes de programación.

En javascript, tenemos diferentes tipos de datos:

**Number:** Utilizado para definir números. Los números en Javascript pueden ser número enteros o decimales.
```javascript
let x = 10
```

**Strings:** Para definir cadenas de texto o también dicho como arreglos de caracteres. Un arreglo es una colección de direcciones de memoria que almacenan un valor de forma ordenada. Para escribir una palabra se necesitan letras y cada letra necesita un lugar donde almacenarse.

```javascript
let x = "Hola mundo"

// X es un valor en memoria que almacena la dirección en memoria del conjunto de caracteres.

console.log(x[0]) // H
console.log(x[1]) // o
console.log(x[2]) // l
console.log(x[3]) // a


```

**Booleans:** [Según el álgebra de Boole](https://es.wikipedia.org/wiki/%C3%81lgebra_de_Boole). es la estructura matemática que esquematiza las operaciones lógicas y que tiene solo 2 variables ("1 y 0", "Encendido y Apagado", "Verdadero o Falso"). Son especialmente útiles para las estructuras condicionales e iterativas. O sea cuando queremos poner algo más de lógica en nuestros programas.

```javascript
let x = false

if (x) {
    // Si x fuera verdadero todo el código que está dentro de este bloque se ejecutaría
}

let y = true

while (y) {
    // Mientras y sea verdadero todo el código de estre bloque se ejecutará. Si no tienes cuidado y nunca cambias el valor de y, en este caso vas a tener un "While Infinito" que nunca se va a detener.
}
```

**Undefined:** Es el valor predeterminado de que almacena una variable si no se le asigna valor alguno. Es decir que de cierta forma significa que esta variable no tiene valor.

```javascript
let x // Como no se usó el operador "=" cuando se declaró esta variable, la variable no tiene nada "Undefined"

if (x) {
    // Como x no tiene valor, es considerado Falso, o "valor falsy" lo que significa que no expliitamente es falso, pero que se considera falso en las estructuras iterativas y condicionales gracias a una característica de Javascript llamada "Coercion"
}

```

**Null:** Igual que `Undefined` significa que la variable está vacía, pero en este caso es por decisión de la desarrolladora o desarrollador. Es probable que quieras que la variable esté vacía por alguna razón, y para hacer esto es mucho mejor práctica dejarlo explicitamente como `Null` qu dejarlo sin definir.

```javascript
let x = null // Como no se usó el operador "=" cuando se declaró esta variable, la variable no tiene nada "Undefined"

if (x) {
    // Como x no tiene valor, es considerado Falso, o "valor falsy" lo que significa que no expliitamente es falso, pero que se considera falso en las estructuras iterativas y condicionales gracias a una característica de Javascript llamada "Coercion"
}

```

**Funciones:** Las funciones en Javascript y en cualquier lenguaje de programación son fragmentos de código encerrados en un bloque que pueden ser definidos y ejecutados cuantas veces sea necesario. Las funciones pueden o no recibir valores en forma de argumentos para cumplir con su lógica al igual que pueden o no regresar algún valor como resultado.

En el caso particular de Javascript y de algunos otros lenguajes, las funciones pueden ser asignadas a variables para así ser enviadas como parámetros o regresadas como resultado de otra función. Esto da especial flexibilidad al momento de utilizar patrones de programación funcional. Podremos hablar de eso en un futuro cercano.

A diferencia de los demás tipos en Javascript, las funciones tienen varias forma de ser declaradas y cada una tiene un comportamiento diferente. Hablaremos también de eso más adelante. Por ahora solo ocupemonos de la versión más clásica.

```javascript
// Declaración de una función
function miFuncion(/* Argumentos */) {
    // Cuerpo de la función. Todo el código aquí será ejecutado cuando la función sea declarada

    // return es opcional si quieres regresar algún valor al final de la ejecución de tu función
}

// Ejecución de nuestra función recién creada
miFuncion()


// Si nuestra función regresara algo, recibiriamos el valor de la siguiente forma
let valorRegresado = miFuncion()
```

Por el momento es todo lo que vamos a hablar de los tipos de datos en Javascript, pero en los próximos posts entraremos más a detalle a cada uno de ellos. Igual es necesario entender que esto es solo una pequeña introducción y que hay muchas más documentación de lo que aquí podemos exponer, pues esto solo es el inicio de un tema mucho más grande.

GG.