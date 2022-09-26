export function getMiddleNumber(n: number)
{
    let numberString: string = n.toString()
    let middle: number
    let middleNumber: number
    if((numberString.length % 2) == 0){

        middle = (numberString.length - 4) / 2 + 1
        middleNumber = parseInt(numberString.substring(middle - 1, middle + 3))
        
    }else {

        middle = Math.ceil((numberString.length - 4) / 2)
        middleNumber = parseInt(numberString.substring(middle - 1, middle + 3))
    }
    
    return middleNumber
}