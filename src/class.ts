import { getMiddleNumber} from './aux'

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
        this.numberRandom = result / 10000
    }

}

export class CongruentialInput
{
    public seed: number
    public a: number
    public c: number
    public m: number

    constructor(seed: number, a: number, c: number, m: number){
        this.seed = seed
        this.a = a
        this.c = c
        this.m = m
    }
}
export class CongruentialResult
{
    seed: number
    generator: string
    numberResult: number
    numberRandom: number


    constructor(input: CongruentialInput)
    {
        let preModResult = ((input.seed * input.a) + input.c)
        let result = preModResult % input.m
        this.seed = input.seed
        this.generator = `(${input.a}(${input.seed})${input.c !== 0 ? " + " + input.c : ""}) mod ${input.m} = ${preModResult} mod ${input.m}`
        this.numberResult = result
        this.numberRandom = result /input.m
    }
}

export class MixedCongruentialResult 
{
    completesRule1: boolean
    completesRule2: boolean
    completesRule3: boolean
    result: CongruentialResult[]

}

export class CombinedCongruentialResult
{
    seeds: number[]
    generator: string
    numberResult: number
    numberRandom: number

    constructor(inputs: CongruentialResult[], m1:number){

        this.seeds = inputs.map(input => input.numberResult)

        let res:number = 0
        let generatorString = ""

        for(let i = 0; i < inputs.length; i++){
            generatorString += `((${inputs[i].numberResult}*${Math.pow(-1, i)}) +`
            res += inputs[i].numberResult * Math.pow(-1, i)
        }

        this.generator = generatorString.slice(0, -1) + `)mod ${m1} = ${res} mod ${m1}`
        this.numberResult = res % (m1 - 1)
        this.numberRandom = this.numberResult / (m1 - 1)

    }
}

export class ChiSquaredInterval{
    public min: number
    public max: number
    public values: number[]
    public theoricalProbability: number
    public theoricalFrequency: number
    public result: number

}

export class kolmgorovSmirnovResult{
    public randomNumber: number
    public theoricalProbability: number
    public randomMinusTheorical: number
    public theoricalMinusRandom: number
}