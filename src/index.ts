import { CongruentialResult, MixedCongruentialResult, SquaredResult } from './class'
import { linealCongruential, middleSquare, mixedLinealCongruential } from './formulas'
import { paintSquaredResult } from './view'

const results: MixedCongruentialResult = mixedLinealCongruential(1, 5, 3, 16, 10)

console.log(results)