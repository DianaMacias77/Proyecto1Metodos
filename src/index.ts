import { CongruentialInput, CongruentialResult, MixedCongruentialResult, CombinedCongruentialResult ,SquaredResult } from './class'
import { linealCongruential, middleSquare, mixedCongruential, multiplicationCongruential, combinedCongruential, chiSquared, kolmgorovSmirnov } from './formulas'
import { paintSquaredResult, paintCongruentialResult, paintMixedCongruentialResult, paintCombinedCongruentialResult, paintCombinedPeriod, paintChiResult, paintKolmogorovResult } from './view'
import { chiSquaredAt, kolmogorovAt } from './aux'


//const input = new CongruentialInput(5, 3, 0, 11)

//const results: CongruentialResult[] = multiplicationCongruential(input, 10)

const randomNumbers = []



declare global {
    interface Window {
      middleSquaresHandler: Function;
      congruentialHandler: Function;
      mixedCongruentialHandler: Function;
      congruentialMultiplicationHandler: Function;
      combinedCongruentialHandler: Function;
      openHandler: Function;
    }
}

function middleSquaresHandler(){
  let seed = parseInt((document.getElementById("seed") as HTMLInputElement).value)
  let n = parseInt((document.getElementById("n") as HTMLInputElement).value)

  let results:SquaredResult[] = middleSquare(seed, n)

  if(checkIfChiSquaredChecked()){
    validateChiSquared(results.map(x => x.numberRandom))    
  }

  if(checkIfKolmogorovSmirnovChecked()){
    validateKolmogorovSmirnov(results.map(x => x.numberRandom))
  }


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

  if(checkIfChiSquaredChecked()){
    validateChiSquared(results.map(x => x.numberRandom))    
  }

  if(checkIfKolmogorovSmirnovChecked()){
    validateKolmogorovSmirnov(results.map(x => x.numberRandom))
  }


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

    if(checkIfChiSquaredChecked()){
      validateChiSquared(results.map(x => x.numberRandom))    
    }
  
    if(checkIfKolmogorovSmirnovChecked()){
      validateKolmogorovSmirnov(results.map(x => x.numberRandom))
    }  
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

    if(checkIfChiSquaredChecked()){
      validateChiSquared(results.map(x => x.numberRandom))    
    }
  
    if(checkIfKolmogorovSmirnovChecked()){
      validateKolmogorovSmirnov(results.map(x => x.numberRandom))
    }  

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

      if(checkIfChiSquaredChecked()){
        validateChiSquared(results.map(x => x.numberRandom))    
      }
    
      if(checkIfKolmogorovSmirnovChecked()){
        validateKolmogorovSmirnov(results.map(x => x.numberRandom))
      }

      paintCombinedPeriod(m)
      paintCombinedCongruentialResult(results)

    }else{
        alert("All the arrays must be the same length as k")
    }
}

function checkIfChiSquaredChecked():boolean{
  let chiSquaredCheck = (document.getElementById("chiSquaredCheck") as HTMLInputElement).checked
  return chiSquaredCheck
}

function getChiProbability() : number{
  let chiProbability = parseFloat((document.getElementById("chiProbability") as HTMLInputElement).value)
  return chiProbability
}

function validateChiSquared(numbers:number[]){

  let chiResult = chiSquared(numbers)

  let chiDistResult = chiSquaredAt(getChiProbability(), numbers.length - 1,)

  paintChiResult(chiResult.intervals, chiResult.chiSquaredRes, chiDistResult)

}



function checkIfKolmogorovSmirnovChecked():boolean{
  let kolmogorovSmirnovCheck = (document.getElementById("kolmogorovCheck") as HTMLInputElement).checked
  return kolmogorovSmirnovCheck
}

function getKolmogorovProbability(){
  let kolmogorovProbability = parseFloat((document.getElementById("kolmogorovProbability") as HTMLInputElement).value)
  return kolmogorovProbability
}

function validateKolmogorovSmirnov(numbers:number[]){

  let kolmogorovResult = kolmgorovSmirnov(numbers)

  let kolmogorovDistResult = kolmogorovAt(getKolmogorovProbability(), numbers.length)

  paintKolmogorovResult(kolmogorovResult.results, kolmogorovResult.dPlus, kolmogorovResult.dMinus, kolmogorovDistResult)
}



  

//Crear todos los handlers
// Validar esos numeros aleatorios con pruebas de bondad
// Hacer bonito el front

window.middleSquaresHandler = middleSquaresHandler;
window.congruentialHandler = congruentialHandler;
window.mixedCongruentialHandler = mixedCongruentialHandler;
window.congruentialMultiplicationHandler = congruentialMultiplicationHandler;
window.combinedCongruentialHandler = combinedCongruentialHandler;
