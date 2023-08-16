//Biblioteca planificacion.js
const readline = require('readline');

//Esta función verifica que el código ingresado tenga el formato correcto
function verificarCodigo(codigo) {
            //Verifica que el largo del código sea 5
  if (codigo.length != 5) {
      return false;
      }     //Verifica que los primeros 3 caracteres sean letras
  const letras = codigo.substring(0, 3).match(/[A-Z]+/g);
  if (!letras || letras[0].length != 3) {
      return false;
      }     //Verifica que los últimos 2 caracteres sean números
  const numeros = codigo.substring(3, 5).match(/[0-9]+/g);
  if (!numeros || numeros[0].length != 2) {
      return false;
  }
  return true;
}

//Esta función pide el código al usuario
async function pedirCodigo() {
  const cod = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  return new Promise((resolve) => {
    cod.question('Por favor, ingrese su código: ', (codigo) => {
      cod.close();
      resolve(codigo)
  })
  })
}

//Se le agrega el async para que el main la pueda esperar
async function abrirSistemas(delay) {
  let delay2;
  if (delay < 3300) {   //Si el delay es menor a 3300, se asigna 3300
    delay2 = 3300
  } else {
    delay2 = delay
  }
  return new Promise((resolve) => {
    setTimeout( () => {
      console.log("\nPuede iniciar el proceso");
      resolve()
    }, delay2);
  })
}

function cerrarSistemas(){
   console.log("sistemas cerrados de forma segura\n");
}

//Esta funcion se modificó para que el resolve siempre retorne un objeto
async function restriccionesSanitarias(restriccion, destino) {
  const randomGenerado = Math.floor(Math.random() * 91) + 10  //Genera un número aleatorio entre 10 y 100
  return new Promise((resolve, reject) => {
   setTimeout( () => {
    if (!restriccion || !destino) {   //Si no se ingresó un destino o una restricción, se rechaza la promesa
      reject("Error: La ciudad del código indicado no se encuantra registrada");
    }
    const objReturn = {};
    if(randomGenerado < restriccion) {
      objReturn.restriccion = true;
      objReturn.status = "Sin restricciones sanitarias a destino: " + destino;
    }
    else {
     objReturn.restriccion = false;
     objReturn.status = "Restriccion: Hay restricciones, no podrá ir a ese destino, codigo de restriccion: " + randomGenerado
    }
    resolve(objReturn);
   }, 3353);
 })
}

function emiteCertificado(destino) {
  return new Promise((resolve, reject) => {
   setTimeout( () => {
       const objReturn = {};
       objReturn.certificado = true;
       objReturn.status = "Certificado emitido para destino " + destino;
       if (!destino) {
        reject("error en emisión");
       } else {
        resolve(objReturn);
        }
    }, 3103);
  });
}

//Se exportan las funciones para que puedan ser utilizadas en el main
module.exports = {
  abrirSistemas: abrirSistemas,
  cerrarSistemas: cerrarSistemas,
  restriccionesSanitarias: restriccionesSanitarias,
  emiteCertificado: emiteCertificado,
  pedirCodigo: pedirCodigo,
  verificarCodigo: verificarCodigo
}
