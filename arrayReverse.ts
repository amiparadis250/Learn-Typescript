// Write a Javascript function that takes an array of numbers and return a reversed version


function arrayReverse(arr:number[], ):number[] {
    let newArray:number[] = [];
    for(let i=arr.length-1; i>=0; i--){
        newArray.push(arr[i]);
    }
    return newArray;
}
console.log(arrayReverse([12,23,12,9,54]));