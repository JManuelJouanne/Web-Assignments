import { server_url } from "./Calculator"

const operate = async (visor, setVisor) => {
    //respone manejado por fetch para multiplicacion (GET)
    if (visor.includes("x") && visor[visor.length - 1] !== "x") { //Tambien revisa que el "x" no sea el ultimo caracter
        const [num1, num2] = visor.split("x")                     //Separa los numeros
        if (num1.substring(1).includes("-") || num2.substring(1).includes("-")) {
            setVisor("Invalid Operation")                         //Revisa que no hayan "-" entremedio (solo al principio)
        } else {
            const url = `${server_url}/multiplicacion/${num1}/${num2}` //URL para el fetch
            await fetch(url).then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    return "ERROR"
                }
            })
            .then(data => {
                setVisor(data.result)                            //Setea el resultado en el visor
            })                                                   //Es el mismpo procedimiento para las otras operaciones
        }
    //respone manejado por fetch para suma (GET)
    } else if (visor.includes("+") && visor[visor.length - 1] !== "+") {
        const [num1, num2] = visor.split("+")
        if (num1.substring(1).includes("-") || num2.substring(1).includes("-")) {
            setVisor("Invalid Operation")
        } else {
            const url = `${server_url}/suma/${num1}/${num2}`
            await fetch(url).then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    return "ERROR"
                }
            })
            .then(data => {
                setVisor(data.result)
            })
        }
    //respone manejado por fetch para division (POST)
    } else if (visor.includes("÷") && visor[visor.length - 1] !== "÷") {
        const [num1, num2] = visor.split("÷")
        if (num1.substring(1).includes("-") || num2.substring(1).includes("-")) {
            setVisor("Invalid Operation")
        } else {
            const url = `${server_url}/division`
            const body = {num1: num1, num2: num2}
            await fetch(url, {          //Se configura el fetch
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }).then(response => {
                console.log(response)
                if (response.ok) {
                    return response.json()
                } else {
                    return "ERROR"
                }
            })
            .then(data => {
                setVisor(data.result)
            })
        }
    //respone manejado por fetch para resta (POST)
    } else if (visor.includes("-") && visor[visor.length - 1] !== "-") {
        const elements = visor.split("-")
        if (elements.length === 2 && elements[0] !== "") {      //Si hay un solo "-"
            var [num1, num2] = elements
        } else if (elements.length === 3 && elements[0] === "") { //Si hay dos "-", quedan dos numeros negativos
            var [num1, num2] = elements.slice(1)
            num1 = "-" + num1
        } else {
            setVisor("Invalid Operation")
            return
        }

        const url = `${server_url}/resta`
        const body = {num1: num1, num2: num2}
        await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return "ERROR"
            }
        })
        .then(data => {
            setVisor(data.result)
        })
    }
}

export default operate