import { CongruentialResult, SquaredResult } from './class'
import { linealCongruential, middleSquare } from './formulas'
import { paintSquaredResult } from './view'

const results: SquaredResult[] =  middleSquare(3547, 100)

paintSquaredResult(results)