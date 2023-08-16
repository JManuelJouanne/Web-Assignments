# Encrypt
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
Utilice la libreía `readline` y `fs`

Para manejar el programa se debe hacer los siguiente
___
### 1 - 
El programa va a pedir por consola, un input de un número entero. Por ejemplo uno puede colocar el
```
76
````
o cualquier otro.
___
### 2 -
El programa va a perdir una ruta (también por la consola). Es importante que si es una ruta relativa se comience con `./`. Dentro de la carpeta ya hay otra carpeta llamada archivos en la que se encuantra una prueba del programa. Si uno quisiera acceder a esa carpeta, habría que pasar la ruta.
````
./archivos
````
___
### 3 -
El programa pide el nombre del archivo a encriptar. En el caso del ejemplo que subí, se puede colocar por ejemplo:
````
archivo.txt
````
Si se quiere probar denuevo el programa, se puede editar el contenido archivo `archivo.txt` o pasar un parámetro de rotación distinto
___
* En caso de que la ruta o el archivo no exista, el programa se cierra.
* En caso de que el usuario ingrese algo distinto a un entero para la rotación, el valor por defecto será 1.

De esta forma el programa no se cae.


