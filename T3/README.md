# Calculadora  🧮
## José Manuel Jouanne

Si no están instaladas las dependencias, correr (tanto para el front como para el back)
````
npm install
````
en la terminal dentro de cada carpeta.

tanto el backend como el frontend se pueden ejecutar con
```
yarn dev
````
el back se conecta a `http://localhost:80` mientras que el front se conecta por defecto al `http://localhost:5137`. En caso de que esto último no sea así, habría que cambiar la configuración del CORS en index.js del back (linea 19) con el puerto correspondiente.

* La calculadora funciona muy bien. Diría que cumplí con todo lo pedido en el enunciado. Manejé practicamente todos los errores del frot bloquenado algunas teclas en ciertos contextos del visor. La división por cero se maneja desde el back.
* El diseño lo hice entero por mi cuenta. Lo único que "copié" fueron algunos atributos del botón que venía por defecto en la app de React.
* No usé Copilot. ChatGPT lo usé solo para dudas particulares, sobre todo de sintaxis, pero no para generar código de base.
* Usé los métodos GET y POST de la forma que se pedía, manejando el HTTP response con fetch.
* Para el Back usé Koa y para el Front usé React, aunque en realidad usé bastante poco de React.
* Todos los botones funcionan bien, la calculadora no se cae. Los errores los muestra en el visor. Por ejemplo al colocar _"9÷0"_, en pantalla se muestra _"Error: division by 0"_, y si se coloca _"4--2"_ (con dos menos), en el visor se muestra _"Invalid Operation"_. El signo "-" es el único que puede aparecer dos veces en una operación (para hacer operaciones con números negativos).
* El dotenv no me funcionó en el front. Por alguna razón pareciera que a React no le gustan mucho las variables de entorno. En el back lo usé sin problemas.
