import { Result } from './class'

export function linealCongruential(x0: number, a: number, c: number, m: number, n: number) : Result[]
{
    let results: Result[] = []
    let seed = x0

    for(let i = 0; i < n; i++){
        let res: Result = new Result(seed, a, c, m)
        seed = res.numberResult
        results.push(res)
    }

    return results
}