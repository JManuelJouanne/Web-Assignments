//Se importan los modulos necesarios
const readline = require('readline')
const fs = require('fs')

// Creamos una interfaz de lectura para leer las entradas por consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//Se piden inputs de los tres parametros
rl.question('Ingrese un número entero: ', (numero) => {
    var rotacion = parseInt(numero)
    if (!Number.isInteger(rotacion)) {
        rotacion = 1
    }
    rl.question('Ingrese una ruta: ', (ruta) => {
      rl.question('Ingrese un nombre de archivo: ', (nombreArchivo) => {
        // Creamos la ruta completa al archivo
        const rutaCompleta = `${ruta}/${nombreArchivo}`
        // Verificamos si el archivo existe
        fs.access(rutaCompleta, fs.constants.F_OK, (err) => {
          if (err) {
            console.error(`El archivo '${nombreArchivo}' no existe en la ruta '${ruta}'`)
            console.log('Si está usando rutas relativas, asegúrese de comenzar con "./"')
            rl.close()
          } else {
            console.log(`Se ingresó el número entero '${numero}', la ruta '${ruta}' y el nombre de archivo '${nombreArchivo}'.`)

            // Leemos el archivo
            fs.readFile(rutaCompleta, 'utf8', (err, data) => {
                if (err) {
                    console.error(`No se pudo leer el archivo '${nombreArchivo}'`)
                } else {
                    console.log(`Contenido del archivo '${nombreArchivo}':`)
                }
            rl.close()

            // Algunas veriables útiles
            let textoEncriptado = ''    //Texto encriptado
            const letras = 'abcdefghijklmnopqrstuvwxyzáéíóúü'  //Letras del para dar la vuelta
            const letrasMayusculas = letras.toUpperCase()      //Letras en mayúsculas
            const len = letras.length                //Longitud para el caso de que se pase de la longitud

            // Encriptación
            for (let i = 0; i < data.length; i++) {        //Se recorre el texto
                let letra = data.charAt(i)               //Se obtiene la letra
                if (letras.includes(letra)) {        //Si la letra está en el string de letras se encripta
                    let posicion = letras.indexOf(letra)
                    posicion += rotacion
                    if (posicion >= len) {
                        posicion = posicion%len    //Si se pasa de la longitud, se le resta la longitud
                    }
                    textoEncriptado += letras.charAt(posicion)  //Se agrega la letra encriptada al texto encriptado
                } else if (letrasMayusculas.includes(letra)) {  //Lo mismo pero para mayúsculas
                    let posicion = letrasMayusculas.indexOf(letra)
                    posicion += rotacion
                    if (posicion >= len) {
                        posicion = posicion%len
                    }
                    textoEncriptado += letrasMayusculas.charAt(posicion)
                } else {
                    textoEncriptado += letra    //Si no es una letras, se agrega sin encriptar
                }
            }

            console.log(textoEncriptado)   //Se imprime el texto encriptado en consola, para verlo

            const nuevoNombreArchivo = nombreArchivo.replace('.', '_cifrado.') //Se crea el nombre del nuevo archivo
            const rutaNuevoArchivo = `${ruta}/${nuevoNombreArchivo}`   //Se crea la ruta del nuevo archivo
            fs.writeFile(rutaNuevoArchivo, textoEncriptado, (err) => { //Se escribe el nuevo archivo
                if (err) {
                    console.error('No se pudo escribir el archivo')
                } else {
                    console.log(`Se escribió el archivo '${nuevoNombreArchivo}' en la ruta '${ruta}'`)
                }
            })
            })
          }
        })
      })
    })
})


