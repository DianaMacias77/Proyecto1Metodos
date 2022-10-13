import { SquaredResult, CongruentialResult, MixedCongruentialResult, CombinedCongruentialResult, ChiSquaredInterval } from "./class";

export function paintSquaredResult(results : SquaredResult[]) : void{

    document.getElementById("tableBody").innerHTML = ""

    let row = document.createElement("tr")

    let indexCol = document.createElement("td")
    let indexText = document.createTextNode("0")
    indexCol.appendChild(indexText)
    row.appendChild(indexCol)

    let seedCol = document.createElement("td")
    let seedText = document.createTextNode(results[0].seed.toString())
    seedCol.appendChild(seedText)
    row.appendChild(seedCol)


    let generatorCol = document.createElement("td")
    let generatorText = document.createTextNode("-")
    generatorCol.appendChild(generatorText)
    row.appendChild(generatorCol)

    let resultCol = document.createElement("td")
    let resultText = document.createTextNode("-")
    resultCol.appendChild(resultText)
    row.appendChild(resultCol)

    let randomCol = document.createElement("td")
    let randomText = document.createTextNode("-")
    randomCol.appendChild(randomText)
    row.appendChild(randomCol)

    document.getElementById("tableBody").appendChild(row)

    results.forEach( (res, index) => {
        
        let row = document.createElement("tr")

        index += 1
        let indexCol = document.createElement("td")
        let indexText = document.createTextNode(index.toString())
        indexCol.appendChild(indexText)
        row.appendChild(indexCol)

        let seedCol = document.createElement("td")
        let seedText = document.createTextNode(res.seed.toString())
        seedCol.appendChild(seedText)
        row.appendChild(seedCol)


        let generatorCol = document.createElement("td")
        let generatorText = document.createTextNode(res.generator.toString())
        generatorCol.appendChild(generatorText)
        row.appendChild(generatorCol)

        let resultCol = document.createElement("td")
        let resultText = document.createTextNode(res.numberResult.toString())
        resultCol.appendChild(resultText)
        row.appendChild(resultCol)

        let randomCol = document.createElement("td")
        let randomText = document.createTextNode(res.numberRandom.toString())
        randomCol.appendChild(randomText)
        row.appendChild(randomCol)

        document.getElementById("tableBody").appendChild(row)
    });
    
}


export function paintCongruentialResult(results : CongruentialResult[]) : void{

    document.getElementById("tableBody").innerHTML = ""

    let row = document.createElement("tr")

    let indexCol = document.createElement("td")
    let indexText = document.createTextNode("0")
    indexCol.appendChild(indexText)
    row.appendChild(indexCol)

    let seedCol = document.createElement("td")
    let seedText = document.createTextNode(results[0].seed.toString())
    seedCol.appendChild(seedText)
    row.appendChild(seedCol)


    let generatorCol = document.createElement("td")
    let generatorText = document.createTextNode("-")
    generatorCol.appendChild(generatorText)
    row.appendChild(generatorCol)

    let resultCol = document.createElement("td")
    let resultText = document.createTextNode("-")
    resultCol.appendChild(resultText)
    row.appendChild(resultCol)

    let randomCol = document.createElement("td")
    let randomText = document.createTextNode("-")
    randomCol.appendChild(randomText)
    row.appendChild(randomCol)

    document.getElementById("tableBody").appendChild(row)

    results.forEach( (res, index) => {
        
        let row = document.createElement("tr")

        index += 1
        let indexCol = document.createElement("td")
        let indexText = document.createTextNode(index.toString())
        indexCol.appendChild(indexText)
        row.appendChild(indexCol)

        let seedCol = document.createElement("td")
        let seedText = document.createTextNode(res.seed.toString())
        seedCol.appendChild(seedText)
        row.appendChild(seedCol)


        let generatorCol = document.createElement("td")
        let generatorText = document.createTextNode(res.generator)
        generatorCol.appendChild(generatorText)
        row.appendChild(generatorCol)

        let resultCol = document.createElement("td")
        let resultText = document.createTextNode(res.numberResult.toString())
        resultCol.appendChild(resultText)
        row.appendChild(resultCol)

        let randomCol = document.createElement("td")
        let randomText = document.createTextNode(res.numberRandom.toString())
        randomCol.appendChild(randomText)
        row.appendChild(randomCol)

        document.getElementById("tableBody").appendChild(row)
    });
    
}

export function paintMixedCongruentialResult(results : MixedCongruentialResult, a: number, m:number) : void{

    document.getElementById("hull").innerHTML = ""

    let ruleP1 = document.createElement("p")
    let ruletext1:string = `1. <strong>${a}</strong> y <strong>${m}</strong> son primos relativos <span class="${results.completesRule1 ? "green" : "red"}"> &#11044; </span>`
    ruleP1.innerHTML = ruletext1
    document.getElementById("hull").appendChild(ruleP1)

    let ruleP2 = document.createElement("p")
    let ruletext2:string = `1. <strong>${a} - 1</strong> es divisible por todos los factores primos de <strong>${m}</strong> <span class="${results.completesRule2 ? "green" : "red"}"> &#11044; </span>`
    ruleP2.innerHTML = ruletext2
    document.getElementById("hull").appendChild(ruleP2)

    let ruleP3 = document.createElement("p")
    let ruletext3:string = `1. <strong>${a} - 1</strong> es divisible por <strong>4</strong>, si <strong>${m}</strong> es divisible por <strong>4</strong> <span class="${results.completesRule2 ? "green" : "red"}"> &#11044; </span>`
    ruleP3.innerHTML = ruletext3
    document.getElementById("hull").appendChild(ruleP3)

    let ruleFinal = document.createElement("h4")
    let completesHullDobbell = results.completesRule1 && results.completesRule2 && results.completesRule3
    let ruleFinalText:string = `<strong class="${completesHullDobbell ? "green": "red"}">El método de Hull-Dobell es ${completesHullDobbell ? "aplicable" : "no aplicable"} </strong>`
    ruleFinal.innerHTML = ruleFinalText
    document.getElementById("hull").appendChild(ruleFinal)

    if(completesHullDobbell){
        paintCongruentialResult(results.result)
    }
    
}

export function paintCombinedCongruentialResult(results : CombinedCongruentialResult[]) : void{

    document.getElementById("tableBody").innerHTML = ""

    let row = document.createElement("tr")

    let indexCol = document.createElement("td")
    let indexText = document.createTextNode("0")
    indexCol.appendChild(indexText)
    row.appendChild(indexCol)

    let seedCol = document.createElement("td")
    let seedText = document.createTextNode(results[0].seeds.toString())
    seedCol.appendChild(seedText)
    row.appendChild(seedCol)


    let generatorCol = document.createElement("td")
    let generatorText = document.createTextNode("-")
    generatorCol.appendChild(generatorText)
    row.appendChild(generatorCol)

    let resultCol = document.createElement("td")
    let resultText = document.createTextNode("-")
    resultCol.appendChild(resultText)
    row.appendChild(resultCol)

    let randomCol = document.createElement("td")
    let randomText = document.createTextNode("-")
    randomCol.appendChild(randomText)
    row.appendChild(randomCol)

    document.getElementById("tableBody").appendChild(row)

    results.forEach( (res, index) => {
        
        let row = document.createElement("tr")

        index += 1
        let indexCol = document.createElement("td")
        let indexText = document.createTextNode(index.toString())
        indexCol.appendChild(indexText)
        row.appendChild(indexCol)

        let seedCol = document.createElement("td")
        let seedText = document.createTextNode(res.seeds.toString())
        seedCol.appendChild(seedText)
        row.appendChild(seedCol)


        let generatorCol = document.createElement("td")
        let generatorText = document.createTextNode(res.generator)
        generatorCol.appendChild(generatorText)
        row.appendChild(generatorCol)

        let resultCol = document.createElement("td")
        let resultText = document.createTextNode(res.numberResult.toString())
        resultCol.appendChild(resultText)
        row.appendChild(resultCol)

        let randomCol = document.createElement("td")
        let randomText = document.createTextNode(res.numberRandom.toString())
        randomCol.appendChild(randomText)
        row.appendChild(randomCol)

        document.getElementById("tableBody").appendChild(row)
    });
}


export function paintChiResult(interval: ChiSquaredInterval[], calcChiResult: number, theoricalChiResult: number){

    let result = calcChiResult < theoricalChiResult

    document.getElementById("chiTableBody").innerHTML = "";

    interval.forEach( (int, index) => {
        let row = document.createElement("tr")

        let indexCol = document.createElement("td")
        let indexText = document.createTextNode((index + 1).toString())
        indexCol.appendChild(indexText)
        row.appendChild(indexCol)

        let intervalCol = document.createElement("td")
        let intervalText = document.createTextNode(`${int.min.toFixed(4)} - ${int.max.toFixed(4)}`)
        intervalCol.appendChild(intervalText)
        row.appendChild(intervalCol)

        let oiCol = document.createElement("td")
        let oiText = document.createTextNode(int.values.length.toString())
        oiCol.appendChild(oiText)
        row.appendChild(oiCol)

        let probCol = document.createElement("td")
        let probText = document.createTextNode(int.theoricalProbability.toFixed(4).toString())
        probCol.appendChild(probText)
        row.appendChild(probCol)

        let eiCol = document.createElement("td")
        let eiText = document.createTextNode(int.theoricalFrequency.toFixed(4).toString())
        eiCol.appendChild(eiText)
        row.appendChild(eiCol)

        let resCol = document.createElement("td")
        let resText = document.createTextNode(int.result.toFixed(4).toString())
        resCol.appendChild(resText)
        row.appendChild(resCol)

        document.getElementById("chiTableBody").appendChild(row)
    })

    document.getElementById("chiConclusion").innerHTML = "";

    let resultCalc = document.createElement("p")
    let resultCalcText = document.createTextNode(`El resultado de Chi Calculado es: ${calcChiResult.toFixed(4)}`)
    resultCalc.appendChild(resultCalcText)
    document.getElementById("chiConclusion").appendChild(resultCalc)

    let resultTheo = document.createElement("p")
    let resultTheoText = document.createTextNode(`El resultado de Chi Teórico es: ${theoricalChiResult.toFixed(4)}`)
    resultTheo.appendChild(resultTheoText)
    document.getElementById("chiConclusion").appendChild(resultTheo)

    let resultFinal = document.createElement("h4")
    let resultText:string = `<span class="${result ? "green" : "red"}"> &#11044; </span> <strong>${calcChiResult.toFixed(4)} ${result ? "<" : "≰"} ${theoricalChiResult.toFixed(4)}</strong> `
    resultFinal.innerHTML = resultText
    document.getElementById("chiConclusion").appendChild(resultFinal)

}