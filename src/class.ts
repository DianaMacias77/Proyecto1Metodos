import { getMiddleNumber} from './aux'
export class CongruentialResult
{
    seed: number
    generator: string
    numberResult: number
    numberRandom: number

    constructor(seed: number, a: number, c: number, m: number)
    {
        let preModResult = ((a * seed) + c)
        let result = preModResult % m
        this.seed = seed
        this.generator = `(${a}(${seed}) + ${c}) mod ${m} = ${preModResult} mod ${m}`
        this.numberResult = result
        this.numberRandom = result / m
    }
}

export class MixedCongruentialResult 
{
    completesRule1: boolean
    completesRule2: boolean
    completesRule3: boolean
    result: CongruentialResult[]
}


export class SquaredResult 
{
    seed: number
    generator: number
    numberResult: number
    numberRandom: number

    constructor(seed: number)
    {
        let preResult:number = seed * seed
        let result: number = getMiddleNumber(preResult)
        this.seed = seed
        this.generator = preResult
        this.numberResult = result
        this.numberRandom = result / 1000
    }

}


