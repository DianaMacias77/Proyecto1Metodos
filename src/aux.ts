import { gammapinv } from './chisquared'

export function getMiddleNumber(n: number)
{
    let numberString: string = n.toString()
    let middle: number
    let middleNumber: number
    if((numberString.length % 2) == 0){

        middle = (numberString.length - 4) / 2 + 1
        middleNumber = parseInt(numberString.substring(middle - 1, middle + 3))
        
    }else {

        middle = Math.ceil((numberString.length - 4) / 2)
        middleNumber = parseInt(numberString.substring(middle - 1, middle + 3))
    }
    
    return middleNumber
}


export function isPrimeRelative(a: number, b: number)
{
    let gcd = getGCD(a, b)
    return gcd == 1
}

function getGCD(a: number, b: number):number
{
    if(b == 0){
        return a
    }else{
        return getGCD(b, a % b)
    }
}

export function isOnlyMDivisibleByPrime(m: number, a:number) : boolean
{
    let isMDivisible:boolean = true
    let primes = getPrimes(m)
    primes.forEach(prime => {
        if(a > prime){
            if(m % prime == 0){
                if((a-1) % prime != 0){
                    isMDivisible = false
                }
                
            }
        }
        
    });
    return isMDivisible
}

export function isOnlyMDivisibleByFour(m: number, a:number) : boolean
{
    let isMDivisible:boolean = true
    if((m % 4) == 0){
        if((a-1) % 4 != 0){
            isMDivisible = false
        }
    };
    return isMDivisible
}

function getPrimes(n: number): number[]
{
    let primes: number[] = []
    for(let i = 2; i <= n; i++){
        if(isPrime(i)){
            primes.push(i)
        }
    }
    return primes
}

function isPrime(n: number): boolean{
    let isPrime = true
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            isPrime = false
        }
    }
    return isPrime
}

export function chiSquaredAt(x: number, k: number)
{
    return inv(1 - x, k)
}
    

function inv(p:number, dof:number) {
    return 2 * gammapinv(p, 0.5 * dof);
}