import { CongruentialResult, MixedCongruentialResult, SquaredResult } from './class'
import { isPrimeRelative, isOnlyMDivisibleByPrime, isOnlyMDivisibleByFour } from './aux'

export function linealCongruential(x0: number, a: number, c: number, m: number, n: number) : CongruentialResult[]
{
    let result: CongruentialResult[] = []
    let seed = x0

    for(let i = 0; i < n; i++){
        let res: CongruentialResult = new CongruentialResult(seed, a, c, m)
        seed = res.numberResult
        result.push(res)
    }

    return result
}

export function mixedLinealCongruential(x0: number, a: number, c: number, m: number, n: number) : MixedCongruentialResult
{
    let result: MixedCongruentialResult = new MixedCongruentialResult()
    let seed: number = x0

    result.completesRule1 = isPrimeRelative(a, m)
    result.completesRule2 = isOnlyMDivisibleByPrime(m, a)
    result.completesRule3 = isOnlyMDivisibleByFour(m, a)

    result.result = linealCongruential(seed, a, c, m, n)

    return result
}

export function middleSquare(x0: number, n:number) : SquaredResult[] 
{
    let results: SquaredResult[] = []
    let seed = x0

    for(let i = 0; i < n; i++){
        let res: SquaredResult = new SquaredResult(seed)
        seed = res.numberResult
        results.push(res)
    }

    return results
}


