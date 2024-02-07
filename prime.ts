// Write a Javascript function that takes an array of numbers and returns a new array of prime numbers 
// filtered from the old array.


const isPrime= (num: number): boolean =>{
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function primeFilter(numbers: number[],){
    let newArray: number[] = [];
    for(let i=0; i<numbers.length; i++){
        if(isPrime(numbers[i])){
            newArray.push(numbers[i]);
        }
    }
    return newArray;
}

let numbering = [2, 3, 5, 7, 11, 13,44,23,88,21,29];
console.log(primeFilter(numbering));