import { CongruentialInput, CongruentialResult, MixedCongruentialResult, CombinedCongruentialResult, SquaredResult } from './class'
import { linealCongruential, middleSquare, mixedCongruential, multiplicationCongruential, combinedCongruential } from './formulas'
import { paintSquaredResult, paintCongruentialResult } from './view'

//const results: CongruentialResult[] = multiplicationCongruential(117, 43, 1000, 25)

//console.log(results)

declare global {
    interface Window {
      congruentialMultiplicationHandler: Function;
    }
}

function congruentialMultiplicationHandler(){
    let seed = parseInt((document.getElementById("seed") as HTMLInputElement).value)
    let a = parseInt((document.getElementById("a") as HTMLInputElement).value)
    let c = 0
    let m = parseInt((document.getElementById("m") as HTMLInputElement).value)
    let n = parseInt((document.getElementById("n") as HTMLInputElement).value)

    let input = new CongruentialInput(seed, a, c, m)

    let results = multiplicationCongruential(input, n)

    paintCongruentialResult(results)
}

//Crear todos los handlers
// Validar esos numeros aleatorios con pruebas de bondad
// Hacer bonito el front

window.congruentialMultiplicationHandler = congruentialMultiplicationHandler;