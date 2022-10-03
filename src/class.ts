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
        this.numberRandom = result / 1000
    }

}

export class CongruentialInput
{
    public seed: number
    public a: number
    public c: number
    public m: number

    constructor(seed: number, a: number, c: number = 0, m: number){
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
            generatorString += `${inputs[i].numberResult} +`
            res += inputs[i].numberResult * Math.pow(-1, i)
        }

        this.numberResult = res % (m1 - 1)
        this.numberRandom = this.numberResult / (m1 - 1)

    }
}


