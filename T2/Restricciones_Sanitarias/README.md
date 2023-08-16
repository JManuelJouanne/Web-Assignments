# Restricciones Sanitarias
## José Manuel Jouanne

Si no están instaladas las dependencias, correr
````
npm install
````
en la terminal dentro de la carpeta.

Este programa se ejecuta con 
```
node index
````
Utilice la libreía `readline` e importe el módulo "propio" de `planificacion.js`, a la que le sumé un parde funciones más.

Para manejar el programa se debe hacer los siguiente
___
### 1 - 
El programa va a pedir por consola, un input de un código de una ciudad. Por ejemplo
```
STG00
````
sería el de Santiago.
___
### 2 -
El programa va a checkear que el código esté en el formato correcto. Esto es con tres letras y dos dígitos. En caso de estar en formato incorrecto, va a pedir otro código hasta que se inserte un código que esté correcto.

___
### 3 -
El programa va a abrir los sistemas y va a revisar si encuentra el código en su lista de destinos. En caso de que no esté en la lista, va a manejar el error e imprimirlo. Luego va a cerrar los sistemas sin caerse.

___
### 4 -
Si el código se encuentra en la lista, va a retornar el objeto de la ciudad y va a llamar a las funciones de `restriccionesSanitarias` y `emiteCertificado` si es que corresponde, imprimiendo el status en ambos casos.
___
### 5 -
Se cierran los sistemas
___
Hay varias funciones asincrónicas, que funcionan de esta manera para ir esperando a las otras funciones. Para esto las definí con `async`, las llamé con `await` y retorné sus promesas. De está forma, todos los outputs se imprimen en el orden esperado.


