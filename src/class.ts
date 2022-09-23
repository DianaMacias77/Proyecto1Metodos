export class Result
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

