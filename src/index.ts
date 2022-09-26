import { CongruentialResult, SquaredResult } from './class'
import { linealCongruential, middleSquare } from './formulas'

const results: SquaredResult[] =  middleSquare(3547, 10)

console.log(results)