import { SquaredResult, CongruentialResult } from "./class";

export function paintSquaredResult(results : SquaredResult[]) : void{
    results.forEach(res => {
        let element = document.createElement("p")
        let elementText = document.createTextNode(res.numberResult.toString())
        element.appendChild(elementText)
        document.body.appendChild(element)
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