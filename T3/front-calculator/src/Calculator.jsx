import { useState } from "react"
import "./Calculator.css"
import operate from "./Operations"

export const server_url = "http://localhost:80"
//No usé un .env para el server_url porque a React no le gusta mucho parece

export default function Calculator() {

    const [visor, setVisor] = useState("")      //Lo que se muestra en el visor
    const [result, setResult] = useState(false)   //Para saber si lo del visor es el resultado de una operación

    const handleClick = (tecla) => {    //Manejo de los clicks en los botones
        if (tecla === "C" || result) {  //Para borrar cuando se apreta "C" o después de mostrar un resultado
            if (tecla === "C") {
                setVisor("")
            } else {
                if ("-0123456789".includes(tecla)){
                    setVisor(tecla)
                } else {
                    setVisor("")
                }
            setResult(false)
            }
        } else if (tecla === "<-") {    //Para borrar el último caracter
            setVisor(visor.slice(0, -1))
        } else if (tecla === "=") {
            setResult(true)
            operate(visor, setVisor)    //funcion que se encarga del fetch. Está en Operations.jsx
        } else if (tecla === "x" && visor !== "" && !visor.includes("x") && !visor.includes("÷") && !visor.includes("+")) {
            setVisor(visor + "x")       //Condiciones para cuidar la semantica
        } else if (tecla === "÷" && visor !== "" && !visor.includes("x") && !visor.includes("÷") && !visor.includes("+")) {
            setVisor(visor + "÷")
        } else if (tecla === "+" && visor !== "" && !visor.includes("x") && !visor.includes("÷") && !visor.includes("+")) {
            setVisor(visor + "+")
        } else if ("-0123456789".includes(tecla)) {
            setVisor(visor + tecla)
        }
    }

    //Calculadora gráfica               butt2: botones que ocupan 2 espacios
    return (
        <div className="calculator">
            <div id="visor">
                <label> {visor} </label>
            </div>
            <div className="butt1">
                <div id="butt2">
                    <button onClick={() => handleClick("C")}>C</button>
                </div>
                <button onClick={() => handleClick("<-")}>⌫</button>
                <button onClick={() => handleClick("÷")}>÷</button>
            </div>
            <div className="butt1">
                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("9")}>9</button>
                <button onClick={() => handleClick("x")}>x</button>
            </div>
            <div className="butt1">
                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("6")}>6</button>
                <button onClick={() => handleClick("-")}>-</button>
            </div>
            <div className="butt1">
                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("2")}>2</button>
                <button onClick={() => handleClick("3")}>3</button>
                <button onClick={() => handleClick("+")}>+</button>
            </div>
            <div className="butt1">
                <div id="butt2">
                    <button onClick={() => handleClick("0")}>0</button>
                </div>
                <div id="butt2">
                    <button onClick={() => handleClick("=")}>=</button>
                </div>
            </div>
        </div>
    )
}