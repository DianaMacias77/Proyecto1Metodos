import { SquaredResult } from "./class";

export function paintSquaredResult(results : SquaredResult[]) : void{
    results.forEach(res => {
        let element = document.createElement("p")
        let elementText = document.createTextNode(res.numberResult.toString())
        element.appendChild(elementText)
        document.body.appendChild(element)
    });
    

}