import { CongruentialInput, CongruentialResult, MixedCongruentialResult, SquaredResult, CombinedCongruentialResult, ChiSquaredInterval } from './class'
import { isPrimeRelative, isOnlyMDivisibleByPrime, isOnlyMDivisibleByFour } from './aux'

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


export function linealCongruential(input:CongruentialInput, n: number) : CongruentialResult[]
{
    let result: CongruentialResult[] = []

    for(let i = 0; i < n; i++){
        let res: CongruentialResult = new CongruentialResult(input)
        input.seed = res.numberResult
        result.push(res)
    }

    return result
}

export function mixedCongruential(input:CongruentialInput, n: number) : MixedCongruentialResult
{
    let result: MixedCongruentialResult = new MixedCongruentialResult()

    result.completesRule1 = isPrimeRelative(input.a, input.m)
    result.completesRule2 = isOnlyMDivisibleByPrime(input.m, input.a)
    result.completesRule3 = isOnlyMDivisibleByFour(input.m, input.a)

    result.result = linealCongruential(input, n)

    return result
}




export function multiplicationCongruential(input:CongruentialInput, n: number) : CongruentialResult[]
{
    let result: CongruentialResult[] = []
    input.c = 0

    for(let i = 0; i < n; i++){
        let res: CongruentialResult = new CongruentialResult(input)
        input.seed = res.numberResult
        result.push(res)
    }

    return result
}

export function combinedCongruential(inputs:CongruentialInput[], n: number) : CombinedCongruentialResult[]
{
    let finalResult: CombinedCongruentialResult[] = []
    let congruentialResults: CongruentialResult[][] = []

    for(let i = 0; i < inputs.length; i++){
        congruentialResults.push(multiplicationCongruential(inputs[i], n))
    }

    console.log(congruentialResults)
    
    //Loop the second index and then change the first index
    // Save in an array the results with the same second index
    for(let i = 0; i < n; i++){
        let results: CongruentialResult[] = []
        
        for(let j = 0; j < congruentialResults.length; j++){
            results.push(congruentialResults[j][i])
        }

        finalResult.push(new CombinedCongruentialResult(results, inputs[0].m))
    }
    
    return finalResult
}

export function chiSquared(randomNumbers:number[]){
    randomNumbers = randomNumbers.sort()
    let range = randomNumbers[randomNumbers.length - 1] - randomNumbers[0]
    let k = Math.floor(1 + 3.322 * Math.log10(randomNumbers.length))
    let cl = range / k
    let intervals: ChiSquaredInterval[] = []

    console.log(k)
    console.log(randomNumbers)

    //create intervals
    for(let i = 0; i < k; i++){
        let interval: ChiSquaredInterval = new ChiSquaredInterval()
        interval.min = i === 0 ? randomNumbers[0] : intervals[i - 1].max
        interval.max = interval.min + cl
        interval.values = randomNumbers.filter(x => x >= interval.min && x < interval.max)
        intervals.push(interval)
    }

    // Merge intervals when the interval has less than 5 values
    for(let i = 0; i < intervals.length; i++){
        if(intervals[i].values.length < 5){
            intervals[i - 1].values = intervals[i - 1].values.concat(intervals[i].values)
            intervals[i - 1].max = intervals[i].max
            intervals.splice(i, 1)
            i--
        }
    }

    //Calcualate probability for each interval using uniform distribution
    intervals.forEach(interval => {
        interval.probability = interval.values.length / randomNumbers.length
    })

}