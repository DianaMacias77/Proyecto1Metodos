import { CongruentialResult, MixedCongruentialResult, SquaredResult } from './class'
import { linealCongruential, middleSquare, mixedCongruential, multiplicationCongruential } from './formulas'
import { paintSquaredResult } from './view'

const results: CongruentialResult[] = multiplicationCongruential(117, 43, 1000, 25)

console.log(results)