import { SquaredResult, CongruentialResult, MixedCongruentialResult, CombinedCongruentialResult } from "./class";

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