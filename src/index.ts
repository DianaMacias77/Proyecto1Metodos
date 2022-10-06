import { CongruentialInput, CongruentialResult, MixedCongruentialResult, CombinedCongruentialResult ,SquaredResult } from './class'
import { linealCongruential, middleSquare, mixedCongruential, multiplicationCongruential, combinedCongruential, chiSquared } from './formulas'
import { paintSquaredResult, paintCongruentialResult, paintMixedCongruentialResult, paintCombinedCongruentialResult } from './view'

//const input = new CongruentialInput(5, 3, 0, 11)

//const results: CongruentialResult[] = multiplicationCongruential(input, 10)

//chiSquared(results.map(result => result.numberRandom))

declare global {
    interface Window {
      middleSquaresHandler: Function;
      congruentialHandler: Function;
      mixedCongruentialHandler: Function;
      congruentialMultiplicationHandler: Function;
      combinedCongruentialHandler: Function;
    }
}

function middleSquaresHandler(){
  let seed = parseInt((document.getElementById("seed") as HTMLInputElement).value)
  let n = parseInt((document.getElementById("n") as HTMLInputElement).value)

  let results:SquaredResult[] = middleSquare(seed, n)

  paintSquaredResult(results)
}

function congruentialHandler(){
  let seed = parseInt((document.getElementById("seed") as HTMLInputElement).value)
  let a = parseInt((document.getElementById("a") as HTMLInputElement).value)
  let c = parseInt((document.getElementById("c") as HTMLInputElement).value)
  let m = parseInt((document.getElementById("m") as HTMLInputElement).value)
  let n = parseInt((document.getElementById("n") as HTMLInputElement).value)

  let input = new CongruentialInput(seed, a, c, m)

  let results:CongruentialResult[] = linealCongruential(input, n)

  paintCongruentialResult(results)
}

function mixedCongruentialHandler(){
    let seed = parseInt((document.getElementById("seed") as HTMLInputElement).value)
    let a = parseInt((document.getElementById("a") as HTMLInputElement).value)
    let c = parseInt((document.getElementById("c") as HTMLInputElement).value)
    let m = parseInt((document.getElementById("m") as HTMLInputElement).value)
    let n = parseInt((document.getElementById("n") as HTMLInputElement).value)

    let input = new CongruentialInput(seed, a, c, m)
  
    let results:MixedCongruentialResult = mixedCongruential(input, n)

    paintMixedCongruentialResult(results, a, m)
}

function congruentialMultiplicationHandler(){
    let seed = parseInt((document.getElementById("seed") as HTMLInputElement).value)
    let a = parseInt((document.getElementById("a") as HTMLInputElement).value)
    let c = 0
    let m = parseInt((document.getElementById("m") as HTMLInputElement).value)
    let n = parseInt((document.getElementById("n") as HTMLInputElement).value)

    let input = new CongruentialInput(seed, a, c, m)

    let results:CongruentialResult[] = multiplicationCongruential(input, n)

    paintCongruentialResult(results)
}

function combinedCongruentialHandler(){
    let k = parseInt((document.getElementById("k") as HTMLInputElement).value)
    let seed:number[] = (document.getElementById("seed") as HTMLInputElement).value.split(",").map(x => parseInt(x))
    let a:number[] = (document.getElementById("a") as HTMLInputElement).value.split(",").map(x => parseInt(x))
    let m:number[] = (document.getElementById("m") as HTMLInputElement).value.split(",").map(x => parseInt(x))
    let n = parseInt((document.getElementById("n") as HTMLInputElement).value)

    let inputs:CongruentialInput[] = []

    for(let i = 0; i < k; i++){
        let input = new CongruentialInput(seed[i], a[i], 0, m[i])
        inputs.push(input)
    }

    if(seed.length === k && a.length === k && m.length === k){
      let results:CombinedCongruentialResult[] = combinedCongruential(inputs, n)
      paintCombinedCongruentialResult(results)
    }else{
        alert("All the arrays must be the same length as k")
    }

    

}

//Crear todos los handlers
// Validar esos numeros aleatorios con pruebas de bondad
// Hacer bonito el front

window.middleSquaresHandler = middleSquaresHandler;
window.congruentialHandler = congruentialHandler;
window.mixedCongruentialHandler = mixedCongruentialHandler;
window.congruentialMultiplicationHandler = congruentialMultiplicationHandler;
window.combinedCongruentialHandler = combinedCongruentialHandler;
