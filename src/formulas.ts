import { CongruentialResult, SquaredResult } from './class'

export function linealCongruential(x0: number, a: number, c: number, m: number, n: number) : CongruentialResult[]
{
    let results: CongruentialResult[] = []
    let seed = x0

    for(let i = 0; i < n; i++){
        let res: CongruentialResult = new CongruentialResult(seed, a, c, m)
        seed = res.numberResult
        results.push(res)
    }

    return results
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


