//Se importa el modulo con las funciones utilizadas
const m = require('./planificacion.js')

//Arreglo con los destinos posibles, se puede modificar
const destinos = [
    { codigo: "STG00", destino: "Santiago", restriccion: 3 },
    { codigo: "LSC01", destino: "La Serena", restriccion: 13 },
    { codigo: "ANF02", destino: "Antofagasta", restriccion: 89 },
    { codigo: "IQQ03", destino: "Iquique", restriccion: 45 },
    { codigo: "CCP04", destino: "Concepción", restriccion: 28 },
    { codigo: "ZAL05", destino: "Valdivia", restriccion: 70 },
    { codigo: "PMC06", destino: "Puerto Montt", restriccion: 53 },
    { codigo: "CJC07", destino: "Calama", restriccion: 72 }
]

//funcion main acincronica
async function main() {
    //Se espera a que el usuario ingrese el código
    let codigo = await m.pedirCodigo()  //Se creó una función pedirCodigo en el archivo planificacion.js
    codigo = codigo.toUpperCase()      //Se convierte el código a mayúsculas
                                        //osea que el usuario puede colocar el codigo con minúsculas si lo desea
    var verif = m.verificarCodigo(codigo)  //Se creó una función verificarCodigo en el archivo planificacion.js
    while (!verif) {                        //para revisar el formato del código (tres letras y dos digitos)
        console.log("Código debe ser en formato AAA00 (3 letras seguidas de 2 números)")
        codigo = await m.pedirCodigo()
        codigo = codigo.toUpperCase()
        verif = m.verificarCodigo(codigo)
    }

    await m.abrirSistemas(4000)    //Se espera a que se abra el sistema
    const destino = destinos.find(d => d.codigo == codigo) //Se busca el destino en el arreglo de destinos

    if (destino) {  //Si el destino existe, se verifica si tiene restricciones
        const restriccion = await m.restriccionesSanitarias(destino.restriccion, destino.destino)
        console.log(restriccion.status) //Se imprime el estado de la restricción

        if (restriccion.restriccion) { //Si el destino no tiene restricciones, se emite el certificado
            const certificado = await m.emiteCertificado(destino.destino)
            console.log(certificado.status)
        }
    } else {   //Si el destino no existe, se emite un error
        console.log("Error: La ciudad del código indicado no se encuantra registrada")
    }    

    m.cerrarSistemas() //Se cierran los sistemas
}

//Se invoca la función main
main()
