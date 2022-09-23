import { Result } from './class'
import { linealCongruential } from './formulas'

const results: Result[] = linealCongruential(4,7,7,12,100)

console.log(results)